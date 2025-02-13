import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const AQ10_OUTPUT = {
  AQ10_SCORE: {
    label: { en: 'AQ-10 Score' },
    type: z.number(),
  },
  AQ10_INTERPRETATION: {
    label: { en: 'AQ-10 Interpretation' },
    type: z.string(),
  },
} satisfies ScoreOutputSchemaType
