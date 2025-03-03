import { z } from 'zod'
import type { ScoreOutputSchemaType } from '../../../types'

export const KCCQ_12_OUTPUT = {
  KCCQ12: {
    label: { en: 'Summary score' },
    type: z.number(),
  },
  'KCCQ12-PL': {
    label: { en: 'Physical Limitation Score' },
    type: z.number(),
  },
  'KCCQ12-SF': {
    label: { en: 'Symptom Frequency Score' },
    type: z.number(),
  },
  'KCCQ12-QL': {
    label: { en: 'Quality of Life Score' },
    type: z.number(),
  },
  'KCCQ12-SL': {
    label: { en: 'Social Limitation Score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
