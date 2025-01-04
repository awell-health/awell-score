import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../types'

export const CHA2DS2_VASC_SCORE_INPUTS = {
  '1_AGE': {
    label: { en: 'Age' },
    type: z.union([z.literal(0), z.literal(1), z.literal(2)]),
    uiOptions: {
      options: [
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
  '2_SEX': {
    label: { en: 'Sex' },
    type: z.union([z.literal(0), z.literal(1)]),
    uiOptions: {
      options: [
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
  '3_CHF_HISTORY': {
    label: { en: 'CHF history' },
    type: z.union([z.literal(0), z.literal(1)]),
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
  '4_HYPERTENSION_HISTORY': {
    label: { en: 'Hypertension history' },
    type: z.union([z.literal(0), z.literal(1)]),
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
  '5_STROKE_TIA_THROMBOEMBOLISM_HISTORY': {
    label: { en: 'Stroke/TIA/thromboembolism history' },
    type: z.union([z.literal(0), z.literal(2)]),
    uiOptions: {
      options: [
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
  '6_VASCULAR_DISEASE_HISTORY': {
    label: {
      en: 'Vascular disease history (prior MI, peripheral artery disease, or aortic plaque)',
    },
    type: z.union([z.literal(0), z.literal(1)]),
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
  '7_DIABETES_HISTORY': {
    label: { en: 'Diabetes history' },
    type: z.union([z.literal(0), z.literal(1)]),
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
