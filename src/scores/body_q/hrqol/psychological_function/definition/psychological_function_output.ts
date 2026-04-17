import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../../types'

export const BODY_Q_PSYCHOLOGICAL_FUNCTION_OUTPUT = {
  BODY_Q_PSYCHOLOGICAL_FUNCTION_SCORE: {
    label: {
      en: 'BODY-Q Psychological Function',
      fr: 'BODY-Q Fonction psychologique',
    },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
