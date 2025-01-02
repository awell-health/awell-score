import type { InputType } from '../../../../src/types/calculations.types'
import { NumberInputType } from '../../../../src/types/calculations/inputs/calculation-inputs.types'

const DEFAULT_type: NumberInputType = {
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

export const VISA_A_INPUTS: Array<InputType> = [
  {
    input_id: 'VISA_A_Q1',
    type: DEFAULT_INPUT_TYPE,
    required: true,
  },
  {
    input_id: 'VISA_A_Q02',
    type: DEFAULT_INPUT_TYPE,
    required: true,
  },
  {
    input_id: 'VISA_A_Q03',
    type: DEFAULT_INPUT_TYPE,
    required: true,
  },
  {
    input_id: 'VISA_A_Q04',
    type: DEFAULT_INPUT_TYPE,
    required: true,
  },
  {
    input_id: 'VISA_A_Q05',
    type: DEFAULT_INPUT_TYPE,
    required: true,
  },
  {
    input_id: 'VISA_A_Q06',
    type: DEFAULT_INPUT_TYPE,
    required: true,
  },
  {
    input_id: 'VISA_A_Q07',
    type: {
      type: 'number',
      allowed_answers: [
        { value: 0 },
        { value: 4 },
        { value: 7 },
        { value: 10 },
      ],
    },
    required: true,
  },
  {
    input_id: 'VISA_A_Q08',
    label: {
      en: "Select what's applicable",
    },
    type: {
      type: 'string',
      allowed_answers: [
        {
          value: 'A',
          label: {
            en: 'I have no pain while undertaking Achilles tendon loading sports',
          },
        },
        {
          value: 'B',
          label: {
            en: 'I have pain while undertaking Achilles tendon loading sports but it does not stop me from completing the activity',
          },
        },
        {
          value: 'C',
          label: {
            en: 'I have pain that stops me from completing Achilles tendon loading sports',
          },
        },
      ],
    },
    required: true,
    info: {
      en: 'This question determines whether "VISA_A_Q08_A", "VISA_A_Q08_B" or "VISA_A_Q08_C" should be answered.',
    },
  },
  {
    input_id: 'VISA_A_Q08_A',
    type: {
      type: 'number',
      allowed_answers: [
        { value: 0 },
        { value: 7 },
        { value: 14 },
        { value: 21 },
        { value: 30 },
      ],
    },
    required: false,
    info: { en: 'Should only be scored when there is no pain during sports' },
    not_applicable_if: {
      input_id: 'VISA_A_Q08',
      value_is_one_of: ['B', 'C'],
    },
  },
  {
    input_id: 'VISA_A_Q08_B',
    type: {
      type: 'number',
      allowed_answers: [
        { value: 0 },
        { value: 4 },
        { value: 10 },
        { value: 14 },
        { value: 20 },
      ],
    },
    required: false, // Should only be answered when there's pain during sports but does not need to quit sports activities because of it
    info: {
      en: 'Should only be scored when there is pain during sports but does not need to quit sports activities because of it',
    },
    not_applicable_if: {
      input_id: 'VISA_A_Q08',
      value_is_one_of: ['A', 'C'],
    },
  },
  {
    input_id: 'VISA_A_Q08_C',
    type: {
      type: 'number',
      allowed_answers: [
        { value: 0 },
        { value: 2 },
        { value: 5 },
        { value: 7 },
        { value: 10 },
      ],
    },
    required: false, // Should only be answered when there's pain during sports resulting in canceling the sports activities
    info: {
      en: 'Should only be scored when there is pain during sports resulting in canceling the sports activities',
    },
    not_applicable_if: {
      input_id: 'VISA_A_Q08',
      value_is_one_of: ['A', 'B'],
    },
  },
]
