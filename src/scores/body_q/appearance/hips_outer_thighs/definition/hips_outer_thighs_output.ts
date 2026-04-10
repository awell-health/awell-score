import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../../types'

export const BODY_Q_HIPS_OUTER_THIGHS_OUTPUT = {
  BODY_Q_HIPS_OUTER_THIGHS_SCORE: {
    label: {
      en: 'BODY-Q Satisfaction with Hips & Outer Thighs',
      fr: 'BODY-Q Satisfaction des hanches et face externe des cuisses',
    },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
