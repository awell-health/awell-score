import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const OHS_OUTPUT = {
  OXFORD_HIP_SCORE: {
    label: { en: 'Oxford Hip Score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
