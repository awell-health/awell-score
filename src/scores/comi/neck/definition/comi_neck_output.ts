import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../types'

export const COMI_NECK_OUTPUT = {
  TOTAL: {
    label: { en: 'COMI Neck total score' },
    type: z.number(),
  },
  PAIN: {
    label: { en: 'Pain' },
    type: z.number(),
  },
  NECK_RELATED_FUNCTION: {
    label: { en: 'Neck related function' },
    type: z.number(),
  },
  SYMPTOM_SPECIFIC_WELLBEING: {
    label: { en: 'Symptom specific wellbeing' },
    type: z.number(),
  },
  GENERAL_QOL: {
    label: { en: 'General Quality of Life' },
    type: z.number(),
  },
  DISABILITY: {
    label: { en: 'Disability' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
