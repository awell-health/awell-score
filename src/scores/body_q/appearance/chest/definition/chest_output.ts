import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../../types'

export const BODY_Q_CHEST_OUTPUT = {
  BODY_Q_CHEST_SCORE: {
    label: {
      en: 'BODY-Q Satisfaction with Chest',
      fr: 'BODY-Q Satisfaction à propos du buste',
    },
    type: z.number(),
  },
  BODY_Q_CHEST_SCAR_ITEM: {
    label: {
      en: 'BODY-Q Chest - Scar Satisfaction',
      fr: 'BODY-Q Buste - Satisfaction cicatrice',
    },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
