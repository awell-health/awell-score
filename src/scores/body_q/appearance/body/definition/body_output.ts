import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../../types'

export const BODY_Q_BODY_OUTPUT = {
  BODY_Q_BODY_SCORE: {
    label: {
      en: 'BODY-Q Satisfaction with Body',
      fr: 'BODY-Q Satisfaction du corps',
    },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
