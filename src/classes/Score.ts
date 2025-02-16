import { z, ZodError } from 'zod'
import {
  type ScoreInputSchemaType,
  type ScoreOutputSchemaType,
  type ScoreType,
  type CalculateFn,
  type TerminologyType,
} from '../types'
import {
  parseReadmeToHtml,
  createZodObjectFromSchema,
  parseToAwellApiSchema,
  parseToApiResultFormat,
} from '../lib'
import { mapValues } from 'lodash'
import { deduplicateZodIssues, preprocessPayload } from '../lib/zod'
import { simulateScoreInput } from '../lib/simulation'
import { tryCastInputsToExactTypes } from '../lib/castFunctions'

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
  readmeLocation: string

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
    this.readmeLocation = score.readmeLocation
    this.description = parseReadmeToHtml(this.readmeLocation)
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
      /**
       * If true, the function will return null for all results if required inputs are missing.
       * ZodErrors only occur when the input data is invalid (e.g. mismatch in type, required fields missing)
       * @default false
       */
      nullOnMissingInputs?: boolean
    }
  }): Record<
    keyof OutputSchema,
    z.infer<OutputSchema[keyof OutputSchema]['type']> | null
  > {
    try {
      const zodMissingIssues = preprocessPayload(
        this.inputSchemaAsObject,
        params.payload,
      )

      const _payload = params?.opts?.strictMode
        ? params.payload
        : this.tryCastInputsToExactTypes(params.payload)

      const result = this.inputSchemaAsObject.safeParse(_payload)

      if (!result.success) {
        const deduplicatedIssues = deduplicateZodIssues([
          ...zodMissingIssues,
          ...result.error.issues,
        ])
        throw new ZodError(deduplicatedIssues)
      }

      return this._calculate({ data: result.data })
    } catch (err) {
      if (err instanceof ZodError) {
        if (params?.opts?.nullOnMissingInputs === true) {
          const allZodIssues = err.issues

          // Check if all issues are related to missing inputs
          // Other type of issues we still want to throw
          const hasOnlyMissingInputs = allZodIssues.every(issue =>
            issue.message.toLowerCase().includes('required'),
          )

          if (hasOnlyMissingInputs) {
            return mapValues(this.outputSchema, () => null)
          }
        }
      }
      throw err
    }
  }

  /**
   * Tries to cast input values to their exact types based on the input schema.
   * @param input - The input data to cast.
   * @returns The cast input data.
   */
  tryCastInputsToExactTypes(
    data: Record<string, unknown>,
  ): Record<string, unknown> {
    return tryCastInputsToExactTypes(this.inputSchema, data)
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
    const simulatedInput = simulateScoreInput(this.inputSchemaAsObject)
    const simulatedResults = this.calculate({ payload: simulatedInput })

    return {
      simulatedInput,
      results: simulatedResults,
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
