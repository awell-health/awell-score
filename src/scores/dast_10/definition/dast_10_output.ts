import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const DAST10_OUTPUT = {
  DAST10_SCORE: {
    label: { en: 'DAST-10 Score' },
    type: z.number(),
  },
  DAST10_DEGREE_OF_PROBLEMS: {
    label: { en: 'Degree of problems related to drug abuse' },
    type: z.string(),
  },
} satisfies ScoreOutputSchemaType
