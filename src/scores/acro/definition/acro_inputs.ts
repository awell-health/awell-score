import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../types'

export const NEVER = 5
export const RARELY = 4
export const SOMETIMES = 3
export const MOST_OF_THE_TIME = 2
export const ALWAYS = 1

export const COMPLETELY_AGREE = 1
export const MODERATELY_AGREE = 2
export const NEITHER_AGREE_NOR_DISAGREE = 3
export const MODERATELY_DISAGREE = 4
export const COMPLETELY_DISAGREE = 5

const FrequencyInputSchema = z.union([
  z.literal(NEVER),
  z.literal(RARELY),
  z.literal(SOMETIMES),
  z.literal(MOST_OF_THE_TIME),
  z.literal(ALWAYS),
])

const AgreementInputSchema = z.union([
  z.literal(COMPLETELY_AGREE),
  z.literal(MODERATELY_AGREE),
  z.literal(NEITHER_AGREE_NOR_DISAGREE),
  z.literal(MODERATELY_DISAGREE),
  z.literal(COMPLETELY_DISAGREE),
])

const options_frequency = [
  {
    value: ALWAYS,
    label: { en: 'Always' },
  },
  {
    value: MOST_OF_THE_TIME,
    label: {
      en: 'Most of the time',
    },
  },
  {
    value: SOMETIMES,
    label: {
      en: 'Sometimes',
    },
  },
  {
    value: RARELY,
    label: {
      en: 'Rarely',
    },
  },
  {
    value: NEVER,
    label: {
      en: 'Never',
    },
  },
]

const options_agreement = [
  {
    value: COMPLETELY_AGREE,
    label: { en: 'Completely agree' },
  },
  {
    value: MODERATELY_AGREE,
    label: {
      en: 'Moderately agree',
    },
  },
  {
    value: NEITHER_AGREE_NOR_DISAGREE,
    label: {
      en: 'Neither agree nor disagree',
    },
  },
  {
    value: MODERATELY_DISAGREE,
    label: {
      en: 'Moderately disagree',
    },
  },
  {
    value: COMPLETELY_DISAGREE,
    label: {
      en: 'Completely disagree',
    },
  },
]

export const ACRO_INPUTS = {
  Q01: {
    type: AgreementInputSchema.optional(),
    label: {
      en: 'My legs are weak',
    },
    uiOptions: {
      options: options_agreement,
    },
  },
  Q02: {
    type: FrequencyInputSchema.optional(),
    label: {
      en: 'I feel ugly',
    },
    uiOptions: {
      options: options_frequency,
    },
  },
  Q03: {
    type: AgreementInputSchema.optional(),
    label: {
      en: 'I get depressed',
    },
    uiOptions: {
      options: options_agreement,
    },
  },
  Q04: {
    type: FrequencyInputSchema.optional(),
    label: {
      en: 'I look awful in photographs',
    },
    uiOptions: {
      options: options_frequency,
    },
  },
  Q05: {
    type: FrequencyInputSchema.optional(),
    label: {
      en: 'I avoid going out very much with friends because of my appearance',
    },
    uiOptions: {
      options: options_frequency,
    },
  },
  Q06: {
    type: FrequencyInputSchema.optional(),
    label: {
      en: 'I try to avoid socializing',
    },
    uiOptions: {
      options: options_frequency,
    },
  },
  Q07: {
    type: FrequencyInputSchema.optional(),
    label: {
      en: 'I look different in the mirror.',
    },
    uiOptions: {
      options: options_frequency,
    },
  },
  Q08: {
    type: FrequencyInputSchema.optional(),
    label: {
      en: 'I feel rejected by people because of my illness',
    },
    uiOptions: {
      options: options_frequency,
    },
  },
  Q09: {
    type: AgreementInputSchema.optional(),
    label: {
      en: 'I have problems carrying out my usual activities',
    },
    uiOptions: {
      options: options_agreement,
    },
  },
  Q10: {
    type: FrequencyInputSchema.optional(),
    label: {
      en: 'People stare at me because of my appearance',
    },
    uiOptions: {
      options: options_frequency,
    },
  },
  Q11: {
    type: FrequencyInputSchema.optional(),
    label: {
      en: 'Some part of my body (nose, feet, hands,...) are too big',
    },
    uiOptions: {
      options: options_frequency,
    },
  },
  Q12: {
    type: FrequencyInputSchema.optional(),
    label: {
      en: 'I have problems doing things with my hands, for example, sewing or handling tools',
    },
    uiOptions: {
      options: options_frequency,
    },
  },
  Q13: {
    type: AgreementInputSchema.optional(),
    label: {
      en: 'The illness affects my performance at work or in my usual tasks',
    },
    uiOptions: {
      options: options_agreement,
    },
  },
  Q14: {
    type: AgreementInputSchema.optional(),
    label: {
      en: 'My joints ache',
    },
    uiOptions: {
      options: options_agreement,
    },
  },
  Q15: {
    type: AgreementInputSchema.optional(),
    label: {
      en: 'I am usually tired',
    },
    uiOptions: {
      options: options_agreement,
    },
  },
  Q16: {
    type: FrequencyInputSchema.optional(),
    label: {
      en: 'I snore at night',
    },
    uiOptions: {
      options: options_frequency,
    },
  },
  Q17: {
    type: FrequencyInputSchema.optional(),
    label: {
      en: 'It is hard for me to articulate words due to the size of my tongue',
    },
    uiOptions: {
      options: options_frequency,
    },
  },
  Q18: {
    type: FrequencyInputSchema.optional(),
    label: {
      en: 'I have problems with sexual relationships',
    },
    uiOptions: {
      options: options_frequency,
    },
  },
  Q19: {
    type: AgreementInputSchema.optional(),
    label: {
      en: 'I feel like a sick person',
    },
    uiOptions: {
      options: options_agreement,
    },
  },
  Q20: {
    type: FrequencyInputSchema.optional(),
    label: {
      en: 'The physical changes produced by my illness govern my life',
    },
    uiOptions: {
      options: options_frequency,
    },
  },
  Q21: {
    type: FrequencyInputSchema.optional(),
    label: {
      en: 'I have little sexual appetite',
    },
    uiOptions: {
      options: options_frequency,
    },
  },
  Q22: {
    type: AgreementInputSchema.optional(),
    label: {
      en: 'I feel weak',
    },
    uiOptions: {
      options: options_agreement,
    },
  },
} satisfies ScoreInputSchemaType
