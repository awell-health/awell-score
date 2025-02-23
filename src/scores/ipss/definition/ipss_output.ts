import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const IPSS_OUTPUT = {
  IPSS: {
    label: { en: 'Total IPSS score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
