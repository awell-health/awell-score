import { z } from 'zod'
import type { ScoreOutputSchemaType } from '../../../types'

export const HADS_OUTPUT = {
  FEAR: {
    label: { en: 'Fear', nl: 'Angst', pl: 'Strach' },
    type: z.number(),
  },
  DEPRESSION: {
    label: { en: 'Depression', nl: 'Depressie', pl: 'Depresja' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
