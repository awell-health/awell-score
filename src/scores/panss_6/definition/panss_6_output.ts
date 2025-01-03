import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const PANNS_6_OUTPUT = {
  PANNS_6_TOTAL_SCORE: {
    label: { en: 'PANNS-6 Total Score' },
    type: z.number(),
  },
  PANNS_6_POSITIVE_SCALE_SCORE: {
    label: { en: 'PANNS-6 Positive Scale Score' },
    type: z.number(),
  },
  PANNS_6_NEGATIVE_SCALE_SCORE: {
    label: { en: 'PANNS-6 Negative Score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
