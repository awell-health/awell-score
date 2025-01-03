import type { InputType } from '../../../../src/types/calculations.types'

export const HRQOL_4_INPUTS: Array<InputType> = [
  {
    input_id: 'HRQOL_4_Q01',
    label: {
      en: 'Would you say that in general your health is',
    },
    type: {
      type: 'number',
      allowed_answers: [
        { value: 1, label: { en: 'Excellent' } },
        {
          value: 2,
          label: { en: 'Very good' },
        },
        { value: 3, label: { en: 'Good' } },
        { value: 4, label: { en: 'Fair' } },
        {
          value: 5,
          label: { en: 'Poor' },
        },
      ],
    },
  },
  {
    input_id: 'HRQOL_4_Q02',
    label: {
      en: 'Now thinking about your physical health, which includes physical illness and injury, for how many days during the past 30 days was your physical health not good?',
    },
    type: {
      type: 'number',
      range: {
        min: { value: 0 },
        max: { value: 30 },
      },
    },
  },
  {
    input_id: 'HRQOL_4_Q03',
    label: {
      en: 'Now thinking about your mental health, which includes stress, depression, and problems with emotions, for how many days during the past 30 days was your mental health not good?',
    },
    type: {
      type: 'number',
      range: {
        min: { value: 0 },
        max: { value: 30 },
      },
    },
  },
  {
    input_id: 'HRQOL_4_Q04',
    label: {
      en: 'During the past 30 days, for about how many days did poor physical or mental health keep you from doing your usual activities, such as self-care, work, or recreation?',
    },
    type: {
      type: 'number',
      range: {
        min: { value: 0 },
        max: { value: 30 },
      },
    },
  },
]
