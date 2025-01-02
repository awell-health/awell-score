import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const PHQ2_OUTPUT = {
  PHQ2_SCORE: {
    label: { en: 'PHQ-2 Score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
