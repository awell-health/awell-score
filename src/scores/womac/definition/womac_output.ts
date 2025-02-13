import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const WOMAC_OUTPUT = {
  WOMAC_TOTAL_SCORE: {
    label: { en: 'Total score' },
    type: z.number(),
  },
  WOMAC_PAIN_SCORE: {
    label: { en: 'Pain score' },
    type: z.number(),
  },
  WOMAC_STIFFNESS_SCORE: {
    label: { en: 'Stiffness score' },
    type: z.number(),
  },
  WOMAC_DIFFICULTY_SCORE: {
    label: { en: 'Difficulty score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
