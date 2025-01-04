import { z } from 'zod'
import { EnumNumberInputType, ScoreInputSchemaType } from '../../../types'

const type = {
  type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
  uiOptions: {
    options: [
      {
        value: 0,
        label: { nl: 'Ik word niet doezelig/slaperig', en: 'Would never dose' },
      },
      {
        value: 1,
        label: {
          nl: 'Lichte kans dat ik doezelig/slaperig word',
          en: 'Slight chance of dozing',
        },
      },
      {
        value: 2,
        label: {
          nl: 'Matige kans dat ik doezelig/slaperig word',
          en: 'Moderate chance of dozing',
        },
      },
      {
        value: 3,
        label: {
          nl: 'Hoge kans dat ik doezelig/slaperig word',
          en: 'High chance of dozing',
        },
      },
    ],
  },
} satisfies EnumNumberInputType

export const ESS_INPUTS = {
  ESS_Q1: {
    label: {
      nl: 'Tijdens zitten en lezen',
      en: 'Sitting and reading',
    },
    ...type,
  },
  ESS_Q2: {
    label: {
      nl: 'Tijdens televisie kijken',
      en: 'Watching TV',
    },
    ...type,
  },
  ESS_Q3: {
    label: {
      nl: 'Zitten in een openbare instelling (zoals theater)',
      en: 'Sitting still in a public place (e.g. a theatre, a cinema or a meeting)',
    },
    ...type,
  },
  ESS_Q4: {
    label: {
      nl: 'Langer dan 1 uur zittend als passagier in de auto',
      en: 'As a passenger in a car for an hour without a break',
    },
    ...type,
  },
  ESS_Q5: {
    label: {
      nl: 'Tijdens rust in de namiddag ',
      en: 'Lying down to rest in the afternoon when the circumstances allow',
    },
    ...type,
  },
  ESS_Q6: {
    label: {
      nl: 'Zitten en praten met iemand',
      en: 'Sitting and talking to someone',
    },
    ...type,
  },
  ESS_Q7: {
    label: {
      nl: 'Na de lunch',
      en: 'Sitting quietly after lunch without having drunk alcohol',
    },
    ...type,
  },
  ESS_Q8: {
    label: {
      nl: 'In de auto in een stilstaande file',
      en: 'In a car or bus while stopped for a few minutes in traffic',
    },
    ...type,
  },
} satisfies ScoreInputSchemaType
