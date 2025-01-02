import { z } from 'zod'
import { type ScoreInputSchemaType } from './ScoreInput.types'
import { type ScoreOutputSchemaType } from './ScoreOutput.types'

export interface CategoryType {
  coding: {
    system: string
    code: string
    display: string
  }[]
}

export interface TerminologyType {
  category?: CategoryType[]
}

export type ScoreType<
  InputSchema extends ScoreInputSchemaType = ScoreInputSchemaType,
  OutputSchema extends ScoreOutputSchemaType = ScoreOutputSchemaType,
> = {
  name: string
  readmeLocation: string
  inputSchema: InputSchema
  outputSchema: OutputSchema
  terminology?: TerminologyType
  calculate: CalculateFn<
    z.ZodObject<{ [K in keyof InputSchema]: InputSchema[K]['type'] }>,
    OutputSchema
  >['calculate']
}

export type CalculateFn<
  InputSchema extends z.ZodObject<Record<string, z.ZodTypeAny>>,
  OutputSchema extends ScoreOutputSchemaType,
> = {
  calculate: (opts: {
    data: z.infer<InputSchema>
  }) => Record<
    keyof OutputSchema,
    z.infer<OutputSchema[keyof OutputSchema]['type']> | null
  >
}
