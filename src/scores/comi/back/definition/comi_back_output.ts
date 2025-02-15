import { z } from 'zod'

export const COMI_BACK_OUTPUT = {
  TOTAL: {
    label: { en: 'COMI Back total score' },
    type: z.number(),
  },
  PAIN: {
    label: { en: 'Pain' },
    type: z.number(),
  },
  BACK_RELATED_FUNCTION: {
    label: { en: 'Back related function' },
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
}
