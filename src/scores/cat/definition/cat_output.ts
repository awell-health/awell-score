import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const CAT_OUTPUT = {
  CAT_POINTS: {
    label: { en: 'CAT points' },
    type: z.number(),
  },
  CAT_HEALTH_IMPACT: {
    label: { en: 'Health impact' },
    type: z.string(),
  },
} satisfies ScoreOutputSchemaType
