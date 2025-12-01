import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const BAI_OUTPUT = {
  BAI_SCORE: {
    label: { en: 'BAI Score' },
    type: z.number(),
  },
  BAI_INTERPRETATION: {
    label: { en: 'BAI Interpretation' },
    type: z.string(),
  },
} satisfies ScoreOutputSchemaType

