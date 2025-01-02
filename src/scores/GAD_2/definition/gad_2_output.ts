import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const GAD2_OUTPUT = {
  GAD2_SCORE: {
    label: { en: 'GAD-2 Score' },
    type: z.number(),
  },
  GAD2_INTERPRETATION: {
    label: { en: 'GAD-2 Interpretation' },
    type: z.string(),
  },
} satisfies ScoreOutputSchemaType
