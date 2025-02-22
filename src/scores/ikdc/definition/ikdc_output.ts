import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const IKDC_OUTPUT = {
  IKDC_SCORE: {
    label: { en: 'IKDC Score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
