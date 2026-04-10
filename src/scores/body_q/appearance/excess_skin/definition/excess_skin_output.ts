import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../../types'

export const BODY_Q_EXCESS_SKIN_OUTPUT = {
  BODY_Q_EXCESS_SKIN_SCORE: {
    label: {
      en: 'BODY-Q Appraisal of Excess Skin',
      fr: "BODY-Q Évaluation de l'excès de peau",
    },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
