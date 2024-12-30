import type { InputType } from '../../../src/types/calculations.types'

export const FND_INPUTS: Array<InputType> = [
  {
    input_id: 'FAGERSTROM_Q01',
    input_label: {
      en: 'How soon after you wake up do you smoke your first cigarette?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Within 5 minutes' },
          value: 3,
        },
        {
          label: { en: '6 to 30 minutes' },
          value: 2,
        },
        {
          label: {
            en: '31 to 60 minutes',
          },
          value: 1,
        },
        {
          label: { en: 'After 60 minutes' },
          value: 0,
        },
      ],
    },
  },
  {
    input_id: 'FAGERSTROM_Q02',
    input_label: {
      en: 'Do you find it difficult to refrain from smoking in places where it is forbidden (e.g., in church, at the library, in the cinema)?',
    },
    input_type: {
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
    input_id: 'FAGERSTROM_Q03',
    input_label: {
      en: 'Which cigarette would you hate most to give up?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'The first one in the morning' },
          value: 1,
        },
        {
          label: { en: 'Any other' },
          value: 0,
        },
      ],
    },
  },
  {
    input_id: 'FAGERSTROM_Q04',
    input_label: {
      en: 'How many cigarettes per day do you smoke?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: '10 or less' },
          value: 0,
        },
        {
          label: { en: '11 to 20' },
          value: 1,
        },
        {
          label: { en: '21 to 30' },
          value: 2,
        },
        {
          label: { en: '31 or more' },
          value: 3,
        },
      ],
    },
  },
  {
    input_id: 'FAGERSTROM_Q05',
    input_label: {
      en: 'Do you smoke more frequently during the first hours after waking than during the rest of the day?',
    },
    input_type: {
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
    input_id: 'FAGERSTROM_Q06',
    input_label: {
      en: 'Do you smoke when you are so ill that you are in bed most of the day?',
    },
    input_type: {
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
