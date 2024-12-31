import { z } from 'zod'
import { type LabelType } from './Label.types'

export interface CodeType {
  coding: {
    system: string
    code: string
    display: string
  }[]
  text: string
}

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
