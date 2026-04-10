import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../../types'

export const BODY_Q_UPPER_ARMS_OUTPUT = {
  BODY_Q_UPPER_ARMS_SCORE: {
    label: {
      en: 'BODY-Q Satisfaction with Upper Arms',
      fr: 'BODY-Q Satisfaction à propos des bras',
    },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
