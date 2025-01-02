import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const BLCS_OUTPUT = {
  BLCS_TOTAL_SCORE: {
    label: { en: 'Total score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
