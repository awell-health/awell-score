import { ScoreOutputSchemaType } from '../../../types'
import { z } from 'zod'
export const MLKS_OUTPUT = {
  MLKS_TOTAL_SCORE: {
    label: { en: 'Total score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
