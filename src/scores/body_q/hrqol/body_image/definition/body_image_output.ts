import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../../types'

export const BODY_Q_BODY_IMAGE_OUTPUT = {
  BODY_Q_BODY_IMAGE_SCORE: {
    label: { en: 'BODY-Q Body Image', fr: 'BODY-Q Image corporelle' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
