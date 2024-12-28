import { z } from 'zod'
import { LabelType } from '../../../types/localization.types'
import { InputType } from '../../../types/calculations.types'
import _ from 'lodash'

type CalculationInputSchema = Record<
  string,
  {
    type: z.ZodTypeAny
    input_label?: LabelType
    unit?: LabelType
  }
>

type CalculationOutputSchema = {
  label: LabelType
  type: z.ZodTypeAny
  unit?: LabelType
  interpretation?: LabelType
  terminology?: unknown
}

// Utility function to create ZodObject from enriched schema
const createZodObjectFromSchema = <T extends CalculationInputSchema>(
  schema: T
): z.ZodObject<{ [K in keyof T]: T[K]['type'] }> => {
  const zodShape: Record<string, z.ZodTypeAny> = {}

  for (const [key, value] of Object.entries(schema)) {
    zodShape[key] = value.type
  }

  return z.object(zodShape) as z.ZodObject<{ [K in keyof T]: T[K]['type'] }>
}

export type CalculationType<
  InputSchema extends CalculationInputSchema,
  OutputSchema extends Record<string, CalculationOutputSchema>
> = {
  name: string
  readme_location: string
  inputSchema: InputSchema
  outputSchema: OutputSchema
  formData?: {
    [K in keyof InputSchema]: Pick<InputType, 'input_label' | 'format' | 'info'>
  }
  calculate: CalculateFn<
    z.ZodObject<{ [K in keyof InputSchema]: InputSchema[K]['type'] }>,
    OutputSchema
  >['calculate']
}

type CalculateFn<
  InputSchema extends z.ZodObject<Record<string, z.ZodTypeAny>>,
  OutputSchema extends Record<string, CalculationOutputSchema>
> = {
  calculate: (opts: {
    data: z.infer<InputSchema>
  }) => Record<
    keyof OutputSchema,
    z.infer<OutputSchema[keyof OutputSchema]['type']> | null
  >
}

export class Calculation<
  InputSchema extends CalculationInputSchema,
  OutputSchema extends Record<string, CalculationOutputSchema>
> implements Omit<CalculationType<InputSchema, OutputSchema>, 'calculate'>
{
  name: string
  readme_location: string
  inputSchema: InputSchema
  outputSchema: OutputSchema
  formData?: Record<
    keyof InputSchema,
    Pick<InputType, 'input_label' | 'format' | 'info'>
  >
  _calculate: CalculateFn<
    z.ZodObject<{ [K in keyof InputSchema]: InputSchema[K]['type'] }>,
    OutputSchema
  >['calculate']
  inputSchemaAsObject: z.ZodObject<{
    [K in keyof InputSchema]: InputSchema[K]['type']
  }>

  public constructor(
    calculation: Omit<CalculationType<InputSchema, OutputSchema>, 'schema'> & {
      inputSchema: InputSchema
      outputSchema: OutputSchema
    }
  ) {
    this.name = calculation.name
    this.readme_location = calculation.readme_location
    this.inputSchema = calculation.inputSchema
    this.outputSchema = calculation.outputSchema
    this.formData = calculation.formData
    this._calculate = calculation.calculate
    this.inputSchemaAsObject = createZodObjectFromSchema(this.inputSchema)

    this.validate()
  }

  calculate(opts: {
    payload: unknown
  }): Record<
    keyof OutputSchema,
    z.infer<OutputSchema[keyof OutputSchema]['type']> | null
  > {
    const parsedData = this.inputSchemaAsObject.parse(opts.payload)

    return this._calculate({
      data: parsedData,
    })
  }

  validate() {
    if (!this.formData) return true

    const formDataKeys = Object.keys(this.formData)
    const inputSchemaKeys = Object.keys(this.inputSchema.shape)

    const missingKeys = _.difference(inputSchemaKeys, formDataKeys)
    const extraKeys = _.difference(formDataKeys, inputSchemaKeys)

    if (missingKeys.length > 0 || extraKeys.length > 0) {
      console.error(
        `Form data does not match input schema. Missing keys: ${missingKeys.join(
          ', '
        )}, Extra keys: ${extraKeys.join(', ')}`
      )
      throw new Error('Form data does not match input schema')
    }

    return true
  }
}
