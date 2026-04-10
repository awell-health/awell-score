import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../../types'

export const BODY_Q_NIPPLES_OUTPUT = {
  BODY_Q_NIPPLES_SCORE: {
    label: {
      en: 'BODY-Q Satisfaction with Nipples',
      fr: 'BODY-Q Satisfaction à propos des mamelons',
    },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
