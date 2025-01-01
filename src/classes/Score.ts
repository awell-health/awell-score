import { z } from 'zod'
import {
  type ScoreInputSchemaType,
  type ScoreOutputSchemaType,
  type ScoreType,
  type CalculateFn,
  type CategoryType,
  type TerminologyType,
} from '../types'
import {
  parseReadmeToHtml,
  getUnionType,
  createZodObjectFromSchema,
  parseToAwellApiSchema,
} from '../lib'
import {
  tryCastToBoolean,
  tryCastToNumber,
  tryCastToString,
  tryCastToStringsArray,
  tryCastToNumbersArray,
} from '../lib/castFunctions'
import _ from 'lodash'
import { simulateDateInput, simulateStringInput } from '../lib/simulation'
import { parseToApiResultFormat } from '../lib/parseToApiResultFormat'

/**
 * Class representing a Score, which calculates results based on input and output schemas.
 * @template InputSchema - The input schema type for the score.
 * @template OutputSchema - The output schema type for the score.
 */
export class Score<
  InputSchema extends ScoreInputSchemaType,
  OutputSchema extends ScoreOutputSchemaType,
> implements Omit<ScoreType<InputSchema, OutputSchema>, 'calculate'>
{
  /**
   * The ID of the score.
   */
  id: string

  /**
   * The name of the score.
   */
  name: string

  /**
   * The description of the score.
   */
  description: string

  /**
   * The location of the score's README file.
   */
  readme_location: string

  /**
   * The input schema defining the expected structure of the input data.
   */
  inputSchema: InputSchema

  /**
   * The output schema defining the structure of the result.
   */
  outputSchema: OutputSchema

  /**
   * The FHIR terminology of the score.
   */
  terminology: TerminologyType | undefined

  /**
   * The function to calculate the score.
   */
  private _calculate: CalculateFn<
    z.ZodObject<{ [K in keyof InputSchema]: InputSchema[K]['type'] }>,
    OutputSchema
  >['calculate']

  /**
   * A Zod object representing the input schema for validation.
   */
  inputSchemaAsObject: z.ZodObject<{
    [K in keyof InputSchema]: InputSchema[K]['type']
  }>

  /**
   * Constructs a Score instance.
   * @param score - The score configuration containing input/output schemas and calculation logic.
   */
  public constructor(
    score: ScoreType<InputSchema, OutputSchema> & {
      id?: string
      inputSchema: InputSchema
      outputSchema: OutputSchema
    },
  ) {
    this.id = score.id ?? score.name
    this.name = score.name
    this.readme_location = score.readme_location
    this.description = parseReadmeToHtml(this.readme_location)
    this.inputSchema = score.inputSchema
    this.outputSchema = score.outputSchema
    this.terminology = score.terminology
    this._calculate = score.calculate
    this.inputSchemaAsObject = createZodObjectFromSchema(this.inputSchema)
  }

  /**
   * Calculates results based on the provided payload and options.
   * @param params - The calculation parameters, including the payload and options.
   * @returns The calculation results, formatted as specified in the options.
   */
  calculate(params: {
    payload: Record<string, unknown>
    opts?: {
      /**
       * If true, inputs will be strictly validated against the schema.
       * For example, a numeric input must be a number and cannot be serialized as a string.
       * @default false
       */
      strictMode?: boolean
    }
  }): Record<
    keyof OutputSchema,
    z.infer<OutputSchema[keyof OutputSchema]['type']> | null
  > {
    const d = this.inputSchemaAsObject.parse(
      params?.opts?.strictMode === true
        ? params.payload
        : this.tryCastInputsToExactTypes(params.payload),
    )

    return this._calculate({
      data: d,
    })
  }

  /**
   * Tries to cast input values to their exact types based on the input schema.
   * @param input - The input data to cast.
   * @returns The cast input data.
   */
  tryCastInputsToExactTypes(
    data: Record<string, unknown>,
  ): Record<string, unknown> {
    /**
     * Casts a single input value to its exact type.
     * @param input_value - The value to cast.
     * @param key - The key of the input field.
     * @returns The cast value.
     */
    const castInputToExactType = (input_value: unknown, key: string) => {
      const inputTypeSchema = this.inputSchema[key]?.type

      if (!inputTypeSchema) return input_value

      /**
       * Retrieves the base Zod type, unwrapping optional types if necessary.
       * @returns The base Zod type.
       */
      const getZodType = () => {
        if (inputTypeSchema instanceof z.ZodOptional) {
          const unwrappedType = inputTypeSchema.unwrap()
          return unwrappedType
        }

        return inputTypeSchema
      }

      const inputType = getZodType()

      if (inputType instanceof z.ZodNumber) return tryCastToNumber(input_value)

      if (inputType instanceof z.ZodString) return tryCastToString(input_value)

      if (inputType instanceof z.ZodBoolean)
        return tryCastToBoolean(input_value)

      if (inputType instanceof z.ZodUnion) {
        const unionType = getUnionType(inputType)

        if (unionType === 'number') {
          return tryCastToNumber(input_value)
        }

        if (unionType === 'string') {
          return tryCastToString(input_value)
        }
      }

      if (inputType instanceof z.ZodArray) {
        const itemType = inputType.element

        if (itemType instanceof z.ZodUnion) {
          const unionType = getUnionType(itemType)

          if (unionType === 'number') {
            return tryCastToNumbersArray(input_value)
          }
          if (unionType === 'string') {
            return tryCastToStringsArray(input_value)
          }
        }
      }

      return input_value
    }

    return _.mapValues(data, castInputToExactType)
  }

  /**
   * Simulates input values based on the input schema.
   * @returns The simulated input data and the resut.
   */
  simulate(): {
    simulatedInput: Record<string, unknown>
    results: Record<
      keyof OutputSchema,
      z.infer<OutputSchema[keyof OutputSchema]['type']> | null
    >
  } {
    const simulatedInput = _.mapValues(
      this.inputSchemaAsObject.shape,
      zodType => {
        const getZodType = () => {
          if (zodType instanceof z.ZodOptional) {
            const unwrappedType = zodType.unwrap()
            return unwrappedType
          }

          return zodType
        }

        const inputType = getZodType()

        if (inputType instanceof z.ZodString) {
          const isDate = inputType._def.checks.find(
            check => check.kind === 'date',
          )
          if (isDate) {
            return simulateDateInput()
          }

          return simulateStringInput()
        }

        if (inputType instanceof z.ZodBoolean) {
          return _.sample([true, false])
        }

        if (inputType instanceof z.ZodNumber) {
          const min = inputType.minValue
          const max = inputType.maxValue

          return _.random(min ?? 0, max ?? 100, false)
        }

        if (inputType instanceof z.ZodUnion) {
          const optionValues = inputType.options.map(option => option.value)
          return _.sample(optionValues)
        }

        if (inputType instanceof z.ZodArray) {
          const itemType = inputType.element

          if (itemType instanceof z.ZodUnion) {
            const optionValues = itemType.options.map(option => option.value)
            const randomNumberBetweenOneAndMax = _.random(
              1,
              optionValues.length,
            )
            return _.sampleSize(optionValues, randomNumberBetweenOneAndMax)
          }
        }

        return undefined
      },
    )

    return {
      simulatedInput: _.pickBy(simulatedInput, value => value !== undefined),
      results: this.calculate({ payload: simulatedInput }),
    }
  }

  /**
   * Formats the results of the score calculation.
   * @param results - The results to format.
   * @param opts - The options for formatting the results.
   * @returns The formatted results.
   */
  formatResults(
    results: Record<
      keyof OutputSchema,
      z.infer<OutputSchema[keyof OutputSchema]['type']> | null
    >,
    opts: {
      /**
       * Specifies the format of the output:
       * - `simple`: Key-value where the key is the result ID and the value is the result.
       * - `awell`: Enriched array format.
       * @default 'simple'
       */
      format?: 'simple' | 'awell'
    },
  ) {
    if (opts?.format === 'simple') {
      return results
    }

    return parseToApiResultFormat<OutputSchema>(results, this.outputSchema)
  }

  /**
   * Returns the API schema for the score.
   * @returns The API schema for the score.
   */
  get apiSchema() {
    return parseToAwellApiSchema({
      scoreId: this.id,
      scoreName: this.name,
      scoreDescription: this.description,
      inputSchema: this.inputSchema,
      outputSchema: this.outputSchema,
      terminology: this.terminology,
    })
  }
}
