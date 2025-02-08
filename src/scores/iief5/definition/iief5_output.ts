import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const IIEF5_OUTPUT = {
  IIEF5_TOTAL_SCORE: {
    label: { en: 'IIEF-5 Total Score' },
    type: z.number(),
  },
  IIEF5_INTERPRETATION: {
    label: { en: 'IIEF-5 Interpretation' },
    type: z.string(),
  },
} satisfies ScoreOutputSchemaType
