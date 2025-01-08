import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'
export const ZARIT_12_OUTPUT = {
  ZARIT_12: {
    label: { en: 'Total score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
