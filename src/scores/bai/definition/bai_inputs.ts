import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../types'

const RESPONSE_OPTIONS = {
  uiOptions: {
    options: [
      {
        label: { en: 'Not at all' },
        value: 0,
      },
      {
        label: { en: `Mildly, but it didn't bother me much` },
        value: 1,
      },
      {
        label: { en: `Moderately - it wasn't pleasant at times` },
        value: 2,
      },
      {
        label: { en: 'Severely - it bothered me a lot' },
        value: 3,
      },
    ],
  },
}

export const BAI_INPUTS = {
  BAI_Q01: {
    label: {
      en: 'Numbness or tingling',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    ...RESPONSE_OPTIONS,
  },
  BAI_Q02: {
    label: {
      en: 'Feeling hot',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    ...RESPONSE_OPTIONS,
  },
  BAI_Q03: {
    label: {
      en: 'Wobbliness in legs',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    ...RESPONSE_OPTIONS,
  },
  BAI_Q04: {
    label: {
      en: 'Unable to relax',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    ...RESPONSE_OPTIONS,
  },
  BAI_Q05: {
    label: {
      en: 'Fear of worst happening',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    ...RESPONSE_OPTIONS,
  },
  BAI_Q06: {
    label: {
      en: 'Dizzy or lightheaded',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    ...RESPONSE_OPTIONS,
  },
  BAI_Q07: {
    label: {
      en: 'Heart pounding or racing',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    ...RESPONSE_OPTIONS,
  },
  BAI_Q08: {
    label: {
      en: 'Unsteady',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    ...RESPONSE_OPTIONS,
  },
  BAI_Q09: {
    label: {
      en: 'Terrified or afraid',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    ...RESPONSE_OPTIONS,
  },
  BAI_Q10: {
    label: {
      en: 'Nervous',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    ...RESPONSE_OPTIONS,
  },
  BAI_Q11: {
    label: {
      en: 'Feeling of choking',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    ...RESPONSE_OPTIONS,
  },
  BAI_Q12: {
    label: {
      en: 'Hands trembling',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    ...RESPONSE_OPTIONS,
  },
  BAI_Q13: {
    label: {
      en: 'Shaky / unsteady',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    ...RESPONSE_OPTIONS,
  },
  BAI_Q14: {
    label: {
      en: 'Fear of losing control',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    ...RESPONSE_OPTIONS,
  },
  BAI_Q15: {
    label: {
      en: 'Difficulty in breathing',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    ...RESPONSE_OPTIONS,
  },
  BAI_Q16: {
    label: {
      en: 'Fear of dying',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    ...RESPONSE_OPTIONS,
  },
  BAI_Q17: {
    label: {
      en: 'Scared',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    ...RESPONSE_OPTIONS,
  },
  BAI_Q18: {
    label: {
      en: 'Indigestion',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    ...RESPONSE_OPTIONS,
  },
  BAI_Q19: {
    label: {
      en: 'Faint / lightheaded',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    ...RESPONSE_OPTIONS,
  },
  BAI_Q20: {
    label: {
      en: 'Face flushed',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    ...RESPONSE_OPTIONS,
  },
  BAI_Q21: {
    label: {
      en: 'Hot / cold sweats',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    ...RESPONSE_OPTIONS,
  },
} satisfies ScoreInputSchemaType

