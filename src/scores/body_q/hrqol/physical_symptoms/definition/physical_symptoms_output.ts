import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../../types'

export const BODY_Q_PHYSICAL_SYMPTOMS_OUTPUT = {
  BODY_Q_PHYSICAL_SYMPTOMS_SCORE: {
    label: {
      en: 'BODY-Q Physical Symptoms',
      fr: 'BODY-Q Symptômes physiques',
    },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
