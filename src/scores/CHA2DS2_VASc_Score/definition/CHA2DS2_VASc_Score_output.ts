import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const CHA2DS2_VASC_SCORE_OUTPUT = {
  CHA2DS2_VASC_SCORE: {
    label: { en: 'CHA₂DS₂-VASc Score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
