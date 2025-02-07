import {
  ScoreInputSchemaType,
  type EnumNumberInputType,
} from '../../../../types'
import { z } from 'zod'

export const type = {
  type: z.union([
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
  ]),
  uiOptions: {
    options: [
      { value: 0 },
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 5 },
      { value: 6 },
      { value: 7 },
      { value: 8 },
      { value: 9 },
      { value: 10 },
    ],
  },
} satisfies EnumNumberInputType

export const OMPQ_10_INPUTS = {
  OREBRO_01: {
    type: z.union([
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
    ]),
    uiOptions: {
      options: [
        {
          value: 1,
          label: {
            en: '0-1 week',
            nl: '',
          },
        },
        {
          value: 2,
          label: {
            en: '1-2 weeks',
            nl: '',
          },
        },
        {
          value: 3,
          label: {
            en: '3-4 weeks',
            nl: '',
          },
        },
        {
          value: 4,
          label: {
            en: '4-5 weeks',
            nl: '',
          },
        },
        {
          value: 5,
          label: {
            en: '6-8 weeks',
            nl: '',
          },
        },
        {
          value: 6,
          label: {
            en: '9-11 weeks',
            nl: '',
          },
        },
        {
          value: 7,
          label: {
            en: '3-6 months',
            nl: '',
          },
        },
        {
          value: 8,
          label: {
            en: '6-9 months',
            nl: '',
          },
        },
        {
          value: 9,
          label: {
            en: '9-12 months',
            nl: '',
          },
        },
        {
          value: 10,
          label: {
            en: 'over 1 year',
            nl: '',
          },
        },
      ],
    },
  },
  OREBRO_02: {
    ...type,
    label: {
      en: 'How would you rate the pain that you have had during the past week? Circle one.',
      nl: '',
    },
  },
  OREBRO_03: {
    ...type,
    label: {
      en: 'I can do light work for an hour.',
      nl: '',
    },
  },
  OREBRO_04: {
    ...type,
    label: {
      en: 'I can sleep at night.',
      nl: '',
    },
  },
  OREBRO_05: {
    ...type,
    label: {
      en: 'How tense or anxious have you felt in the past week? Circle one.',
      nl: '',
    },
  },
  OREBRO_06: {
    ...type,
    label: {
      en: 'How much have you been bothered by feeling depressed in the past week? Circle one.',
      nl: '',
    },
  },
  OREBRO_07: {
    ...type,
    label: {
      en: 'In your view, how large is the risk that your current pain may become persistent?',
      nl: '',
    },
  },
  OREBRO_08: {
    ...type,
    label: {
      en: 'In your estimation, what are the chances you will be working your normal duties in 3 months',
      nl: '',
    },
  },
  OREBRO_09: {
    ...type,
    label: {
      en: 'An increase in pain is an indication that I should stop what I’m doing until the pain decreases.',
      nl: '',
    },
  },
  OREBRO_10: {
    ...type,
    label: {
      en: 'I should not do my normal work with my present pain.',
      nl: '',
    },
  },
} satisfies ScoreInputSchemaType
