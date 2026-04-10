import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../../types'

export const BODY_Q_BUTTOCKS_OUTPUT = {
  BODY_Q_BUTTOCKS_SCORE: {
    label: {
      en: 'BODY-Q Satisfaction with Buttocks',
      fr: 'BODY-Q Satisfaction à propos des fesses',
    },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
