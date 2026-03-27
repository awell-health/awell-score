import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const PAID20_OUTPUT = {
  PAID20_SCORE: {
    label: { en: 'PAID-20 Score', pl: 'Wynik PAID-20' },
    type: z.number(),
  },
  PAID20_QUESTIONS_WITH_SCORE_3_OR_4: {
    label: { en: 'PAID-20 Questions with score 3 or 4', pl: 'Pytania PAID-20 z oceną 3 lub 4' },
    type: z.string(),
  },
  PAID20_INTERPRETATION: {
    label: { en: 'PAID-20 Interpretation Code', pl: 'Kod interpretacji PAID-20' },
    type: z.string(),
  },
  PAID20_INTERPRETATION_LABEL: {
    label: { en: 'PAID-20 Interpretation', pl: 'Interpretacja PAID-20' },
    type: z.string(),
  },
} satisfies ScoreOutputSchemaType
