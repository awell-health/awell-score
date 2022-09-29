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

export const HOOS_PS_INPUTS: Array<InputType> = [
  {
    input_id: '1_stairs',
    input_label: { nl: 'Trap aflopen', en: 'Descending stairs' },
    input_type,
    required: true,
  },
  {
    input_id: '2_bath_shower',
    input_label: {
      nl: 'In/uit bad of douche gaan',
      en: 'Getting in/out of bath or shower',
    },
    input_type,
    required: true,
  },
  {
    input_id: '3_sit',
    input_label: { nl: 'Zitten', en: 'Sitting' },
    input_type,
    required: true,
  },
  {
    input_id: '4_running',
    input_label: { nl: 'Hardlopen', en: 'Running' },
    input_type,
    required: true,
  },
  {
    input_id: '5_turn_on_leg',
    input_label: {
      nl: 'Draaien op een belast been',
      en: 'Twisting/pivoting on your loaded leg',
    },
    input_type,
    required: true,
  },
]
