import { z } from 'zod'
import {
  type ScoreInputSchemaType,
  type EnumNumberInputType,
} from '../../../types'

const INPUT_TYPE = {
  type: z
    .union([
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
    ])
    .optional(),
  uiOptions: {
    options: [
      {
        value: 1,
        label: { en: 'Strongly disagree' },
      },
      {
        value: 2,
        label: { en: 'Disagree' },
      },
      {
        value: 3,
        label: { en: 'Neutral' },
      },
      {
        value: 4,
        label: { en: 'Agree' },
      },
      {
        value: 5,
        label: { en: 'Strongly agree' },
      },
    ],
  },
} satisfies EnumNumberInputType

export const CFWS_INPUTS = {
  Q01: {
    label: {
      en: 'Our family is able to make decisions that benefit us',
    },
    ...INPUT_TYPE,
  },
  Q02: {
    label: {
      en: 'We care about one another',
    },
    ...INPUT_TYPE,
  },
  Q03: {
    label: {
      en: 'In my family, we have what we need for food and shelter',
    },
    ...INPUT_TYPE,
  },
  Q04: {
    label: {
      en: 'We are able to balance family needs so that we can pursue our own interests',
    },
    ...INPUT_TYPE,
  },
  Q05: {
    label: {
      en: 'We enjoy spending time together',
    },
    ...INPUT_TYPE,
  },
  Q06: {
    label: {
      en: 'Financial cost of caregiving for our family member with a disability, autism or a developmental delay is manageable',
    },
    ...INPUT_TYPE,
  },
  Q07: {
    label: {
      en: 'We have support outside of our family to help with caregiver/childcare responsibilities',
    },
    ...INPUT_TYPE,
  },
  Q08: {
    label: {
      en: 'We have good communication in our family',
    },
    ...INPUT_TYPE,
  },
  Q09: {
    label: {
      en: 'Family members feel safe in our family',
    },
    ...INPUT_TYPE,
  },
  Q10: {
    label: {
      en: 'We prioritize individual family health needs',
    },
    ...INPUT_TYPE,
  },
  Q11: {
    label: {
      en: 'We are able to resolve conflict and support each other when things go wrong',
    },
    ...INPUT_TYPE,
  },
  Q12: {
    label: {
      en: 'Working members of my family are able to balance work and caregiver/childcare responsibilities',
    },
    ...INPUT_TYPE,
  },
  Q13: {
    label: {
      en: 'We have access to disability, autism or developmental delay related resources',
    },
    ...INPUT_TYPE,
  },
  Q14: {
    label: {
      en: 'Our family is part of a larger community',
    },
    ...INPUT_TYPE,
  },
  Q15: {
    label: {
      en: 'In my family, we share our feelings and support each other’s emotional needs',
    },
    ...INPUT_TYPE,
  },
} satisfies ScoreInputSchemaType
