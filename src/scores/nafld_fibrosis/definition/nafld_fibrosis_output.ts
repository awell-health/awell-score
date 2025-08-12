import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const NAFLD_FIBROSIS_OUTPUT = {
  NFS_SCORE: {
    type: z.number(),
    label: { en: 'NAFLD Fibrosis Score' },
  },
  NFS_CATEGORY: {
    type: z.string(),
    label: { en: 'Fibrosis category' },
  },
  NFS_LOW_CUTOFF_USED: {
    type: z.number(),
    label: { en: 'Low cutoff used' },
  },
  NFS_HIGH_CUTOFF_USED: {
    type: z.number(),
    label: { en: 'High cutoff used' },
  },
} satisfies ScoreOutputSchemaType
