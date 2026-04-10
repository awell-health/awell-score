import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../../types'

export const BODY_Q_EXPECTATIONS_COSMETIC_OUTPUT = {
  BODY_Q_EXPECTATIONS_COSMETIC_SCORE: {
    label: {
      en: 'BODY-Q Expectations (Cosmetic)',
      fr: 'BODY-Q Attentes (Cosmétique)',
    },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
