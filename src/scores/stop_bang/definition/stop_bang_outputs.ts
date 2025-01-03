import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const STOP_BANG_OUTPUT = {
  STOP_BANG: {
    label: { en: 'STOP-BANG' },
    type: z.number(),
  },
  STOP_BANG_INTERPRETATION: {
    label: { en: 'STOP-BANG Interpretation' },
    type: z.string(),
  },
} satisfies ScoreOutputSchemaType
