import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../types'

export const OMPQ_10_OUTPUT = {
  OREBRO: {
    label: { en: 'Total' },
    type: z.number(),
  },
  INTERPRETATION: {
    label: { en: 'Interpretation' },
    type: z.string(),
  },
} satisfies ScoreOutputSchemaType
