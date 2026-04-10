import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../../types'

export const BODY_Q_SCARS_OUTPUT = {
  BODY_Q_SCARS_SCORE: {
    label: {
      en: 'BODY-Q Appraisal of Body Contouring Scars',
      fr: 'BODY-Q Évaluation des cicatrices de chirurgie de la silhouette',
    },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
