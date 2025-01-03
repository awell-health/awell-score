import { z } from 'zod'
import { EnumNumberInputType, ScoreInputSchemaType } from '../../../types'

const NO_ANSWER = 0
const YES_ANSWER = 1

const yes_no_type = {
  type: z.union([z.literal(NO_ANSWER), z.literal(YES_ANSWER)]),
  uiOptions: {
    options: [
      { value: NO_ANSWER, label: { en: 'No' } },
      { value: YES_ANSWER, label: { en: 'Yes' } },
    ],
  },
} satisfies EnumNumberInputType

export const STOP_BANG_INPUTS = {
  STOP_BANG_Q01: {
    label: {
      en: 'Do you snore loudly?',
    },
    ...yes_no_type,
  },
  STOP_BANG_Q02: {
    label: {
      en: 'Do you often feel tired, fatigued, or sleepy during daytime?',
    },
    ...yes_no_type,
  },
  STOP_BANG_Q03: {
    label: {
      en: 'Has anyone observed you stop breathing during your sleep?',
    },
    ...yes_no_type,
  },
  STOP_BANG_Q04: {
    label: {
      en: 'Do you have or are you being treated for high blood pressure?',
    },
    ...yes_no_type,
  },
  STOP_BANG_Q05: {
    label: {
      en: `What is the patient's BMI?`,
    },
    type: z.number().min(0).max(100),
  },
  STOP_BANG_Q06: {
    label: {
      en: "What is the patient's age?",
    },
    type: z.number().min(0).max(120),
  },
  STOP_BANG_Q07: {
    label: {
      en: `What is the patient's neck circumference?`,
    },
    type: z.number().min(0).max(100),
  },
  STOP_BANG_Q08: {
    label: {
      en: "What is the patient's gender?",
    },
    type: z.union([z.literal(1), z.literal(2)]),
    uiOptions: {
      options: [
        {
          label: { en: 'Male' },
          value: 1,
        },
        {
          label: { en: 'Female' },
          value: 2,
        },
      ],
    },
  },
} satisfies ScoreInputSchemaType
