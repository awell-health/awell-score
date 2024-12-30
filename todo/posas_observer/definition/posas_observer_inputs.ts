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

export const POSAS_OBSERVER_INPUTS: Array<InputType> = [
  {
    input_id: 'VASCULARISATION',
    input_type,
    required: true,
  },
  {
    input_id: 'PIGMENTATION',
    input_type,
    required: true,
  },
  {
    input_id: 'THICKNESS',
    input_type,
    required: true,
  },
  {
    input_id: 'RELIEF',
    input_type,
    required: true,
  },
  {
    input_id: 'PLIABILITY',
    input_type,
    required: true,
  },
  {
    input_id: 'SURFACE_AREA',
    input_type,
    required: true,
  },
]
