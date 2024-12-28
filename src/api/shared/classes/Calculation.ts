import { z } from 'zod'
import { isNil } from 'lodash'
import { LabelType } from '../../../types/localization.types'

type CalculationOutputSchema = {
  label: LabelType
  type: z.ZodTypeAny
  unit?: LabelType
  interpretation?: LabelType
  terminology?: unknown
}

export type CalculationType<
  InputSchema extends z.ZodObject<Record<string, z.ZodTypeAny>>,
  OutputSchema extends Record<string, CalculationOutputSchema>
> = {
  name: string
  readme_location: string
  inputSchema: InputSchema
  outputSchema: OutputSchema
  formData?: {
    [K in keyof z.infer<InputSchema>]: unknown
  }
  calculate: CalculateFn<InputSchema, OutputSchema>['calculate']
}

type CalculateFn<
  InputSchema extends z.ZodObject<Record<string, z.ZodTypeAny>>,
  OutputSchema extends Record<string, CalculationOutputSchema>
> = {
  calculate?: (opts: {
    data: z.infer<InputSchema>
  }) => Record<
    keyof OutputSchema,
    z.infer<OutputSchema[keyof OutputSchema]['type']> | null
  >
}

export class Calculation<
  InputSchema extends z.ZodObject<Record<string, z.ZodTypeAny>>,
  OutputSchema extends Record<string, CalculationOutputSchema>
> implements Omit<CalculationType<InputSchema, OutputSchema>, 'calculate'>
{
  name: string
  readme_location: string
  inputSchema: InputSchema
  outputSchema: OutputSchema
  formData?: Record<keyof z.infer<InputSchema>, unknown>
  _calculate?: CalculateFn<InputSchema, OutputSchema>['calculate']

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
  }

  /**
   * We don't know the shape of the data when the class is instantiated.
   * We need to parse the data before we can call the onCalculate function.
   */
  calculate(opts: {
    payload: unknown
  }): Record<
    keyof OutputSchema,
    z.infer<OutputSchema[keyof OutputSchema]['type']> | null
  > {
    if (!isNil(this._calculate)) {
      const parsedData = this.inputSchema.parse(opts.payload)

      return this._calculate({
        data: parsedData,
      })
    } else {
      throw new Error('Failed to calculate')
    }
  }
}
