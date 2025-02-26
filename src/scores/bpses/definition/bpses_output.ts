import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const BPSES_OUTPUT = {
  BPSES_SCORE: {
    label: { en: 'Total' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
