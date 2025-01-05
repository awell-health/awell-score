import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../../types'

export const CADE_Q_OUTPUT = {
  CADE_Q_SV_SCORE: {
    label: { en: 'CADE-Q - Short Version - Score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
