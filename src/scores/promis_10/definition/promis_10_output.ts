import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const PROMIS_10_OUTPUT = {
  GLOBAL_PHYSICAL_HEALTH_RAW_SCORE: {
    label: { en: 'Global Physical Health: raw score' },
    type: z.number(),
  },
  GLOBAL_MENTAL_HEALTH_RAW_SCORE: {
    label: { en: 'Global Mental Health: raw score' },
    type: z.number(),
  },
  GLOBAL_PHYSICAL_HEALTH_T_SCORE: {
    label: { en: 'Global Physical Health: T-score' },
    type: z.number(),
  },
  GLOBAL_MENTAL_HEALTH_T_SCORE: {
    label: { en: 'Global Mental Health: T-score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
