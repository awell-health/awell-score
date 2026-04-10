import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../../types'

export const BODY_Q_OFFICE_STAFF_OUTPUT = {
  BODY_Q_OFFICE_STAFF_SCORE: {
    label: { en: 'BODY-Q Satisfaction with Office Staff', fr: "BODY-Q Satisfaction au sujet de l'équipe des secrétaires" },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
