import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const CPDI_OUTPUT = {
  CPDI: {
    label: { en: 'Total CPDI score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
