import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../../types'

export const BODY_Q_SEXUAL_FUNCTION_OUTPUT = {
  BODY_Q_SEXUAL_FUNCTION_SCORE: {
    label: {
      en: 'BODY-Q Sexual Function',
      fr: 'BODY-Q Fonction sexuelle',
    },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
