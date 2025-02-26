import { z } from 'zod'
import { EnumNumberInputType, type ScoreInputSchemaType } from '../../../types'

const type = {
  type: z.union([
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
  ]),
  uiOptions: {
    options: [
      { label: { en: 'Strongly disagree' }, value: 1 },
      { label: { en: 'Disagree' }, value: 2 },
      { label: { en: 'Neutral' }, value: 3 },
      { label: { en: 'Agree' }, value: 4 },
      { label: { en: 'Strongly agree' }, value: 5 },
    ],
  },
} satisfies EnumNumberInputType

export const BPSES_INPUTS = {
  Q01: {
    label: {
      en: 'Even though I may not always manage it, I know what I need to do with my child.',
    },
    ...type,
  },
  Q02: {
    label: {
      en: "I am able to do the things that will improve my child's behaviour.",
    },
    ...type,
  },
  Q03: {
    label: {
      en: 'I can make an important difference to my child.',
    },
    ...type,
  },
  Q04: {
    label: {
      en: 'In most situations, I know what I should do to ensure my child behaves.',
    },
    ...type,
  },
  Q05: {
    label: {
      en: "The things I do make a difference to my child's behaviour.",
    },
    ...type,
  },
} satisfies ScoreInputSchemaType
