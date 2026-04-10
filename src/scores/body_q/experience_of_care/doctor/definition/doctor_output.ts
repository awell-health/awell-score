import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../../types'

export const BODY_Q_DOCTOR_OUTPUT = {
  BODY_Q_DOCTOR_SCORE: {
    label: { en: 'BODY-Q Satisfaction with Doctor/Surgeon', fr: 'BODY-Q Satisfaction au sujet du docteur/chirurgien' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
