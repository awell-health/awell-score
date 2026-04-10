import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../../types'

export const BODY_Q_ABDOMEN_OUTPUT = {
  BODY_Q_ABDOMEN_SCORE: {
    label: {
      en: 'BODY-Q Satisfaction with Abdomen',
      fr: 'BODY-Q Satisfaction à propos du ventre',
    },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
