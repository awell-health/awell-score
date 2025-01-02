import type { InputType } from '../../../../types/calculations.types'
import { NumberInputType } from '../../../../types/calculations/inputs/calculation-inputs.types'

const type: NumberInputType = {
  type: 'number',
  allowed_answers: [
    { value: 0, label: { nl: 'Geen', en: 'None', fr: 'Jamais' } },
    { value: 1, label: { nl: 'Gering', en: 'Mild', fr: 'Rarement' } },
    { value: 2, label: { nl: 'Matig', en: 'Moderate', fr: 'Parfois' } },
    { value: 3, label: { nl: 'Veel', en: 'Severe', fr: 'Souvent' } },
    { value: 4, label: { nl: 'Erg veel', en: 'Extreme', fr: 'Toujours' } },
  ],
}

export const KOOS_PS_INPUTS: Array<InputType> = [
  {
    input_id: '1_rise_from_bed',
    label: {
      nl: 'Opstaan vanuit bed',
      en: 'Rising from bed',
      fr: 'Se lever du lit',
    },
    input_type,
    required: true,
  },
  {
    input_id: '2_socks',
    label: {
      nl: 'Sokken / kousen aantrekken',
      en: 'Putting on socks/stockings',
      fr: 'Mettre des chaussettes/bas',
    },
    input_type,
    required: true,
  },
  {
    input_id: '3_rise_from_chair',
    label: {
      nl: 'Opstaan vanuit een stoel',
      en: 'Rising from sitting',
      fr: 'Se lever d`une chaise',
    },
    input_type,
    required: true,
  },
  {
    input_id: '4_pickup_from_floor',
    label: {
      nl: 'Bukken naar de grond/iets oppakken van de grond',
      en: 'Bending to floor',
      fr: 'Ramasser quelque chose du sol',
    },
    input_type,
    required: true,
  },
  {
    input_id: '5_turn_on_knee',
    label: {
      nl: 'Draaien op een belaste knie',
      en: 'Twisting/pivoting on your injured knee',
      fr: 'Tourner sur un genou blessé',
    },
    input_type,
    required: true,
  },
  {
    input_id: '6_kneel',
    label: { nl: 'Knielen', en: 'Kneeling', fr: 's`agenouiller' },
    input_type,
    required: true,
  },
  {
    input_id: '7_staying_squat',
    label: {
      nl: 'Op uw hurken zitten',
      en: 'Squatting',
      fr: 'S`accroupir',
    },
    input_type,
    required: true,
  },
]
