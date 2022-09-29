import type { InputType } from '../../../../types/calculations.types'
import { NumberInputType } from '../../../../types/calculations/inputs/calculation-inputs.types'

const input_type: NumberInputType = {
  type: 'number',
  allowed_answers: [
    { value: 0 },
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
  ],
}

export const ZARRIT_INPUTS: Array<InputType> = [
  {
    input_id: 'ZARIT_12_Q01',
    input_type,
    required: true,
  },
  {
    input_id: 'ZARIT_12_Q02',
    input_type,
    required: true,
  },
  {
    input_id: 'ZARIT_12_Q03',
    input_type,
    required: true,
  },
  {
    input_id: 'ZARIT_12_Q04',
    input_type,
    required: true,
  },
  {
    input_id: 'ZARIT_12_Q05',
    input_type,
    required: true,
  },
  {
    input_id: 'ZARIT_12_Q06',
    input_type,
    required: true,
  },
  {
    input_id: 'ZARIT_12_Q07',
    input_type,
    required: true,
  },
  {
    input_id: 'ZARIT_12_Q08',
    input_type,
    required: true,
  },
  {
    input_id: 'ZARIT_12_Q09',
    input_type,
    required: true,
  },
  {
    input_id: 'ZARIT_12_Q10',
    input_type,
    required: true,
  },
  {
    input_id: 'ZARIT_12_Q11',
    input_type,
    required: true,
  },
  {
    input_id: 'ZARIT_12_Q12',
    input_type,
    required: true,
  },
]
