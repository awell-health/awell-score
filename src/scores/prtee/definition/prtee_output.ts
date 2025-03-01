import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const PRTEE_OUTPUT = {
  TOTAL: {
    label: { en: 'Total score' },
    type: z.number(),
  },
  PAIN: {
    label: { en: 'Pain' },
    type: z.number(),
  },
  FUNCTION: {
    label: { en: 'Function' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
