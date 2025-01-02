import { z } from 'zod'
import { EnumNumberInputType, ScoreInputSchemaType } from '../../../types'

const type = {
  type: z
    .union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
    ])
    .optional(),
  uiOptions: {
    options: [
      {
        label: { en: 'Not at all' },
        value: 0,
      },
      {
        label: { en: 'Only occasionally' },
        value: 1,
      },
      {
        label: {
          en: 'Sometimes',
        },
        value: 2,
      },
      {
        label: { en: 'Often' },
        value: 3,
      },
      {
        label: { en: 'Most or all of the time' },
        value: 4,
      },
    ],
  },
} satisfies EnumNumberInputType

const typeInverse = {
  type: z
    .union([
      z.literal(4),
      z.literal(3),
      z.literal(2),
      z.literal(1),
      z.literal(0),
    ])
    .optional(),
  uiOptions: {
    options: [
      {
        label: { en: 'Not at all' },
        value: 4,
      },
      {
        label: { en: 'Only occasionally' },
        value: 3,
      },
      {
        label: {
          en: 'Sometimes',
        },
        value: 2,
      },
      {
        label: { en: 'Often' },
        value: 1,
      },
      {
        label: { en: 'Most or all of the time' },
        value: 0,
      },
    ],
  },
} satisfies EnumNumberInputType

export const YP_CORE_INPUTS = {
  YP_CORE_Q01: {
    label: {
      en: 'Over the last week, I’ve felt edgy or nervous',
    },
    ...type,
  },
  YP_CORE_Q02: {
    label: {
      en: 'Over the last week, I haven’t felt like talking to anyone',
    },
    ...type,
  },
  YP_CORE_Q03: {
    label: {
      en: 'Over the last week, I’ve felt able to cope when things go wrong',
    },
    ...typeInverse,
  },
  YP_CORE_Q04: {
    label: {
      en: 'Over the last week, I’ve thought of hurting myself',
    },
    ...type,
  },
  YP_CORE_Q05: {
    label: {
      en: 'Over the last week, there’s been someone I felt able to ask for help',
    },
    ...typeInverse,
  },
  YP_CORE_Q06: {
    label: {
      en: 'Over the last week, my thoughts and feelings distressed me',
    },
    ...type,
  },
  YP_CORE_Q07: {
    label: {
      en: 'Over the last week, my problems have felt too much for me',
    },
    ...type,
  },
  YP_CORE_Q08: {
    label: {
      en: 'Over the last week, it’s been hard to go to sleep or stay asleep',
    },
    ...type,
  },
  YP_CORE_Q09: {
    label: {
      en: 'Over the last week, I’ve felt unhappy',
    },
    ...type,
  },
  YP_CORE_Q10: {
    label: {
      en: 'Over the last week, I’ve done all the things I wanted to',
    },
    ...typeInverse,
  },
} satisfies ScoreInputSchemaType
