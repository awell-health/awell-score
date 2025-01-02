import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const GAD7_OUTPUT = {
  GAD7_SCORE: {
    label: { en: 'GAD-7 Score' },
    type: z.number(),
  },
  GAD7_INTERPRETATION: {
    label: { en: 'GAD-7 Interpretation' },
    type: z.string(),
  },
} satisfies ScoreOutputSchemaType
