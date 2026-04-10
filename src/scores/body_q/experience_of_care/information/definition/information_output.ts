import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../../types'

export const BODY_Q_INFORMATION_OUTPUT = {
  BODY_Q_INFORMATION_SCORE: {
    label: { en: 'BODY-Q Satisfaction with Information', fr: "BODY-Q Satisfaction à propos de l'information reçue" },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
