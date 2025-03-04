import { z } from 'zod'
import type { ScoreOutputSchemaType } from '../../../types'

export const FAAM_OUTPUT = {
  ADL: {
    label: { en: 'ADL subscale' },
    type: z.number(),
  },
  SPORTS: {
    label: { en: 'Sports subscale' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
