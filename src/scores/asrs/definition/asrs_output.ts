import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const ASRS_OUTPUT = {
  ASRS_PART_A_SCORE: {
    label: { en: 'ASRS - Part A' },
    type: z.number(),
  },
  ASRS_PART_B_SCORE: {
    label: { en: 'ASRS - Part B' },
    type: z.number(),
  },
  ASRS_TOTAL_SCORE: {
    label: { en: 'ASRS - Total Score' },
    type: z.number(),
  },
  ASRS_INATTENTIVE_SUBSCALE_SCORE: {
    label: { en: 'ASRS - Inattentive Subscale Score' },
    type: z.number(),
  },
  ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR_SCORE: {
    label: { en: 'ASRS - Hyperactive/Impulsive Subscale (Motor)' },
    type: z.number(),
  },
  ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL_SCORE: {
    label: { en: 'ASRS - Hyperactive/Impulsive Subscale (Verbal)' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
