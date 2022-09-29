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
    { value: 5 },
  ],
}

export const NDI_INPUTS: Array<InputType> = [
  {
    input_id: 'NDI_Q01',
    input_type,
    required: true,
  },
  {
    input_id: 'NDI_Q02',
    input_type,
    required: true,
  },
  {
    input_id: 'NDI_Q03',
    input_type,
    required: true,
  },
  {
    input_id: 'NDI_Q04',
    input_type,
    required: true,
  },
  {
    input_id: 'NDI_Q05',
    input_type,
    required: true,
  },
  {
    input_id: 'NDI_Q06',
    input_type,
    required: true,
  },
  {
    input_id: 'NDI_Q07',
    input_type,
    required: true,
  },
  {
    input_id: 'NDI_Q08',
    input_type,
    required: true,
  },
  {
    input_id: 'NDI_Q09',
    input_type,
    required: true,
  },
  {
    input_id: 'NDI_Q10',
    input_type,
    required: true,
  },
]
