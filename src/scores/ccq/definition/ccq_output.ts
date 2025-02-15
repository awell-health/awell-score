import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const CCQ_OUTPUT = {
  TOTAL_SCORE: {
    label: { en: 'Total score' },
    type: z.number(),
  },
  SYMPTOMS: {
    label: { en: 'Symptoms' },
    type: z.number(),
  },
  FUNCTIONAL_STATE: {
    label: { en: 'Functional state' },
    type: z.number(),
  },
  MENTAL_STATE: {
    label: { en: 'Mental state' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
