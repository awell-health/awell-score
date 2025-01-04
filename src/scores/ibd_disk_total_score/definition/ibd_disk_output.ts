import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const IBD_DISK_OUTPUT = {
  IBD_DISK_TOTAL: {
    label: { en: 'IBD Disk total' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
