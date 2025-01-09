import { z } from 'zod'
import { EnumNumberInputType, ScoreInputSchemaType } from '../../../types'

export const type = {
  type: z
    .union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
    ])
    .optional(),
  uiOptions: {
    options: [
      { value: 0 },
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 5 },
    ],
  },
} satisfies EnumNumberInputType

export const OSWESTRY_INPUTS = {
  '1_pain': {
    label: {
      en: 'Pain intensity',
      nl: '',
    },
    ...type,
  },
  '2_personal_care': {
    label: {
      en: 'Personal care (washing, dressing etc)',
      nl: '',
    },
    ...type,
  },
  '3_lifting': {
    label: {
      en: 'Lifting',
      nl: '',
    },
    ...type,
  },
  '4_running': {
    label: {
      en: 'Walking',
      nl: '',
    },
    ...type,
  },
  '5_sitting': {
    label: {
      en: 'Sitting',
      nl: '',
    },
    ...type,
  },
  '6_standing': {
    label: {
      en: 'Standing',
      nl: '',
    },
    ...type,
  },
  '7_sleep': {
    label: {
      en: 'Sleeping',
      nl: '',
    },
    ...type,
  },
  '8_sex_life': {
    label: {
      en: 'Sex life (if applicable)',
      nl: '',
    },
    ...type,
  },
  '9_social_life': {
    label: {
      en: 'Social life',
      nl: '',
    },
    ...type,
  },
  '10_travel': {
    label: {
      en: 'Travelling',
      nl: '',
    },
    ...type,
  },
} satisfies ScoreInputSchemaType
