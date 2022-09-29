import type { InputType } from '../../../../../types/calculations.types'
import { NumberInputType } from '../../../../../types/calculations/inputs/calculation-inputs.types'

export const input_type: NumberInputType = {
  type: 'number',
  allowed_answers: [
    { value: 0 },
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 9 },
    { value: 10 },
  ],
}

export const OMPQ_10_INPUTS: Array<InputType> = [
  {
    input_id: 'OREBRO_01',
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
        { value: 6 },
        { value: 7 },
        { value: 8 },
        { value: 9 },
        { value: 10 },
      ],
    }, // Scored from 1 to 10
    required: true,
  },
  {
    input_id: 'OREBRO_02',
    input_type,
    required: true,
  },
  {
    input_id: 'OREBRO_03',
    input_type,
    required: true,
  },
  {
    input_id: 'OREBRO_04',
    input_type,
    required: true,
  },
  {
    input_id: 'OREBRO_05',
    input_type,
    required: true,
  },
  {
    input_id: 'OREBRO_06',
    input_type,
    required: true,
  },
  {
    input_id: 'OREBRO_07',
    input_type,
    required: true,
  },
  {
    input_id: 'OREBRO_08',
    input_type,
    required: true,
  },
  {
    input_id: 'OREBRO_09',
    input_type,
    required: true,
  },
  {
    input_id: 'OREBRO_10',
    input_type,
    required: true,
  },
]
