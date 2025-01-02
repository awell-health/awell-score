import type { InputType } from '../../../src/types/calculations.types'
import { NumberInputType } from '../../../src/types/calculations/inputs/calculation-inputs.types'

export const type: NumberInputType = {
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

export const OSWESTRY_INPUTS: Array<InputType> = [
  {
    input_id: '1_pain',
    label: {
      en: 'Pain intensity',
      nl: '',
    },
    input_type,
    required: true,
  },
  {
    input_id: '2_personal_care',
    label: {
      en: 'Personal care (washing, dressing etc)',
      nl: '',
    },
    input_type,
    required: true,
  },
  {
    input_id: '3_lifting',
    label: {
      en: 'Lifting',
      nl: '',
    },
    input_type,
    required: true,
  },
  {
    input_id: '4_running',
    label: {
      en: 'Walking',
      nl: '',
    },
    input_type,
    required: true,
  },
  {
    input_id: '5_sitting',
    label: {
      en: 'Sitting',
      nl: '',
    },
    input_type,
    required: true,
  },
  {
    input_id: '6_standing',
    label: {
      en: 'Standing',
      nl: '',
    },
    input_type,
    required: true,
  },
  {
    input_id: '7_sleep',
    label: {
      en: 'Sleeping',
      nl: '',
    },
    input_type,
    required: true,
  },
  {
    input_id: '8_sex_life',
    label: {
      en: 'Sex life (if applicable)',
      nl: '',
    },
    input_type,
    required: true,
  },
  {
    input_id: '9_social_life',
    label: {
      en: 'Social life',
      nl: '',
    },
    input_type,
    required: true,
  },
  {
    input_id: '10_travel',
    label: {
      en: 'Travelling',
      nl: '',
    },
    input_type,
    required: true,
  },
]
