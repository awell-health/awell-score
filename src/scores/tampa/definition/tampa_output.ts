import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const TAMPA_OUTPUT = {
  TAMPA: {
    label: { en: 'Tampa score' },
    type: z.number(),
  },
  INTERPRETATION: {
    label: { en: 'Interpretation' },
    type: z.string(),
  },
} satisfies ScoreOutputSchemaType
