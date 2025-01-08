import { z } from 'zod'
import { EnumNumberInputType, ScoreInputSchemaType } from '../../../../types'

const type = {
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
} satisfies EnumNumberInputType

export const VISA_A_INPUTS = {
  VISA_A_Q1: {
    ...type,
  },
  VISA_A_Q02: {
    ...type,
  },
  VISA_A_Q03: {
    ...type,
  },
  VISA_A_Q04: {
    ...type,
  },
  VISA_A_Q05: {
    ...type,
  },
  VISA_A_Q06: {
    ...type,
  },
  VISA_A_Q07: {
    type: z.union([z.literal(0), z.literal(4), z.literal(7), z.literal(10)]),
  },
  VISA_A_Q08: {
    label: {
      en: "Select what's applicable",
    },
    type: z.union([z.literal('A'), z.literal('B'), z.literal('C')]).optional(),
    uiOptions: {
      options: [
        {
          value: 'A',
          label: {
            en: 'I have no pain while undertaking Achilles tendon loading sports',
          },
        },
        {
          value: 'B',
          label: {
            en: 'I have pain while undertaking Achilles tendon loading sports but it does not stop me from completing the activity',
          },
        },
        {
          value: 'C',
          label: {
            en: 'I have pain that stops me from completing Achilles tendon loading sports',
          },
        },
      ],
    },
    info: {
      en: 'This question determines whether "VISA_A_Q08_A", "VISA_A_Q08_B" or "VISA_A_Q08_C" should be answered.',
    },
  },
  VISA_A_Q08_A: {
    type: z
      .union([
        z.literal(0),
        z.literal(7),
        z.literal(14),
        z.literal(21),
        z.literal(30),
      ])
      .optional(),
    info: { en: 'Should only be scored when there is no pain during sports' },
  },
  VISA_A_Q08_B: {
    type: z
      .union([
        z.literal(0),
        z.literal(4),
        z.literal(10),
        z.literal(14),
        z.literal(20),
      ])
      .optional(),
    info: {
      en: 'Should only be scored when there is pain during sports but does not need to quit sports activities because of it',
    },
  },
  VISA_A_Q08_C: {
    type: z
      .union([
        z.literal(0),
        z.literal(2),
        z.literal(5),
        z.literal(7),
        z.literal(10),
      ])
      .optional(),
    info: {
      en: 'Should only be scored when there is pain during sports resulting in canceling the sports activities',
    },
  },
} satisfies ScoreInputSchemaType
