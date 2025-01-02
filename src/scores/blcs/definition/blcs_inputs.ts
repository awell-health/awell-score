import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../types'

export const NEVER = 0
export const ONCE = 1
export const TWO_TO_FOUR_TIMES = 2
export const MORE_THAN_WEEKLY = 3
export const DAILY = 4

const InputTypeSchema = z.union([
  z.literal(NEVER),
  z.literal(ONCE),
  z.literal(TWO_TO_FOUR_TIMES),
  z.literal(MORE_THAN_WEEKLY),
  z.literal(DAILY),
])

const OPTIONS = [
  {
    value: NEVER,
    label: { en: 'Not at all' },
  },
  {
    value: ONCE,
    label: {
      en: 'Once',
    },
  },
  {
    value: TWO_TO_FOUR_TIMES,
    label: {
      en: 'Two to four times',
    },
  },
  {
    value: MORE_THAN_WEEKLY,
    label: {
      en: 'More than weekly but not daily',
    },
  },
  {
    value: DAILY,
    label: {
      en: 'Daily',
    },
  },
]

export const BLCS_INPUTS = {
  Q01: {
    type: InputTypeSchema.optional(),
    label: {
      en: 'During the past 4 weeks, how often have you lost control of your bladder or had an accident?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q02: {
    type: InputTypeSchema.optional(),
    label: {
      en: 'During the past 4 weeks, how often have you almost lost control of your bladder or had an accident?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q03: {
    type: InputTypeSchema.optional(),
    label: {
      en: 'During the past 4 weeks, how often have you altered your activities because of bladder problems?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q04: {
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
        z.literal(8),
        z.literal(9),
        z.literal(10),
      ])
      .optional(),
    label: {
      en: 'During the past 4 weeks, how much have bladder problems restricted your overall lifestyle?',
    },
    uiOptions: {
      options: [
        {
          label: { en: 'Not at all' },
          value: 0,
        },
        {
          label: { en: '' },
          value: 1,
        },
        {
          label: { en: '' },
          value: 2,
        },
        {
          label: { en: '' },
          value: 3,
        },
        {
          label: { en: '' },
          value: 4,
        },
        {
          label: { en: '' },
          value: 5,
        },
        {
          label: { en: '' },
          value: 6,
        },
        {
          label: { en: '' },
          value: 7,
        },
        {
          label: { en: '' },
          value: 8,
        },
        {
          label: { en: '' },
          value: 9,
        },
        {
          label: { en: 'Severly' },
          value: 10,
        },
      ],
    },
  },
} satisfies ScoreInputSchemaType
