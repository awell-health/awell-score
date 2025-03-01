import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const PSK_OUTPUT = {
  PSK_SCORE: {
    label: { en: 'PSK Score' },
    type: z.number(),
  },
  PSK_SUM_OF_ACTIVITY_SCORES: {
    label: { en: 'Sum of activity scores' },
    type: z.number(),
  },
  PSK_NBR_OF_ACTIVITIES: {
    label: { en: 'Number of activity that were scored' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
