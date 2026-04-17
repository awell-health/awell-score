import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../../types'

export const BODY_Q_EATING_BEHAVIOR_OUTPUT = {
  BODY_Q_EATING_BEHAVIOR_SCORE: {
    label: {
      en: 'BODY-Q Eating Behavior',
      fr: 'BODY-Q Comportement alimentaire',
    },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
