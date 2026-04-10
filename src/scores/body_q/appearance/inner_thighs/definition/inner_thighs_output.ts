import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../../types'

export const BODY_Q_INNER_THIGHS_OUTPUT = {
  BODY_Q_INNER_THIGHS_SCORE: {
    label: {
      en: 'BODY-Q Satisfaction with Inner Thighs',
      fr: 'BODY-Q Satisfaction de la face interne des cuisses',
    },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
