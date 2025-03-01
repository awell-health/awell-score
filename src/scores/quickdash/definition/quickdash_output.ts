import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const QUICKDASH_OUTPUT = {
  QUICKDASH_SCORE: {
    label: { en: 'QuickDASH' },
    type: z.number(),
  },
  WORK_MODULE: {
    label: { en: 'Work module' },
    type: z.number(),
  },
  SPORTS_PERFORMING_ARTS_MODULE: {
    label: { en: 'Sports/Performing arts module' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
