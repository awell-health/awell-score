import { z } from 'zod'
import { EnumNumberInputType } from '../../../types'

const type = {
  type: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
  ]),
  uiOptions: {
    options: [
      {
        label: { en: 'Never' },
        value: 0,
      },
      {
        label: { en: 'Almost Never' },
        value: 1,
      },
      {
        label: { en: 'Sometimes' },
        value: 2,
      },
      {
        label: { en: 'Fairly Often' },
        value: 3,
      },
      {
        label: { en: 'Very Often' },
        value: 4,
      },
    ],
  },
} satisfies EnumNumberInputType

export const PSS4_INPUTS = {
  PSS4_Q01: {
    label: {
      en: 'In the last month, how often have you felt that you were unable to control the important things in your life?',
    },
    ...type,
  },
  PSS4_Q02: {
    label: {
      en: 'In the last month, how often have you felt confident about your ability to handle your personal problems?',
    },
    ...type,
  },
  PSS4_Q03: {
    label: {
      en: 'In the last month, how often have you felt that that things were going your way?',
    },
    ...type,
  },
  PSS4_Q04: {
    label: {
      en: 'In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?',
    },
    ...type,
  },
}
