import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const WHO5_OUTPUT = {
  WHO5_RAW_SCORE: {
    label: { en: 'WHO-5 raw score' },
    type: z.number(),
  },
  WHO5_PERCENTAGE_SCORE: {
    label: { en: 'WHO-5 percentage score' },
    type: z.number(),
    unit: { en: '%' },
  },
} satisfies ScoreOutputSchemaType
