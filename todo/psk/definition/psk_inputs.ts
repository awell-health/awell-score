import type { InputType } from '../../../src/types/calculations.types'

export const PSK_INPUTS: Array<InputType> = [
  {
    input_id: 'SCORE_FOR_ACTIVITY_01',
    type: {
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
    type: {
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
    type: {
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
    type: {
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
    type: {
      type: 'number',
      range: {
        min: { value: 0 },
        max: { value: 10 },
      },
    },
    required: false,
  },
]
