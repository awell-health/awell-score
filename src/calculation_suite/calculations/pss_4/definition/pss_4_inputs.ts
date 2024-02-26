import type { InputType } from '../../../../types/calculations.types'
import { NumberInputType } from '../../../../types/calculations/inputs/calculation-inputs.types'

const input_type: NumberInputType = {
  type: 'number',
  allowed_answers: [
    {
      label: { en: 'Never' },
      value: 0,
    },
    {
      label: { en: 'Almost Never' },
      value: 1,
    },
    {
      label: { en: 'Sometimes' },
      value: 2,
    },
    {
      label: { en: 'Fairly Often' },
      value: 3,
    },
    {
      label: { en: 'Very Often' },
      value: 4,
    },
  ],
}

export const PSS4_INPUTS: Array<InputType> = [
  {
    input_id: 'PSS4_Q01',
    input_label: {
      en: 'In the last month, how often have you felt that you were unable to control the important things in your life?',
    },
    input_type,
  },
  {
    input_id: 'PSS4_Q02',
    input_label: {
      en: 'In the last month, how often have you felt confident about your ability to handle your personal problems?',
    },
    input_type,
  },
  {
    input_id: 'PSS4_Q03',
    input_label: {
      en: 'In the last month, how often have you felt that that things were going your way?',
    },
    input_type,
  },
  {
    input_id: 'PSS4_Q04',
    input_label: {
      en: 'In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?',
    },
    input_type,
  },
]
