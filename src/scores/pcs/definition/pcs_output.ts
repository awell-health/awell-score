import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const PCS_OUTPUT = {
  TOTAL: {
    label: { en: 'Total PCS score' },
    type: z.number(),
  },
  RUMINATION: {
    label: { en: 'Rumination' },
    type: z.number(),
  },
  MAGNIFICATION: {
    label: { en: 'Magnification' },
    type: z.number(),
  },
  HELPLESSNESS: {
    label: { en: 'Helplessness' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
