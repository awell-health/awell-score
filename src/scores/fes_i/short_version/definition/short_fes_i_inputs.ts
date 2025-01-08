import { z } from 'zod'
import { EnumNumberInputType } from '../../../../types'

const type = {
  type: z
    .union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
    .optional(),
  uiOptions: {
    options: [
      {
        label: { en: 'Not at all concerned', nl: 'Helemaal niet bezorgd' },
        value: 1,
      },
      {
        label: { en: 'Somewhat concerned', nl: 'Een beetje bezorgd' },
        value: 2,
      },
      {
        label: { en: 'Fairly concerned', nl: 'Tamelijk bezorgd' },
        value: 3,
      },
      {
        label: { en: 'Very concerned', nl: 'Erg bezorgd' },
        value: 4,
      },
    ],
  },
} satisfies EnumNumberInputType

export const SHORT_FES_I_INPUTS = {
  Q01: {
    label: {
      en: 'How concerned are you that you might fall when getting dressed or undressed?',
      nl: 'Hoe bezorgd bent u dat u zou kunnen vallen bij Het aan- of uitkleden?',
    },
    ...type,
  },
  Q02: {
    label: {
      en: 'How concerned are you that you might fall when taking a bath or shower?',
      nl: 'Hoe bezorgd bent u dat u zou kunnen vallen bij Het nemen van een bad of douche?',
    },
    ...type,
  },
  Q03: {
    label: {
      en: 'How concerned are you that you might fall when getting in or out of a chair?',
      nl: 'Hoe bezorgd bent u dat u zou kunnen vallen bij Het in of uit een stoel komen?',
    },
    ...type,
  },
  Q04: {
    label: {
      en: 'How concerned are you that you might fall when going up or down stairs?',
      nl: 'Hoe bezorgd bent u dat u zou kunnen vallen bij Het op- of aflopen van een trap?',
    },
    ...type,
  },
  Q05: {
    label: {
      en: 'How concerned are you that you might fall when reaching for something above your head or on the ground?',
      nl: 'Hoe bezorgd bent u dat u zou kunnen vallen bij Het reiken naar iets boven uw hoofd of naar iets op de grond?',
    },
    ...type,
  },
  Q06: {
    label: {
      en: 'How concerned are you that you might fall when walking up or down a slope?',
      nl: 'Hoe bezorgd bent u dat u zou kunnen vallen bij Het op- of aflopen van een helling?',
    },
    ...type,
  },
  Q07: {
    label: {
      en: 'How concerned are you that you might fall when going out to a social event (e.g. religious service, family gathering or club meeting)?',
      nl: 'Hoe bezorgd bent u dat u zou kunnen vallen bij Het bezoeken van een sociale gelegenheid (zoals kerkdienst, familiebijeenkomst of verenigingsactiviteit)?',
    },
    ...type,
  },
}
