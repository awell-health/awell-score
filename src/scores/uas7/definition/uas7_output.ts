import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const UAS7_OUTPUT = {
  UAS7_DAY_1: {
    label: { en: 'Day 1 UAS' },
    type: z.number(),
  },
  UAS7_DAY_2: {
    label: { en: 'Day 2 UAS' },
    type: z.number(),
  },
  UAS7_DAY_3: {
    label: { en: 'Day 3 UAS' },
    type: z.number(),
  },
  UAS7_DAY_4: {
    label: { en: 'Day 4 UAS' },
    type: z.number(),
  },
  UAS7_DAY_5: {
    label: { en: 'Day 5 UAS' },
    type: z.number(),
  },
  UAS7_DAY_6: {
    label: { en: 'Day 6 UAS' },
    type: z.number(),
  },
  UAS7_DAY_7: {
    label: { en: 'Day 7 UAS' },
    type: z.number(),
  },
  UAS7_TOTAL: {
    label: { en: 'UAS7 Weekly Total' },
    type: z.number(),
  },
  UAS7_INTERPRETATION: {
    label: { en: 'UAS7 Interpretation' },
    type: z.string(),
  },
  UAS7_INTERPRETATION_LABEL: {
    label: { en: 'UAS7 Interpretation Label' },
    type: z.string(),
  },
} satisfies ScoreOutputSchemaType
