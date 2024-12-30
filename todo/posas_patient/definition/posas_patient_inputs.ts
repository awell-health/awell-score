import type { InputType } from '../../../src/types/calculations.types'
import { NumberInputType } from '../../../src/types/calculations/inputs/calculation-inputs.types'

const input_type: NumberInputType = {
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
}

export const POSAS_PATIENT_INPUTS: Array<InputType> = [
  {
    input_id: 'PAIN',
    input_type,
    required: true,
  },
  {
    input_id: 'ITCH',
    input_type,
    required: true,
  },
  {
    input_id: 'COLOR_DIFFERENCE',
    input_type,
    required: true,
  },
  {
    input_id: 'STIFFNESS',
    input_type,
    required: true,
  },
  {
    input_id: 'THICKNESS',
    input_type,
    required: true,
  },
  {
    input_id: 'IRREGULARITY',
    input_type,
    required: true,
  },
]
