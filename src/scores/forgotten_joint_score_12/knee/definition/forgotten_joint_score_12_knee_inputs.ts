import { z } from 'zod'
import { EnumNumberInputType } from '../../../../types'

const type = {
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
        label: { nl: 'Nooit', en: '' },
      },
      {
        value: 2,
        label: {
          nl: 'Bijna nooit',
          en: '',
        },
      },
      {
        value: 3,
        label: {
          nl: 'Zelden',
          en: '',
        },
      },
      {
        value: 4,
        label: {
          nl: 'Soms',
          en: '',
        },
      },
      {
        value: 5,
        label: {
          nl: 'Meestal',
          en: '',
        },
      },
    ],
  },
} satisfies EnumNumberInputType

export const FJS_KNEE_INPUTS = {
  Q01: {
    label: {
      nl: "Bent u zich bewust van uw kniegewricht 's nachts in bed?",
      en: '',
    },
    ...type,
  },
  Q02: {
    label: {
      nl: 'Bent u zich bewust van uw kniegewricht wanneer u langer dan een uur op een stoel zit?',
      en: '',
    },
    ...type,
  },
  Q03: {
    label: {
      nl: 'Bent u zich bewust van uw kniegewricht wanneer u langer dan 15 minuten wandelt?',
      en: '',
    },
    ...type,
  },
  Q04: {
    label: {
      nl: 'Bent u zich bewust van uw kniegewricht wanneer u een bad/douche neemt?',
      en: '',
    },
    ...type,
  },
  Q05: {
    label: {
      nl: 'Bent u zich bewust van uw kniegewricht wanneer u met de auto reist?',
      en: '',
    },
    ...type,
  },
  Q06: {
    label: {
      nl: 'Bent u zich bewust van uw kniegewricht wanneer u de trap opgaat?',
      en: '',
    },
    ...type,
  },
  Q07: {
    label: {
      nl: 'Bent u zich bewust van uw kniegewricht wanneer u op een oneffen ondergrond wandelt?',
      en: '',
    },
    ...type,
  },
  Q08: {
    label: {
      nl: 'Bent u zich bewust van uw kniegewricht wanneer u opstaat vanuit een laagzittende positie?',
      en: '',
    },
    ...type,
  },
  Q09: {
    label: {
      nl: 'Bent u zich bewust van uw kniegewricht wanneer u lange tijd staat?',
      en: '',
    },
    ...type,
  },
  Q10: {
    label: {
      nl: 'Bent u zich bewust van uw kniegewricht wanneer u huishoudelijke taken uitvoert of tuiniert?',
      en: '',
    },
    ...type,
  },
  Q11: {
    label: {
      nl: 'Bent u zich bewust van uw kniegewricht wanneer u een korte wandeling of trektocht maakt?',
      en: '',
    },
    ...type,
  },
  Q12: {
    label: {
      nl: 'Bent u zich bewust van uw kniegewricht wanneer u uw favoriete sport beoefent?',
      en: '',
    },
    ...type,
  },
}
