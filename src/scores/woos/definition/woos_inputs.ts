import { z } from 'zod'
import {
  type ScoreInputSchemaType,
  type SimpleNumberInputType,
} from '../../../types'

const type = {
  type: z.number().min(0).max(100).optional(),
  uiOptions: {
    component: 'slider',
    range: {
      min: {
        label: { en: 'No symptoms' },
      },
      max: {
        label: { en: 'Extreme symptoms' },
      },
    },
  },
} satisfies SimpleNumberInputType

export const WOOS_INPUTS = {
  WOOS_1: {
    ...type,
    label: { en: 'WOOS Question 1' },
  },
  WOOS_2: {
    ...type,
    label: { en: 'WOOS Question 2' },
  },
  WOOS_3: {
    ...type,
    label: { en: 'WOOS Question 3' },
  },
  WOOS_4: {
    ...type,
    label: { en: 'WOOS Question 4' },
  },
  WOOS_5: {
    ...type,
    label: { en: 'WOOS Question 5' },
  },
  WOOS_6: {
    ...type,
    label: { en: 'WOOS Question 6' },
  },
  WOOS_7: {
    ...type,
    label: { en: 'WOOS Question 7' },
  },
  WOOS_8: {
    ...type,
    label: { en: 'WOOS Question 8' },
  },
  WOOS_9: {
    ...type,
    label: { en: 'WOOS Question 9' },
  },
  WOOS_10: {
    ...type,
    label: { en: 'WOOS Question 10' },
  },
  WOOS_11: {
    ...type,
    label: { en: 'WOOS Question 11' },
  },
  WOOS_12: {
    ...type,
    label: { en: 'WOOS Question 12' },
  },
  WOOS_13: {
    ...type,
    label: { en: 'WOOS Question 13' },
  },
  WOOS_14: {
    ...type,
    label: { en: 'WOOS Question 14' },
  },
  WOOS_15: {
    ...type,
    label: { en: 'WOOS Question 15' },
  },
  WOOS_16: {
    ...type,
    label: { en: 'WOOS Question 16' },
  },
  WOOS_17: {
    ...type,
    label: { en: 'WOOS Question 17' },
  },
  WOOS_18: {
    ...type,
    label: { en: 'WOOS Question 18' },
  },
  WOOS_19: {
    ...type,
    label: { en: 'WOOS Question 19' },
  },
} satisfies ScoreInputSchemaType
