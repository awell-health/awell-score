import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../types'

export const FND_INPUTS = {
  FAGERSTROM_Q01: {
    label: {
      en: 'How soon after you wake up do you smoke your first cigarette?',
    },
    type: z.union([z.literal(3), z.literal(2), z.literal(1), z.literal(0)]),
    uiOptions: {
      options: [
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
  FAGERSTROM_Q02: {
    label: {
      en: 'Do you find it difficult to refrain from smoking in places where it is forbidden (e.g., in church, at the library, in the cinema)?',
    },
    type: z.union([z.literal(1), z.literal(0)]),
    uiOptions: {
      options: [
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
  FAGERSTROM_Q03: {
    label: {
      en: 'Which cigarette would you hate most to give up?',
    },
    type: z.union([z.literal(1), z.literal(0)]),
    uiOptions: {
      options: [
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
  FAGERSTROM_Q04: {
    label: {
      en: 'How many cigarettes per day do you smoke?',
    },
    type: z.union([z.literal(3), z.literal(2), z.literal(1), z.literal(0)]),
    uiOptions: {
      options: [
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
  FAGERSTROM_Q05: {
    label: {
      en: 'Do you smoke more frequently during the first hours after waking than during the rest of the day?',
    },
    type: z.union([z.literal(1), z.literal(0)]),
    uiOptions: {
      options: [
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
  FAGERSTROM_Q06: {
    label: {
      en: 'Do you smoke when you are so ill that you are in bed most of the day?',
    },
    type: z.union([z.literal(1), z.literal(0)]),
    uiOptions: {
      options: [
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
} satisfies ScoreInputSchemaType
