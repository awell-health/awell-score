import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../types'

export const OMPQ_10_OUTPUT = {
  OREBRO: {
    label: { en: 'Total' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
