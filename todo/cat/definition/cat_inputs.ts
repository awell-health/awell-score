import type { InputType } from '../../../src/types/calculations.types'

export const CAT_INPUTS: Array<InputType> = [
  {
    input_id: '1_COUGH',
    label: { en: 'Cough' },
    type: {
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
    label: { en: 'Phlegm' },
    type: {
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
    label: { en: 'Chest tightness' },
    type: {
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
    label: { en: 'Breathlessness' },
    type: {
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
    label: { en: 'Activities' },
    type: {
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
    label: {
      en: 'Confidence',
    },
    type: {
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
    label: { en: 'Sleep' },
    type: {
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
    label: { en: 'Energy' },
    type: {
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
