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

export const OSWESTRY_INPUTS: Array<InputType> = [
  {
    input_id: '1_pain',
    input_label: {
      en: 'Pain intensity',
      nl: '',
    },
    input_type,
    required: true,
  },
  {
    input_id: '2_personal_care',
    input_label: {
      en: 'Personal care (washing, dressing etc)',
      nl: '',
    },
    input_type,
    required: true,
  },
  {
    input_id: '3_lifting',
    input_label: {
      en: 'Lifting',
      nl: '',
    },
    input_type,
    required: true,
  },
  {
    input_id: '4_running',
    input_label: {
      en: 'Walking',
      nl: '',
    },
    input_type,
    required: true,
  },
  {
    input_id: '5_sitting',
    input_label: {
      en: 'Sitting',
      nl: '',
    },
    input_type,
    required: true,
  },
  {
    input_id: '6_standing',
    input_label: {
      en: 'Standing',
      nl: '',
    },
    input_type,
    required: true,
  },
  {
    input_id: '7_sleep',
    input_label: {
      en: 'Sleeping',
      nl: '',
    },
    input_type,
    required: true,
  },
  {
    input_id: '8_sex_life',
    input_label: {
      en: 'Sex life (if applicable)',
      nl: '',
    },
    input_type,
    required: true,
  },
  {
    input_id: '9_social_life',
    input_label: {
      en: 'Social life',
      nl: '',
    },
    input_type,
    required: true,
  },
  {
    input_id: '10_travel',
    input_label: {
      en: 'Travelling',
      nl: '',
    },
    input_type,
    required: true,
  },
]
