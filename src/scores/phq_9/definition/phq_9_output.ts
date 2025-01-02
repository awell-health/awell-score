import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const PHQ9_OUTPUT = {
  PHQ9_SCORE: {
    label: { en: 'PHQ-9 Score' },
    type: z.number(),
  },
  PHQ9_INTERPRETATION: {
    label: { en: 'PHQ-9 Interpretation' },
    type: z.string(),
  },
} satisfies ScoreOutputSchemaType
