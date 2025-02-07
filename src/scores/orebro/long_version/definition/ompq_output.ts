import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../types'

export const OMPQ_OUTPUT = {
  OMPQ: {
    label: { en: 'Total score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
