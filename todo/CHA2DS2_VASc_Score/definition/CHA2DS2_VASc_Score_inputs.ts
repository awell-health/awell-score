import type { InputType } from '../../../src/types/calculations.types'

export const CHA2DS2_VASC_SCORE_INPUTS: Array<InputType> = [
  {
    input_id: '1_AGE',
    label: { en: 'Age' },
    type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: '<65' },
          value: 0,
        },
        {
          label: { en: '65-74' },
          value: 1,
        },
        {
          label: { en: '≥75' },
          value: 2,
        },
      ],
    },
  },
  {
    input_id: '2_SEX',
    label: { en: 'Sex' },
    type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Male' },
          value: 0,
        },
        {
          label: { en: 'Female' },
          value: 1,
        },
      ],
    },
  },
  {
    input_id: '3_CHF_HISTORY',
    label: { en: 'CHF history' },
    type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'No' },
          value: 0,
        },
        {
          label: { en: 'Yes' },
          value: 1,
        },
      ],
    },
  },
  {
    input_id: '4_HYPERTENSION_HISTORY',
    label: { en: 'Hypertension history' },
    type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'No' },
          value: 0,
        },
        {
          label: { en: 'Yes' },
          value: 1,
        },
      ],
    },
  },
  {
    input_id: '5_STROKE_TIA_THROMBOEMBOLISM_HISTORY',
    label: { en: 'Stroke/TIA/thromboembolism history' },
    type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'No' },
          value: 0,
        },
        {
          label: { en: 'Yes' },
          value: 2,
        },
      ],
    },
  },
  {
    input_id: '6_VASCULAR_DISEASE_HISTORY',
    label: {
      en: 'Vascular disease history (prior MI, peripheral artery disease, or aortic plaque)',
    },
    type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'No' },
          value: 0,
        },
        {
          label: { en: 'Yes' },
          value: 1,
        },
      ],
    },
  },
  {
    input_id: '7_DIABETES_HISTORY',
    label: { en: 'Diabetes history' },
    type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'No' },
          value: 0,
        },
        {
          label: { en: 'Yes' },
          value: 1,
        },
      ],
    },
  },
]
