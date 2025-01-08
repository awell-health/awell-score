import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../../types'

export const SHORT_FES_I_OUTPUT = {
  SHORT_FES_I_TOTAL_SCORE: {
    label: { en: 'Short FES-I total score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
