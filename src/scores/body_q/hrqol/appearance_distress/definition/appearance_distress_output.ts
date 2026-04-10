import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../../types'

export const BODY_Q_APPEARANCE_DISTRESS_OUTPUT = {
  BODY_Q_APPEARANCE_DISTRESS_SCORE: {
    label: {
      en: 'BODY-Q Appearance-Related Psychosocial Distress',
      fr: "BODY-Q Difficultés psychologiques liées à l'apparence",
    },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
