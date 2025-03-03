import { z } from 'zod'
import type { ScoreOutputSchemaType } from '../../../types'

export const HADS_OUTPUT = {
  FEAR: {
    label: { en: 'Fear' },
    type: z.number(),
  },
  DEPRESSION: {
    label: { en: 'Depression' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
