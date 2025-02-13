import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const DN4_OUTPUT = {
  PATIENT_TOTAL_SCORE: {
    label: { en: "Patient's total score" },
    type: z.number(),
  },
  PATIENT_INTERVIEW_SCORE: {
    label: { en: "Patient's interview score" },
    type: z.number(),
  },
  PATIENT_EXAMINIATION_SCORE: {
    label: { en: "Patient's examiniation score" },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
