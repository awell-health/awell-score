import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const PHQ4_OUTPUT = {
  PHQ4_ANXIETY_SCORE: {
    label: { en: 'PHQ-4 Anxiety Score' },
    type: z.number(),
  },
  PHQ4_ANXIETY_POSITIVE_SCREENING: {
    label: { en: 'PHQ-4 Anxiety Positive Screening' },
    type: z.boolean(),
  },
  PHQ4_DEPRESSION_SCORE: {
    label: { en: 'PHQ-4 Depression Score' },
    type: z.number(),
  },
  PHQ4_DEPRESSION_POSITIVE_SCREENING: {
    label: { en: 'PHQ-4 Depression Positive Screening' },
    type: z.boolean(),
  },
  PHQ4_TOTAL_SCORE: {
    label: { en: 'PHQ-4 Total Score' },
    type: z.number(),
  },
  PHQ4_TOTAL_SCORE_INTERPRETATION: {
    label: { en: 'PHQ-4 Total Score Interpretation' },
    type: z.string(),
  },
} satisfies ScoreOutputSchemaType
