import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const HOOS_OUTPUT = {
  TOTAL: {
    label: { en: 'Total score' },
    type: z.number(),
  },
  S: {
    label: { en: 'Symptoms' },
    type: z.number(),
  },
  P: {
    label: { en: 'Pain' },
    type: z.number(),
  },
  ADL: {
    label: { en: 'Activity limitations daily living' },
    type: z.number(),
  },
  SP: {
    label: { en: 'Function in sport and recreation' },
    type: z.number(),
  },
  QOL: {
    label: { en: 'Hip related quality of life' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
