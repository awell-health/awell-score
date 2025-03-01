import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const SPADI_OUTPUT = {
  TOTAL: {
    label: { en: 'Total score' },
    type: z.number(),
  },
  PAIN: {
    label: { en: 'Pain dimension' },
    type: z.number(),
  },
  DISABILITY: {
    label: { en: 'Disability dimension' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
