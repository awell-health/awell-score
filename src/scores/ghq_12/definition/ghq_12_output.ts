import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const GHQ_12_OUTPUT = {
  GHQ_12_SCORING: {
    label: { en: 'GHQ Scoring' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
