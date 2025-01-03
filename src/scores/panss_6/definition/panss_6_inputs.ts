import { z } from 'zod'
import { EnumNumberInputType } from '../../../types'

const type = {
  type: z.union([
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
  ]),
  uiOptions: {
    options: [
      {
        value: 1,
        label: { en: 'Absent' },
      },
      {
        value: 2,
        label: {
          en: 'Minimal',
        },
      },
      {
        value: 3,
        label: {
          en: 'Mild',
        },
      },
      {
        value: 4,
        label: {
          en: 'Moderate',
        },
      },
      {
        value: 5,
        label: {
          en: 'Moderate severe',
        },
      },
      {
        value: 6,
        label: {
          en: 'Severe',
        },
      },
      {
        value: 7,
        label: {
          en: 'Extreme',
        },
      },
    ],
  },
} satisfies EnumNumberInputType

export const PANSS_6_INPUTS = {
  PANSS_6_Q01_DELUSIONS: {
    label: {
      en: 'Delusions',
    },
    ...type,
  },
  PANSS_6_Q02_CONCEPTUAL_DISORGANIZATIONS: {
    label: {
      en: 'Conceptual disorganization',
    },
    ...type,
  },
  PANSS_6_Q03_HALLUCINATORY_BEHAVIOR: {
    label: {
      en: 'Hallucinatory behavior',
    },
    ...type,
  },
  PANSS_6_Q04_BLUNTED_AFFECT: {
    label: {
      en: 'Blunted affect',
    },
    ...type,
  },
  PANSS_6_Q05_PASSIVE_SOCIAL_WITHDRAWAL: {
    label: {
      en: 'Passive/apathetic social withdrawal',
    },
    ...type,
  },
  PANSS_6_Q06_LACK_OF_SPONTANEITY: {
    label: {
      en: 'Lack of spontaneity and flow of conversation',
    },
    ...type,
  },
}
