import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const PAID5_OUTPUT = {
  PAID5_SCORE: {
    label: { en: 'PAID-5 Score', pl: 'Wynik PAID-5' },
    type: z.number(),
  },
  PAID5_INTERPRETATION: {
    label: { en: 'PAID-5 Score Interpretation', pl: 'Interpretacja wyniku PAID-5' },
    type: z.string(),
  },
  PAID5_INTERPRETATION_LABEL: {
    label: { en: 'PAID-5 Interpretation Label', pl: 'Etykieta interpretacji PAID-5' },
    type: z.string(),
  },
} satisfies ScoreOutputSchemaType
