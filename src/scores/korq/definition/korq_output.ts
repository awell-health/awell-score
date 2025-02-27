import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const KORQ_OUTPUT = {
  KORQ_TOTAL_SCORE: {
    label: { en: 'Total score' },
    type: z.number(),
  },
  KORQ_SYMPTOMS: {
    label: { en: 'Symptoms' },
    type: z.number(),
  },
  KORQ_ACTIVITY_LIMITATIONS: {
    label: { en: 'Activity Limitation' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
