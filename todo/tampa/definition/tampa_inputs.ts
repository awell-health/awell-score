import type { InputType } from '../../../src/types/calculations.types'
import { NumberInputType } from '../../../src/types/calculations/inputs/calculation-inputs.types'

const type: NumberInputType = {
  type: 'number',
  allowed_answers: [
    { value: 1, label: { en: 'Strongly disagree' } },
    { value: 2, label: { en: 'Disagree' } },
    { value: 3, label: { en: 'Agree' } },
    { value: 4, label: { en: 'Strongly agree' } },
  ],
}

export const TAMPA_INPUTS: Array<InputType> = [
  {
    input_id: 'Q01',
    input_type,
    required: true,
    inverse: false,
  },
  {
    input_id: 'Q02',
    input_type,
    required: true,
    inverse: false,
  },
  {
    input_id: 'Q03',
    input_type,
    required: true,
    inverse: false,
  },
  {
    input_id: 'Q04',
    input_type,
    required: true,
    info: {
      en: 'The answer on this question will be inversed by the calculation',
    },
    inverse: true,
  },
  {
    input_id: 'Q05',
    input_type,
    required: true,
    inverse: false,
  },
  {
    input_id: 'Q06',
    input_type,
    required: true,
    inverse: false,
  },
  {
    input_id: 'Q07',
    input_type,
    required: true,
    inverse: false,
  },
  {
    input_id: 'Q08',
    input_type,
    required: true,
    info: {
      en: 'The answer on this question will be inversed by the calculation',
    },
    inverse: true,
  },
  {
    input_id: 'Q09',
    input_type,
    required: true,
    inverse: false,
  },
  {
    input_id: 'Q10',
    input_type,
    required: true,
    inverse: false,
  },
  {
    input_id: 'Q11',
    input_type,
    required: true,
    inverse: false,
  },
  {
    input_id: 'Q12',
    input_type,
    required: true,
    info: {
      en: 'The answer on this question will be inversed by the calculation',
    },
    inverse: true,
  },
  {
    input_id: 'Q13',
    input_type,
    required: true,
    inverse: false,
  },
  {
    input_id: 'Q14',
    input_type,
    required: true,
    inverse: false,
  },
  {
    input_id: 'Q15',
    input_type,
    required: true,
    inverse: false,
  },
  {
    input_id: 'Q16',
    input_type,
    required: true,
    info: {
      en: 'The answer on this question will be inversed by the calculation',
    },
    inverse: true,
  },
  {
    input_id: 'Q17',
    input_type,
    required: true,
    inverse: false,
  },
]
