import { z } from 'zod'
import { EnumNumberInputType, ScoreInputSchemaType } from '../../../types'
import { InputType } from 'zlib'

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
      { value: 0, label: { nl: 'Geen', en: 'None', fr: 'Jamais' } },
      { value: 1, label: { nl: 'Gering', en: 'Mild', fr: 'Rarement' } },
      { value: 2, label: { nl: 'Matig', en: 'Moderate', fr: 'Parfois' } },
      { value: 3, label: { nl: 'Veel', en: 'Severe', fr: 'Souvent' } },
      { value: 4, label: { nl: 'Erg veel', en: 'Extreme', fr: 'Toujours' } },
    ],
  },
} satisfies EnumNumberInputType

export const KOOS_PS_INPUTS = {
  '1_rise_from_bed': {
    label: {
      nl: 'Opstaan vanuit bed',
      en: 'Rising from bed',
      fr: 'Se lever du lit',
    },
    ...type,
  },
  '2_socks': {
    label: {
      nl: 'Sokken / kousen aantrekken',
      en: 'Putting on socks/stockings',
      fr: 'Mettre des chaussettes/bas',
    },
    ...type,
  },
  '3_rise_from_chair': {
    label: {
      nl: 'Opstaan vanuit een stoel',
      en: 'Rising from sitting',
      fr: 'Se lever d`une chaise',
    },
    ...type,
  },
  '4_pickup_from_floor': {
    label: {
      nl: 'Bukken naar de grond/iets oppakken van de grond',
      en: 'Bending to floor',
      fr: 'Ramasser quelque chose du sol',
    },
    ...type,
  },
  '5_turn_on_knee': {
    label: {
      nl: 'Draaien op een belaste knie',
      en: 'Twisting/pivoting on your injured knee',
      fr: 'Tourner sur un genou blessé',
    },
    ...type,
  },
  '6_kneel': {
    label: { nl: 'Knielen', en: 'Kneeling', fr: 's`agenouiller' },
    ...type,
  },
  '7_staying_squat': {
    label: {
      nl: 'Op uw hurken zitten',
      en: 'Squatting',
      fr: 'S`accroupir',
    },
    ...type,
  },
} satisfies ScoreInputSchemaType
