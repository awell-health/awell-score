import { z } from 'zod'
import { ScoreInputSchemaType, ScoreInputType } from '../../../types'

const type = {
  type: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
  uiOptions: {
    options: [
      { value: 1, label: { en: 'Strongly disagree' } },
      { value: 2, label: { en: 'Disagree' } },
      { value: 3, label: { en: 'Agree' } },
      { value: 4, label: { en: 'Strongly agree' } },
    ],
  },
} satisfies ScoreInputType

export const TAMPA_INPUTS = {
  Q01: {
    ...type,
  },
  Q02: {
    ...type,
  },
  Q03: {
    ...type,
  },
  Q04: {
    ...type,
    info: {
      en: 'The answer on this question will be inversed by the calculation',
    },
  },
  Q05: {
    ...type,
  },
  Q06: {
    ...type,
  },
  Q07: {
    ...type,
  },
  Q08: {
    ...type,
    // required: true,
    info: {
      en: 'The answer on this question will be inversed by the calculation',
    },
  },
  Q09: {
    ...type,
  },
  Q10: {
    ...type,
  },
  Q11: {
    ...type,
  },
  Q12: {
    ...type,
    info: {
      en: 'The answer on this question will be inversed by the calculation',
    },
  },
  Q13: {
    ...type,
  },
  Q14: {
    ...type,
  },
  Q15: {
    ...type,
  },
  Q16: {
    ...type,
    info: {
      en: 'The answer on this question will be inversed by the calculation',
    },
  },
  Q17: {
    ...type,
  },
} satisfies ScoreInputSchemaType
