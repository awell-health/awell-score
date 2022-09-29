import type { InputType } from '../../../../types/calculations.types'

export const CAT_INPUTS: Array<InputType> = [
  {
    input_id: '1_COUGH',
    input_label: { en: 'Cough' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'I never cough' },
          value: 0,
        },
        {
          label: { en: '' },
          value: 1,
        },
        {
          label: { en: '' },
          value: 2,
        },
        {
          label: { en: '' },
          value: 3,
        },
        {
          label: { en: '' },
          value: 4,
        },
        {
          label: { en: 'I cough all the time' },
          value: 5,
        },
      ],
    },
  },
  {
    input_id: '2_PHLEGM',
    input_label: { en: 'Phlegm' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'I have no phlegm in my chest at all' },
          value: 0,
        },
        {
          label: { en: '' },
          value: 1,
        },
        {
          label: { en: '' },
          value: 2,
        },
        {
          label: { en: '' },
          value: 3,
        },
        {
          label: { en: '' },
          value: 4,
        },
        {
          label: { en: 'My chest is completely full of pleghm' },
          value: 5,
        },
      ],
    },
  },
  {
    input_id: '3_CHEST_TIGHTNESS',
    input_label: { en: 'Chest tightness' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'My chest does not feel tight at all' },
          value: 0,
        },
        {
          label: { en: '' },
          value: 1,
        },
        {
          label: { en: '' },
          value: 2,
        },
        {
          label: { en: '' },
          value: 3,
        },
        {
          label: { en: '' },
          value: 4,
        },
        {
          label: { en: 'My chest feels very tight' },
          value: 5,
        },
      ],
    },
  },
  {
    input_id: '4_BREATHLESSNESS',
    input_label: { en: 'Breathlessness' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: {
            en: 'When I walk up a hill or one flight of stairs I am not breathless',
          },
          value: 0,
        },
        {
          label: { en: '' },
          value: 1,
        },
        {
          label: { en: '' },
          value: 2,
        },
        {
          label: { en: '' },
          value: 3,
        },
        {
          label: { en: '' },
          value: 4,
        },
        {
          label: {
            en: 'When I walk up a hill or one flight of stairs I am very breathless',
          },
          value: 5,
        },
      ],
    },
  },
  {
    input_id: '5_ACTIVITIES',
    input_label: { en: 'Activities' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'I am not limited doing any activities at home' },
          value: 0,
        },
        {
          label: { en: '' },
          value: 1,
        },
        {
          label: { en: '' },
          value: 2,
        },
        {
          label: { en: '' },
          value: 3,
        },
        {
          label: { en: '' },
          value: 4,
        },
        {
          label: { en: 'I am very limited doing any activities at home' },
          value: 5,
        },
      ],
    },
  },
  {
    input_id: '6_CONFIDENCE',
    input_label: {
      en: 'Confidence',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: {
            en: 'I am confident leaving my home despite my lung condition',
          },
          value: 0,
        },
        {
          label: { en: '' },
          value: 1,
        },
        {
          label: { en: '' },
          value: 2,
        },
        {
          label: { en: '' },
          value: 3,
        },
        {
          label: { en: '' },
          value: 4,
        },
        {
          label: {
            en: 'I am not at all confident leaving my home because of my lung condition',
          },
          value: 5,
        },
      ],
    },
  },
  {
    input_id: '7_SLEEP',
    input_label: { en: 'Sleep' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'I sleep soundly' },
          value: 0,
        },
        {
          label: { en: '' },
          value: 1,
        },
        {
          label: { en: '' },
          value: 2,
        },
        {
          label: { en: '' },
          value: 3,
        },
        {
          label: { en: '' },
          value: 4,
        },
        {
          label: { en: 'I don’t sleep soundly because of my lung condition' },
          value: 5,
        },
      ],
    },
  },
  {
    input_id: '8_ENERGY',
    input_label: { en: 'Energy' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'I have lots of energy' },
          value: 0,
        },
        {
          label: { en: '' },
          value: 1,
        },
        {
          label: { en: '' },
          value: 2,
        },
        {
          label: { en: '' },
          value: 3,
        },
        {
          label: { en: '' },
          value: 4,
        },
        {
          label: { en: 'I have no energy at all' },
          value: 5,
        },
      ],
    },
  },
]
