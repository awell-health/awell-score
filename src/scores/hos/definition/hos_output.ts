import { z } from 'zod'
import type { ScoreOutputSchemaType } from '../../../types'

export const HOS_OUTPUT = {
  TOTAL: {
    label: { en: 'Total score' },
    type: z.number(),
  },
  ADL: {
    label: { en: 'ADL subscale' },
    type: z.number(),
  },
  SPORTS: {
    label: { en: 'Sports subscale' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
