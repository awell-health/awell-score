import { z } from 'zod'
import { type EnumNumberInputType, ScoreInputSchemaType } from '../../../types'

export const NEVER = 0
export const RARELY = 1
export const SOMETIMES = 2
export const OFTEN = 3
export const ALMOST_ALWAYS = 4

const type = {
  type: z
    .union([
      z.literal(NEVER),
      z.literal(RARELY),
      z.literal(SOMETIMES),
      z.literal(OFTEN),
      z.literal(ALMOST_ALWAYS),
    ])
    .optional(),
  uiOptions: {
    options: [
      {
        value: NEVER,
        label: { en: 'Never' },
      },
      {
        value: RARELY,
        label: {
          en: 'Rarely',
        },
      },
      {
        value: SOMETIMES,
        label: {
          en: 'Sometimes',
        },
      },
      {
        value: OFTEN,
        label: {
          en: 'Often',
        },
      },
      {
        value: ALMOST_ALWAYS,
        label: {
          en: 'Almost always',
        },
      },
    ],
  },
} satisfies EnumNumberInputType

export const MFIS_INPUTS = {
  Q01: {
    label: {
      en: 'I have been less alert.',
    },
    ...type,
  },
  Q02: {
    label: {
      en: 'I have had difficulty paying attention.',
    },
    ...type,
  },
  Q03: {
    label: {
      en: 'I have been unable to think clearly.',
    },
    ...type,
  },
  Q04: {
    label: {
      en: 'I have been clumsy and uncoordinated.',
    },
    ...type,
  },
  Q05: {
    label: {
      en: 'I have been forgetful.',
    },
    ...type,
  },
  Q06: {
    label: {
      en: 'I have had to pace myself in my physical activities.',
    },
    ...type,
  },
  Q07: {
    label: {
      en: 'I have been less motivated to do anything that requires physical effort.',
    },
    ...type,
  },
  Q08: {
    label: {
      en: 'I have been less motivated to participate in social activities.',
    },
    ...type,
  },
  Q09: {
    label: {
      en: 'I have been limited in my ability to do things away from home.',
    },
    ...type,
  },
  Q10: {
    label: {
      en: ' I have had trouble maintaining physical effort for long periods.',
    },
    ...type,
  },
  Q11: {
    label: {
      en: 'I have had difficulty making decisions',
    },
    ...type,
  },
  Q12: {
    label: {
      en: 'I have been less motivated to do anything that requires thinking.',
    },
    ...type,
  },
  Q13: {
    label: {
      en: 'My muscles have felt weak.',
    },
    ...type,
  },
  Q14: {
    label: {
      en: 'I have been physically uncomfortable.',
    },
    ...type,
  },
  Q15: {
    label: {
      en: 'I have had trouble finishing tasks that require thinking.',
    },
    ...type,
  },
  Q16: {
    label: {
      en: 'I have had difficulty organizing things.',
    },
    ...type,
  },
  Q17: {
    label: {
      en: 'I have been less able to complete tasks that require physical effort.',
    },
    ...type,
  },
  Q18: {
    label: {
      en: 'My thinking has been slowed down.',
    },
    ...type,
  },
  Q19: {
    label: {
      en: 'I have had trouble concentrating.',
    },
    ...type,
  },
  Q20: {
    label: {
      en: 'I have limited my physical activities.',
    },
    ...type,
  },
  Q21: {
    label: {
      en: 'I have needed to rest more often or for longer periods of time.',
    },
    ...type,
  },
} satisfies ScoreInputSchemaType
