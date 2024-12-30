import { z } from 'zod'
import { type LabelType } from './Label.types'

export interface ScoreOutputType {
  label: LabelType
  type: z.ZodTypeAny
  unit?: LabelType
  interpretation?: LabelType
  terminology?: unknown
}

export type ScoreOutputSchemaType = Record<string, ScoreOutputType>
