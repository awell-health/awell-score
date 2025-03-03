import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const MMSE_OUTPUT = {
  MMSE: {
    label: { en: 'MMSE' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
