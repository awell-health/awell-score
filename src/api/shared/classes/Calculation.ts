import { z } from 'zod'
import { LabelType } from '../../../types/localization.types'
import { CalculationInputSchema } from '../../../types/calculations/inputs/calculation-inputs.types'

type CalculationOutputSchema = {
  label: LabelType
  type: z.ZodTypeAny
  unit?: LabelType
  interpretation?: LabelType
  terminology?: unknown
}

// Utility function to create ZodObject from enriched schema
export const createZodObjectFromSchema = <T extends CalculationInputSchema>(
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
    this._calculate = calculation.calculate
    this.inputSchemaAsObject = createZodObjectFromSchema(this.inputSchema)
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
}
