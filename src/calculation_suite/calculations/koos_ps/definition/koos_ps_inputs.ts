import type { InputType } from '../../../../types/calculations.types'
import { NumberInputType } from '../../../../types/calculations/inputs/calculation-inputs.types'

const input_type: NumberInputType = {
  type: 'number',
  allowed_answers: [
    { value: 0, label: { nl: 'Geen', en: 'None' } },
    { value: 1, label: { nl: 'Gering', en: 'Mild' } },
    { value: 2, label: { nl: 'Matig', en: 'Moderate' } },
    { value: 3, label: { nl: 'Veel', en: 'Severe' } },
    { value: 4, label: { nl: 'Erg veel', en: 'Extreme' } },
  ],
}

export const KOOS_PS_INPUTS: Array<InputType> = [
  {
    input_id: '1_rise_from_bed',
    input_label: { nl: 'Opstaan vanuit bed', en: 'Rising from bed' },
    input_type,
    required: true,
  },
  {
    input_id: '2_socks',
    input_label: {
      nl: 'Sokken / kousen aantrekken',
      en: 'Putting on socks/stockings',
    },
    input_type,
    required: true,
  },
  {
    input_id: '3_rise_from_chair',
    input_label: { nl: 'Opstaan vanuit een stoel', en: 'Rising from sitting' },
    input_type,
    required: true,
  },
  {
    input_id: '4_pickup_from_floor',
    input_label: {
      nl: 'Bukken naar de grond/iets oppakken van de grond',
      en: 'Bending to floor',
    },
    input_type,
    required: true,
  },
  {
    input_id: '5_turn_on_knee',
    input_label: {
      nl: 'Draaien op een belaste knie',
      en: 'Twisting/pivoting on your injured knee',
    },
    input_type,
    required: true,
  },
  {
    input_id: '6_kneel',
    input_label: { nl: 'Knielen', en: 'Kneeling' },
    input_type,
    required: true,
  },
  {
    input_id: '7_staying_squat',
    input_label: { nl: 'Op uw hurken zitten', en: 'Squatting' },
    input_type,
    required: true,
  },
]
