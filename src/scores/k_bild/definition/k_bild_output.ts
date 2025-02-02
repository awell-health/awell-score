import { ScoreOutputSchemaType } from '../../../types'
import { z } from 'zod'
export const KBILD_OUTPUT = {
  KBILD_RAW_TOTAL_SCORE: {
    label: { en: 'KBILD Raw Total Score' },
    type: z.number(),
  },
  KBILD_RAW_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE: {
    label: { en: 'KBILD Raw Breathlessness and Activities Domain Score' },
    type: z.number(),
  },
  KBILD_RAW_PSYCHOLOGICAL_DOMAIN_SCORE: {
    label: { en: 'KBILD Raw Psychological Domain Score' },
    type: z.number(),
  },
  KBILD_RAW_CHEST_SYMPTOMS_DOMAIN_SCORE: {
    label: { en: 'KBILD Raw Chest Symptoms Domain Score' },
    type: z.number(),
  },
  KBILD_TRANSFORMED_TOTAL_SCORE: {
    label: { en: 'KBILD Transformed Total Score' },
    type: z.number(),
  },
  KBILD_TRANSFORMED_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE: {
    label: {
      en: 'KBILD Transformed Breathlessness and Activities Domain Score',
    },
    type: z.number(),
  },
  KBILD_TRANSFORMED_PSYCHOLOGICAL_DOMAIN_SCORE: {
    label: { en: 'KBILD Transformed Psychological Domain Score' },
    type: z.number(),
  },
  KBILD_TRANSFORMED_CHEST_SYMPTOMS_DOMAIN_SCORE: {
    label: { en: 'KBILD Transformed Chest Symptoms Domain Score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
