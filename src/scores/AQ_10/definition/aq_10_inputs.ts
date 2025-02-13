import { z } from 'zod'
import {
  type EnumNumberInputType,
  type ScoreInputSchemaType,
} from '../../../types'

// for questions 1, 5, 8 and 10
const inputType1 = {
  type: z.union([z.literal(1), z.literal(0)]),
  uiOptions: {
    options: [
      {
        label: { en: 'Definitely Agree' },
        value: 1,
      },
      {
        label: { en: 'Slightly Agree' },
        value: 1,
      },
      {
        label: { en: 'Slightly Disagree' },
        value: 0,
      },
      {
        label: { en: 'Definitely Disagree' },
        value: 0,
      },
    ],
  },
} satisfies EnumNumberInputType

const inputType2 = {
  type: z.union([z.literal(1), z.literal(0)]),
  uiOptions: {
    options: [
      {
        label: { en: 'Definitely Agree' },
        value: 0,
      },
      {
        label: { en: 'Slightly Agree' },
        value: 0,
      },
      {
        label: { en: 'Slightly Disagree' },
        value: 1,
      },
      {
        label: { en: 'Definitely Disagree' },
        value: 1,
      },
    ],
  },
} satisfies EnumNumberInputType

export const AQ10_INPUTS = {
  AQ10_Q01: {
    label: {
      en: 'S/he notices patterns in things all the time',
    },
    ...inputType1,
  },
  AQ10_Q02: {
    label: {
      en: 'S/he usually concentrates more on the whole picture, rather than the small details',
    },
    ...inputType2,
  },
  AQ10_Q03: {
    label: {
      en: 'In a social group, s/he can easily keep track of several different people`s conversations',
    },
    ...inputType2,
  },
  AQ10_Q04: {
    label: {
      en: 'If there is an interruption, s/he can switch back to what s/he was doing very quickly',
    },
    ...inputType2,
  },
  AQ10_Q05: {
    label: {
      en: 'S/he frequently finds that s/he doesn`t know how to keep a conversation going',
    },
    ...inputType1,
  },
  AQ10_Q06: {
    label: {
      en: 'S/he is good at social chit-chat',
    },
    ...inputType2,
  },
  AQ10_Q07: {
    label: {
      en: 'When s/he was younger, s/he used to enjoy playing games involving pretending with other children',
    },
    ...inputType2,
  },
  AQ10_Q08: {
    label: {
      en: 'S/he finds it difficult to imagine what it would be like to be someone else',
    },
    ...inputType1,
  },
  AQ10_Q09: {
    label: {
      en: 'S/he finds social situations easy',
    },
    ...inputType2,
  },
  AQ10_Q10: {
    label: {
      en: 'S/he finds it hard to make new friends',
    },
    ...inputType1,
  },
} satisfies ScoreInputSchemaType
