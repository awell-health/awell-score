import { z } from 'zod'
import {
  type ScoreInputSchemaType,
  type EnumNumberInputType,
  type SimpleNumberInputType,
} from '../../../types'

const HOW_MANY_DAYS_PER_WEEK = {
  type: z
    .union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
      z.literal(6),
      z.literal(7),
    ])
    .optional(),
  uiOptions: {
    options: [
      { value: 0, label: { en: '0 days' } },
      { value: 1, label: { en: '1 day' } },
      { value: 2, label: { en: '2 days' } },
      { value: 3, label: { en: '3 days' } },
      { value: 4, label: { en: '4 days' } },
      { value: 5, label: { en: '5 days' } },
      { value: 6, label: { en: '6 days' } },
      { value: 7, label: { en: '7 days' } },
    ],
  },
} satisfies EnumNumberInputType

const ACTIVITY_PER_DAY_IN_MINUTES = {
  type: z.number().min(1).max(720).optional(),
} satisfies SimpleNumberInputType

export const PA_INPUTS = {
  LIGHT_PA_DAYS_PER_WEEK: {
    ...HOW_MANY_DAYS_PER_WEEK,
    info: { en: 'Days per week of light physical activity' },
    unit: { en: 'days per week' },
  },
  LIGHT_PA_MINUTES_PER_DAY: {
    ...ACTIVITY_PER_DAY_IN_MINUTES,
    info: { en: 'Minutes per day of light physical activity' },
    unit: { en: 'minutes per day' },
  },
  MODERATE_PA_DAYS_PER_WEEK: {
    ...HOW_MANY_DAYS_PER_WEEK,
    info: { en: 'Days per week of moderate physical activity' },
    unit: { en: 'days per week' },
  },
  MODERATE_PA_MINUTES_PER_DAY: {
    ...ACTIVITY_PER_DAY_IN_MINUTES,
    info: { en: 'Minutes per day of moderate physical activity' },
    unit: { en: 'minutes per day' },
  },
  VIGOROUS_PA_DAYS_PER_WEEK: {
    ...HOW_MANY_DAYS_PER_WEEK,
    info: { en: 'Days per week of vigorous physical activity' },
    unit: { en: 'days per week' },
  },
  VIGOROUS_PA_MINUTES_PER_DAY: {
    ...ACTIVITY_PER_DAY_IN_MINUTES,
    info: { en: 'Minutes per day of vigorous physical activity' },
    unit: { en: 'minutes per day' },
  },
} satisfies ScoreInputSchemaType
