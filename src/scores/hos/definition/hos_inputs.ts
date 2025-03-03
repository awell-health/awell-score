import { z } from 'zod'
import type { EnumNumberInputType, ScoreInputSchemaType } from '../../../types'

export const NOT_APPLICABLE_ANSWER = 999

const type = {
  type: z
    .union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(NOT_APPLICABLE_ANSWER),
    ])
    .optional(),
  uiOptions: {
    options: [
      {
        value: 4,
        label: {
          en: 'No difficulty at all',
          nl: 'Geen beperking',
        },
      },
      {
        value: 3,
        label: {
          en: 'Some difficulty',
          nl: 'Lichte beperking',
        },
      },
      {
        value: 2,
        label: {
          en: 'Moderate difficulty',
          nl: 'Matige beperking',
        },
      },
      {
        value: 1,
        label: {
          en: 'Extreme difficulty',
          nl: 'Extreme beperking',
        },
      },
      {
        value: 0,
        label: {
          en: 'Unable to do',
          nl: 'Onmogelijkheid tot uitvoeren',
        },
      },
      {
        value: NOT_APPLICABLE_ANSWER,
        label: {
          en: 'Not applicable',
          nl: 'Niet van toepassing',
        },
      },
    ],
  },
} satisfies EnumNumberInputType

export const HOS_INPUTS = {
  Q01: {
    label: {
      nl: '',
      en: 'Because of your hip how much difficulty do you have with: Standing for 15 minutes',
    },
    ...type,
  },
  Q02: {
    label: { nl: '', en: 'Getting into and out of an average car' },
    ...type,
  },
  Q03: {
    label: { nl: '', en: 'Walking up steep hills' },
    ...type,
  },
  Q04: {
    label: { nl: '', en: 'Walking down steep hills' },
    ...type,
  },
  Q05: {
    label: { nl: '', en: 'Going up 1 flight of stairs' },
    ...type,
  },
  Q06: {
    label: { nl: '', en: 'Going down 1 flight of stairs' },
    ...type,
  },
  Q07: {
    label: { nl: '', en: 'Stepping up and down curbs' },
    ...type,
  },
  Q08: {
    label: { nl: '', en: 'Deep squatting' },
    ...type,
  },
  Q09: {
    label: { nl: '', en: 'Getting into and out of a bath tub' },
    ...type,
  },
  Q10: {
    label: { nl: '', en: 'Walking initially' },
    ...type,
  },
  Q11: {
    label: { nl: '', en: 'Walking approximately 10 minutes' },
    ...type,
  },
  Q12: {
    label: { nl: '', en: 'Walking 15 minutes or greater' },
    ...type,
  },
  Q13: {
    label: { nl: '', en: 'Twisting/pivoting on involved leg' },
    ...type,
  },
  Q14: {
    label: { nl: '', en: 'Rolling over in bed' },
    ...type,
  },
  Q15: {
    label: {
      nl: '',
      en: 'Light to moderate work (standing, walking)',
    },
    ...type,
  },
  Q16: {
    label: {
      nl: '',
      en: 'Heavy work (push/pulling, climbing, carrying)',
    },
    ...type,
  },
  Q17: {
    label: { nl: '', en: 'Recreational activities' },
    ...type,
  },
  SQ01: {
    label: {
      nl: '',
      en: 'Because of your hip how much difficulty do you have with: Running one mile',
    },
    ...type,
  },
  SQ02: {
    label: { nl: '', en: 'Jumping' },
    ...type,
  },
  SQ03: {
    label: { nl: '', en: 'Swinging objects like a golf club' },
    ...type,
  },
  SQ04: {
    label: { nl: '', en: 'Landing' },
    ...type,
  },
  SQ05: {
    label: { nl: '', en: 'Starting and stopping quickly' },
    ...type,
  },
  SQ06: {
    label: { nl: '', en: 'Cutting/lateral movements' },
    ...type,
  },
  SQ07: {
    label: { nl: '', en: 'Low impact activities like fast walking' },
    ...type,
  },
  SQ08: {
    label: {
      nl: '',
      en: 'Ability to perform activity with your normal technique',
    },
    ...type,
  },
  SQ09: {
    label: {
      nl: '',
      en: 'Ability to participate in your desired sport as long as you would like',
    },
    ...type,
  },
} satisfies ScoreInputSchemaType
