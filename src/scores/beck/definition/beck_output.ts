import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const BECK_OUTPUT = {
  beck: {
    label: { en: 'Total BDI score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
