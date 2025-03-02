import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const OKS_OUTPUT = {
  OXFORD_KNEE_SCORE: {
    label: { en: 'Oxford Knee Score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
