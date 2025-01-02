import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const YP_CORE_OUTPUT = {
  YP_CORE_TOTAL_SCORE: {
    label: { en: 'YP-CORE Total Score' },
    type: z.number(),
  },
  YP_CORE_INTERPRETATION: {
    label: { en: 'YP-CORE Interpretation' },
    type: z.string(),
  },
} satisfies ScoreOutputSchemaType
