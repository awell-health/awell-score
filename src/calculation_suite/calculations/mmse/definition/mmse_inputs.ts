import type { InputType } from '../../../../types/calculations.types'

export const MMSE_INPUTS: Array<InputType> = [
  {
    input_id: 'ORIENTATION_TO_TIME',
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0 },
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
      ],
    },
    required: true,
  },
  {
    input_id: 'ORIENTATION_TO_PLACE',
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0 },
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
      ],
    },
    required: true,
  },
  {
    input_id: 'REGISTRATION',
    input_type: {
      type: 'number',
      allowed_answers: [{ value: 0 }, { value: 1 }, { value: 2 }, { value: 3 }],
    },
    required: true,
  },
  {
    input_id: 'ATTENTION_AND_CALCULATION',
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0 },
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
      ],
    },
    required: true,
  },
  {
    input_id: 'RECALL',
    input_type: {
      type: 'number',
      allowed_answers: [{ value: 0 }, { value: 1 }, { value: 2 }, { value: 3 }],
    },
    required: true,
  },
  {
    input_id: 'LANGUAGE',
    input_type: {
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
      ],
    },
    required: true,
  },
  {
    input_id: 'CONSTRUCT',
    input_type: {
      type: 'number',
      allowed_answers: [{ value: 0 }, { value: 1 }],
    },
    required: true,
  },
]
