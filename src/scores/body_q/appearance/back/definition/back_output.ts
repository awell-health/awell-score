import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../../types'

export const BODY_Q_BACK_OUTPUT = {
  BODY_Q_BACK_SCORE: {
    label: {
      en: 'BODY-Q Satisfaction with Back',
      fr: 'BODY-Q Satisfaction à propos du dos',
    },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
