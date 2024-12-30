import type { InputType } from '../../../src/types/calculations.types'

export const PSK_INPUTS: Array<InputType> = [
  {
    input_id: 'SCORE_FOR_ACTIVITY_01',
    input_type: {
      type: 'number',
      range: {
        min: { value: 0 },
        max: { value: 10 },
      },
    },
    required: false,
  },
  {
    input_id: 'SCORE_FOR_ACTIVITY_02',
    input_type: {
      type: 'number',
      range: {
        min: { value: 0 },
        max: { value: 10 },
      },
    },
    required: false,
  },
  {
    input_id: 'SCORE_FOR_ACTIVITY_03',
    input_type: {
      type: 'number',
      range: {
        min: { value: 0 },
        max: { value: 10 },
      },
    },
    required: false,
  },
  {
    input_id: 'SCORE_FOR_ACTIVITY_04',
    input_type: {
      type: 'number',
      range: {
        min: { value: 0 },
        max: { value: 10 },
      },
    },
    required: false,
  },
  {
    input_id: 'SCORE_FOR_ACTIVITY_05',
    input_type: {
      type: 'number',
      range: {
        min: { value: 0 },
        max: { value: 10 },
      },
    },
    required: false,
  },
]
