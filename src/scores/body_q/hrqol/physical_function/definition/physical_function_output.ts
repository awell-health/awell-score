import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../../types'

export const BODY_Q_PHYSICAL_FUNCTION_OUTPUT = {
  BODY_Q_PHYSICAL_FUNCTION_SCORE: {
    label: {
      en: 'BODY-Q Physical Function',
      fr: 'BODY-Q Fonction physique',
    },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
