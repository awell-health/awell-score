import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const SST_OUTPUT = {
  SST: {
    label: { en: 'Total SST score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
