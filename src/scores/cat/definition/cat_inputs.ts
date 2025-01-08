import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../types'

export const CAT_INPUTS = {
  '1_COUGH': {
    label: { en: 'Cough' },
    type: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
    ]),
    uiOptions: {
      options: [
        {
          label: { en: 'I never cough' },
          value: 0,
        },
        {
          label: { en: 'I cough all the time' },
          value: 5,
        },
      ],
    },
  },
  '2_PHLEGM': {
    label: { en: 'Phlegm' },
    type: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
    ]),
    uiOptions: {
      options: [
        {
          label: { en: 'I have no phlegm in my chest at all' },
          value: 0,
        },
        {
          label: { en: 'My chest is completely full of pleghm' },
          value: 5,
        },
      ],
    },
  },
  '3_CHEST_TIGHTNESS': {
    label: { en: 'Chest tightness' },
    type: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
    ]),
    uiOptions: {
      options: [
        {
          label: { en: 'My chest does not feel tight at all' },
          value: 0,
        },
        {
          label: { en: 'My chest feels very tight' },
          value: 5,
        },
      ],
    },
  },
  '4_BREATHLESSNESS': {
    label: { en: 'Breathlessness' },
    type: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
    ]),
    uiOptions: {
      options: [
        {
          label: {
            en: 'When I walk up a hill or one flight of stairs I am not breathless',
          },
          value: 0,
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
  '5_ACTIVITIES': {
    label: { en: 'Activities' },
    type: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
    ]),
    uiOptions: {
      options: [
        {
          label: { en: 'I am not limited doing any activities at home' },
          value: 0,
        },
        {
          label: { en: 'I am very limited doing any activities at home' },
          value: 5,
        },
      ],
    },
  },
  '6_CONFIDENCE': {
    label: {
      en: 'Confidence',
    },
    type: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
    ]),
    uiOptions: {
      options: [
        {
          label: {
            en: 'I am confident leaving my home despite my lung condition',
          },
          value: 0,
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
  '7_SLEEP': {
    label: { en: 'Sleep' },
    type: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
    ]),
    uiOptions: {
      options: [
        {
          label: { en: 'I sleep soundly' },
          value: 0,
        },
        {
          label: { en: 'I don’t sleep soundly because of my lung condition' },
          value: 5,
        },
      ],
    },
  },
  '8_ENERGY': {
    label: { en: 'Energy' },
    type: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
    ]),
    uiOptions: {
      options: [
        {
          label: { en: 'I have lots of energy' },
          value: 0,
        },
        {
          label: { en: 'I have no energy at all' },
          value: 5,
        },
      ],
    },
  },
} satisfies ScoreInputSchemaType
