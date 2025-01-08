import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../../types'

export const VISA_G_INPUTS = {
  VISA_G_Q01: {
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
  },
  VISA_G_Q02: {
    type: z.union([
      z.literal(0),
      z.literal(2),
      z.literal(5),
      z.literal(7),
      z.literal(10),
    ]),
  },
  VISA_G_Q03: {
    type: z.union([
      z.literal(0),
      z.literal(2),
      z.literal(5),
      z.literal(7),
      z.literal(10),
    ]),
  },
  VISA_G_Q04: {
    type: z.union([
      z.literal(0),
      z.literal(2),
      z.literal(5),
      z.literal(7),
      z.literal(10),
    ]),
  },
  VISA_G_Q05: {
    type: z.union([
      z.literal(0),
      z.literal(2),
      z.literal(5),
      z.literal(7),
      z.literal(10),
    ]),
  },
  VISA_G_Q06: {
    type: z.union([
      z.literal(0),
      z.literal(2),
      z.literal(5),
      z.literal(7),
      z.literal(10),
    ]),
  },
  VISA_G_Q07: {
    type: z.union([z.literal(0), z.literal(4), z.literal(7), z.literal(10)]),
  },
  VISA_G_Q08: {
    label: {
      en: "Select what's applicable",
    },
    type: z.union([z.literal('A'), z.literal('B'), z.literal('C')]).optional(),
    uiOptions: {
      options: [
        {
          value: 'A',
          label: {
            en: 'My hip pain is so severe that it will stop me from walking, shopping, running or other weight bearing exercise.',
          },
        },
        {
          value: 'B',
          label: {
            en: 'My hip pain is present with exercise, but it does not stop me from walking, shopping, running or other weight bearing type exercise.',
          },
        },
        {
          value: 'C',
          label: {
            en: 'If you have no pain while you undertake walking, shopping, running or other weight bearing type exercise.',
          },
        },
      ],
    },
    info: {
      en: 'This question determines whether "VISA_G_Q08_A", "VISA_G_Q08_B" or "VISA_G_Q08_C" should be answered.',
    },
  },
  VISA_G_Q08_A: {
    type: z
      .union([
        z.literal(0),
        z.literal(2),
        z.literal(5),
        z.literal(7),
        z.literal(10),
      ])
      .optional(),
    info: { en: 'Should only be scored when there is no pain during sports' },
  },
  VISA_G_Q08_B: {
    type: z
      .union([
        z.literal(0),
        z.literal(5),
        z.literal(10),
        z.literal(15),
        z.literal(20),
      ])
      .optional(),
    info: {
      en: 'Should only be scored when there is pain during sports but does not need to quit sports activities because of it',
    },
  },
  VISA_G_Q08_C: {
    type: z
      .union([
        z.literal(6),
        z.literal(12),
        z.literal(18),
        z.literal(24),
        z.literal(30),
      ])
      .optional(),
    info: {
      en: 'Should only be scored when there is pain during sports resulting in canceling the sports activities',
    },
  },
} satisfies ScoreInputSchemaType
