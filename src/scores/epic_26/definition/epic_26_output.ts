import { z } from 'zod'
import type { ScoreOutputSchemaType } from '../../../types'

export const EPIC_26_OUTPUT = {
  UI: {
    label: { en: 'Urinary Incontinence' },
    type: z.number(),
  },
  UIO: {
    label: { en: 'Urinary Irritative/Obstructive' },
    type: z.number(),
  },
  BOW: {
    label: { en: 'Bowel' },
    type: z.number(),
  },
  SEX: {
    label: { en: 'Sexual' },
    type: z.number(),
  },
  HOR: {
    label: { en: 'Hormonal' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
