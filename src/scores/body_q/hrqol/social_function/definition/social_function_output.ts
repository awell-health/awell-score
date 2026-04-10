import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../../types'

export const BODY_Q_SOCIAL_FUNCTION_OUTPUT = {
  BODY_Q_SOCIAL_FUNCTION_SCORE: {
    label: {
      en: 'BODY-Q Social Function',
      fr: 'BODY-Q Fonction sociale',
    },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
