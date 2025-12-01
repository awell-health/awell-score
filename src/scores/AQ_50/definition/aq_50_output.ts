import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const AQ50_OUTPUT = {
  AQ50_SCORE: {
    label: { en: 'AQ-50 Score' },
    type: z.number(),
  },
  AQ50_INTERPRETATION: {
    label: { en: 'AQ-50 Interpretation' },
    type: z.string(),
  },
} satisfies ScoreOutputSchemaType

