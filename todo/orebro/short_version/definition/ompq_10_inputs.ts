import type { InputType } from '../../../../src/types/calculations.types'
import { NumberInputType } from '../../../../src/types/calculations/inputs/calculation-inputs.types'

export const type: NumberInputType = {
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
    type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: {
            en: '0-1 week',
            nl: '',
          },
        },
        {
          value: 2,
          label: {
            en: '1-2 weeks',
            nl: '',
          },
        },
        {
          value: 3,
          label: {
            en: '3-4 weeks',
            nl: '',
          },
        },
        {
          value: 4,
          label: {
            en: '4-5 weeks',
            nl: '',
          },
        },
        {
          value: 5,
          label: {
            en: '6-8 weeks',
            nl: '',
          },
        },
        {
          value: 6,
          label: {
            en: '9-11 weeks',
            nl: '',
          },
        },
        {
          value: 7,
          label: {
            en: '3-6 months',
            nl: '',
          },
        },
        {
          value: 8,
          label: {
            en: '6-9 months',
            nl: '',
          },
        },
        {
          value: 9,
          label: {
            en: '9-12 months',
            nl: '',
          },
        },
        {
          value: 10,
          label: {
            en: 'over 1 year',
            nl: '',
          },
        },
      ],
    }, // Scored from 1 to 10
    required: true,
  },
  {
    input_id: 'OREBRO_02',
    input_type,
    label: {
      en: 'How would you rate the pain that you have had during the past week? Circle one.',
      nl: '',
    },
    required: true,
  },
  {
    input_id: 'OREBRO_03',
    input_type,
    label: {
      en: 'I can do light work for an hour.',
      nl: '',
    },
    required: true,
  },
  {
    input_id: 'OREBRO_04',
    input_type,
    label: {
      en: 'I can sleep at night.',
      nl: '',
    },
    required: true,
  },
  {
    input_id: 'OREBRO_05',
    input_type,
    label: {
      en: 'How tense or anxious have you felt in the past week? Circle one.',
      nl: '',
    },
    required: true,
  },
  {
    input_id: 'OREBRO_06',
    input_type,
    label: {
      en: 'How much have you been bothered by feeling depressed in the past week? Circle one.',
      nl: '',
    },
    required: true,
  },
  {
    input_id: 'OREBRO_07',
    input_type,
    label: {
      en: 'In your view, how large is the risk that your current pain may become persistent?',
      nl: '',
    },
    required: true,
  },
  {
    input_id: 'OREBRO_08',
    input_type,
    label: {
      en: 'In your estimation, what are the chances you will be working your normal duties in 3 months',
      nl: '',
    },
    required: true,
  },
  {
    input_id: 'OREBRO_09',
    input_type,
    label: {
      en: 'An increase in pain is an indication that I should stop what I’m doing until the pain decreases.',
      nl: '',
    },
    required: true,
  },
  {
    input_id: 'OREBRO_10',
    input_type,
    label: {
      en: 'I should not do my normal work with my present pain.',
      nl: '',
    },
    required: true,
  },
]
