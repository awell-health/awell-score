import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const BWCS_OUTPUT = {
  BWCS_TOTAL_SCORE: {
    label: { en: 'Total score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
