import type { InputType } from '../../../../types/calculations.types'
import { NumberInputType } from '../../../../types/calculations/inputs/calculation-inputs.types'

export const input_type: NumberInputType = {
  type: 'number',
  allowed_answers: [
    { value: 0 },
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
  ],
}

export const OHS_INPUTS: Array<InputType> = [
  {
    input_id: 'ohs_01',
    input_type,
    required: true,
  },
  {
    input_id: 'ohs_02',
    input_type,
    required: true,
  },
  {
    input_id: 'ohs_03',
    input_type,
    required: true,
  },
  {
    input_id: 'ohs_04',
    input_type,
    required: true,
  },
  {
    input_id: 'ohs_05',
    input_type,
    required: true,
  },
  {
    input_id: 'ohs_06',
    input_type,
    required: true,
  },
  {
    input_id: 'ohs_07',
    input_type,
    required: true,
  },
  {
    input_id: 'ohs_08',
    input_type,
    required: true,
  },
  {
    input_id: 'ohs_09',
    input_type,
    required: true,
  },
  {
    input_id: 'ohs_10',
    input_type,
    required: true,
  },
  {
    input_id: 'ohs_11',
    input_type,
    required: true,
  },
  {
    input_id: 'ohs_12',
    input_type,
    required: true,
  },
]
