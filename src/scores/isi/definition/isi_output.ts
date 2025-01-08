import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const ISI_OUTPUT = {
  ISI_TOTAL_SCORE: {
    label: { en: 'ISI Total Score' },
    type: z.number(),
  },
  ISI_INTERPRETATION: {
    label: { en: 'ISI Interpretation' },
    type: z.string(),
  },
} satisfies ScoreOutputSchemaType
