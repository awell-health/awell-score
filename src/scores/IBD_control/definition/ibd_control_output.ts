import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const IBD_CONTROL_OUTPUT = {
  IBD_CONTROL_8: {
    label: { en: 'IBD-Control-8 Score' },
    type: z.number(),
  },
  IBD_CONTROL_VAS: {
    label: { en: 'IBD-Control-VAS Score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
