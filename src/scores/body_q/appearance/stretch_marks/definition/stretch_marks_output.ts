import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../../types'

export const BODY_Q_STRETCH_MARKS_OUTPUT = {
  BODY_Q_STRETCH_MARKS_SCORE: {
    label: {
      en: 'BODY-Q Appraisal of Stretch Marks',
      fr: 'BODY-Q Évaluation des vergetures',
    },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
