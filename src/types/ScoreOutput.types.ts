import { z } from 'zod'
import { type LabelType } from './Label.types'
import { type CodeType } from './Score.types'

export interface ScoreOutputType {
  label: LabelType
  type: z.ZodString | z.ZodNumber | z.ZodBoolean
  unit?: LabelType
  interpretation?: LabelType
  terminology?: {
    code: CodeType
  }
}

export type ScoreOutputSchemaType = Record<string, ScoreOutputType>
