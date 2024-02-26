import type { InputType } from '../../../../types/calculations.types'
import { NumberInputType } from '../../../../types/calculations/inputs/calculation-inputs.types'

const input_type: NumberInputType = {
  type: 'number',
  allowed_answers: [
    { value: 0, label: { nl: 'Geen', en: 'None', fr: 'Absente' } },
    { value: 1, label: { nl: 'Gering', en: 'Mild', fr: 'Légère' } },
    { value: 2, label: { nl: 'Matig', en: 'Moderate', fr: 'Modérée' } },
    { value: 3, label: { nl: 'Veel', en: 'Severe', fr: 'Forte' } },
    { value: 4, label: { nl: 'Erg veel', en: 'Extreme', fr: 'Extrême' } },
  ],
}

export const HOOS_PS_INPUTS: Array<InputType> = [
  {
    input_id: '1_stairs',
    input_label: {
      nl: 'Trap aflopen',
      en: 'Descending stairs',
      fr: 'Descendre les escaliers',
    },
    input_type,
    required: true,
  },
  {
    input_id: '2_bath_shower',
    input_label: {
      nl: 'In/uit bad of douche gaan',
      en: 'Getting in/out of bath or shower',
      fr: 'Entrer ou sortir d’une baignoire',
    },
    input_type,
    required: true,
  },
  {
    input_id: '3_sit',
    input_label: { nl: 'Zitten', en: 'Sitting', fr: 'Rester assis(e)' },
    input_type,
    required: true,
  },
  {
    input_id: '4_running',
    input_label: { nl: 'Hardlopen', en: 'Running', fr: 'Courir' },
    input_type,
    required: true,
  },
  {
    input_id: '5_turn_on_leg',
    input_label: {
      nl: 'Draaien op een belast been',
      en: 'Twisting/pivoting on your loaded leg',
      fr: 'Tourner, pivoter sur votre jambe',
    },
    input_type,
    required: true,
  },
]
