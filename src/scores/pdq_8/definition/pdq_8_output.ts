import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const PDQ_8_OUTPUT = {
  PDQ_8: {
    label: { en: 'PDQ-8 score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
