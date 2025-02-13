import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const CDR_OUTPUT = {
  CDR_SCORE: {
    label: { en: 'CDR score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
