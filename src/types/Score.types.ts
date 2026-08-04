import { z } from 'zod'
import { type ScoreInputSchemaType } from './ScoreInput.types'
import { type ScoreOutputSchemaType } from './ScoreOutput.types'
import { type AvailableLanguagesType } from './Label.types'

export interface CodeType {
  coding: {
    system: string
    code: string
    display: string
  }[]
  text?: string
}

export interface TerminologyType {
  category?: CodeType[]
  code?: CodeType & { text?: string }
}

/**
 * Licensing status of the underlying clinical instrument (not the Awell Score
 * source code, which is always MIT licensed). Defaults to 'unknown' when a
 * definition omits it. Never inferred or guessed — only set when a verifiable
 * source confirms the status.
 */
export const LICENSING_STATUS_VALUES = [
  'public_domain',
  'free_with_attribution',
  'license_required',
  'unknown',
] as const

export type LicensingStatusType = (typeof LICENSING_STATUS_VALUES)[number]

export type ScoreType<
  InputSchema extends ScoreInputSchemaType = ScoreInputSchemaType,
  OutputSchema extends ScoreOutputSchemaType = ScoreOutputSchemaType,
> = {
  name: string
  readmeLocation: string
  inputSchema: InputSchema
  outputSchema: OutputSchema
  terminology?: TerminologyType
  licensing_status?: LicensingStatusType
  license_contact?: string | null
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
    language?: AvailableLanguagesType
  }) => Record<
    keyof OutputSchema,
    z.infer<OutputSchema[keyof OutputSchema]['type']> | null
  >
}
