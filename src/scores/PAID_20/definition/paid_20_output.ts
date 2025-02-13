import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const PAID20_OUTPUT = {
  PAID20_SCORE: {
    label: { en: 'PAID-20 Score' },
    type: z.number(),
  },
  PAID20_QUESTIONS_WITH_SCORE_3_OR_4: {
    label: { en: 'PAID-20 Questions with score 3 or 4' },
    type: z.string(),
  },
  PAID20_INTERPRETATION: {
    label: { en: 'PAID-20 Interpretation' },
    type: z.string(),
  },
} satisfies ScoreOutputSchemaType
