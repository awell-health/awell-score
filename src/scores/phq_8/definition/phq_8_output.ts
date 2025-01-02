import { ScoreOutputSchemaType } from '../../../types'
import { z } from 'zod'

export const PHQ8_OUTPUT = {
  PHQ8_SCORE: {
    label: { en: 'PHQ-8 Score' },
    type: z.number(),
  },
  PHQ8_INTERPRETATION: {
    label: { en: 'PHQ-8 Interpretation' },
    type: z.string(),
  },
} satisfies ScoreOutputSchemaType
