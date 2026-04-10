import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../../types'

export const BODY_Q_MEDICAL_TEAM_OUTPUT = {
  BODY_Q_MEDICAL_TEAM_SCORE: {
    label: { en: 'BODY-Q Satisfaction with Medical Team', fr: "BODY-Q Satisfaction au sujet de l'équipe médicale" },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
