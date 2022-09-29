import type { InputType } from '../../../../../types/calculations.types'

export const VISA_G_INPUTS: Array<InputType> = [
  {
    input_id: 'VISA_G_Q01',
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
        { value: 9 },
        { value: 10 },
      ],
    },
    required: true,
  },
  {
    input_id: 'VISA_G_Q02',
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0 },
        { value: 2 },
        { value: 5 },
        { value: 7 },
        { value: 10 },
      ],
    },
    required: true,
  },
  {
    input_id: 'VISA_G_Q03',
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0 },
        { value: 2 },
        { value: 5 },
        { value: 7 },
        { value: 10 },
      ],
    },
    required: true,
  },
  {
    input_id: 'VISA_G_Q04',
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0 },
        { value: 2 },
        { value: 5 },
        { value: 7 },
        { value: 10 },
      ],
    },
    required: true,
  },
  {
    input_id: 'VISA_G_Q05',
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0 },
        { value: 2 },
        { value: 5 },
        { value: 7 },
        { value: 10 },
      ],
    },
    required: true,
  },
  {
    input_id: 'VISA_G_Q06',
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0 },
        { value: 2 },
        { value: 5 },
        { value: 7 },
        { value: 10 },
      ],
    },
    required: true,
  },
  {
    input_id: 'VISA_G_Q07',
    input_type: {
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
    input_id: 'VISA_G_Q08',
    input_label: {
      en: "Select what's applicable",
    },
    input_type: {
      type: 'string',
      allowed_answers: [
        {
          value: 'A',
          label: {
            en: 'My hip pain is so severe that it will stop me from walking, shopping, running or other weight bearing exercise.',
          },
        },
        {
          value: 'B',
          label: {
            en: 'My hip pain is present with exercise, but it does not stop me from walking, shopping, running or other weight bearing type exercise.',
          },
        },
        {
          value: 'C',
          label: {
            en: 'If you have no pain while you undertake walking, shopping, running or other weight bearing type exercise.',
          },
        },
      ],
    },
    required: true,
    info: {
      en: 'This question determines whether "VISA_G_Q08_A", "VISA_G_Q08_B" or "VISA_G_Q08_C" should be answered.',
    },
  },
  {
    input_id: 'VISA_G_Q08_A',
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0 },
        { value: 2 },
        { value: 5 },
        { value: 7 },
        { value: 10 },
      ],
    },
    required: false, // Should only be answered when there is no pain during sports
    info: { en: 'Should only be scored when there is no pain during sports' },
    not_applicable_if: {
      input_id: 'VISA_G_Q08',
      value_is_one_of: ['B', 'C'],
    },
  },
  {
    input_id: 'VISA_G_Q08_B',
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0 },
        { value: 5 },
        { value: 10 },
        { value: 15 },
        { value: 20 },
      ],
    },
    required: false, // Should only be answered when there's pain during sports but does not need to quit sports activities because of it
    info: {
      en: 'Should only be scored when there is pain during sports but does not need to quit sports activities because of it',
    },
    not_applicable_if: {
      input_id: 'VISA_G_Q08',
      value_is_one_of: ['A', 'C'],
    },
  },
  {
    input_id: 'VISA_G_Q08_C',
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 6 },
        { value: 12 },
        { value: 18 },
        { value: 24 },
        { value: 30 },
      ],
    },
    required: false, // Should only be answered when there's pain during sports resulting in canceling the sports activities
    info: {
      en: 'Should only be scored when there is pain during sports resulting in canceling the sports activities',
    },
    not_applicable_if: {
      input_id: 'VISA_G_Q08',
      value_is_one_of: ['A', 'B'],
    },
  },
]
