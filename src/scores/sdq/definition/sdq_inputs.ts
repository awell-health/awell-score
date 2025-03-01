import { z } from 'zod'
import {
  type ScoreInputSchemaType,
  type EnumNumberInputType,
} from '../../../types'

/**
 * Problem part
 */
const TYPE_ALLOWED_ANSWERS_NORMAL = {
  type: z.union([z.literal(0), z.literal(1), z.literal(2)]).optional(),
  uiOptions: {
    options: [
      { value: 0, label: { en: 'Not true' } },
      { value: 1, label: { en: 'Somewhat true' } },
      { value: 2, label: { en: 'Certainly true' } },
    ],
  },
} satisfies EnumNumberInputType

const TYPE_ALLOWED_ANSWERS_INVERTED = {
  type: z.union([z.literal(0), z.literal(1), z.literal(2)]).optional(),
  uiOptions: {
    options: [
      { value: 0, label: { en: 'Certainly true' } },
      { value: 1, label: { en: 'Somewhat true' } },
      { value: 2, label: { en: 'Not true' } },
    ],
  },
} satisfies EnumNumberInputType

/**
 * Impact part
 */
export const NOT_AT_ALL = 999

const ONLY_A_LITTLE = 0
const A_MEDIUM_AMOUNT = 1
const A_GREAT_DEAL = 2

const ALLOWED_ANSWERS_IMPACT = {
  type: z
    .union([
      z.literal(NOT_AT_ALL),
      z.literal(ONLY_A_LITTLE),
      z.literal(A_MEDIUM_AMOUNT),
      z.literal(A_GREAT_DEAL),
    ])
    .optional(),
  uiOptions: {
    options: [
      { value: NOT_AT_ALL, label: { en: 'Not at all' } },
      { value: ONLY_A_LITTLE, label: { en: 'Only a little' } },
      { value: A_MEDIUM_AMOUNT, label: { en: 'A medium amount' } },
      { value: A_GREAT_DEAL, label: { en: 'A great deal' } },
    ],
  },
} satisfies EnumNumberInputType

export const SDQ_INPUTS = {
  EMOTIONAL_PROBLEMS_Q01: {
    ...TYPE_ALLOWED_ANSWERS_NORMAL,
  },
  EMOTIONAL_PROBLEMS_Q02: {
    ...TYPE_ALLOWED_ANSWERS_NORMAL,
  },
  EMOTIONAL_PROBLEMS_Q03: {
    ...TYPE_ALLOWED_ANSWERS_NORMAL,
  },
  EMOTIONAL_PROBLEMS_Q04: {
    ...TYPE_ALLOWED_ANSWERS_NORMAL,
  },
  EMOTIONAL_PROBLEMS_Q05: {
    ...TYPE_ALLOWED_ANSWERS_NORMAL,
  },
  CONDUCT_PROBLEMS_Q01: {
    ...TYPE_ALLOWED_ANSWERS_NORMAL,
  },
  CONDUCT_PROBLEMS_Q02: {
    ...TYPE_ALLOWED_ANSWERS_INVERTED,
  },
  CONDUCT_PROBLEMS_Q03: {
    ...TYPE_ALLOWED_ANSWERS_NORMAL,
  },
  CONDUCT_PROBLEMS_Q04: {
    ...TYPE_ALLOWED_ANSWERS_NORMAL,
  },
  CONDUCT_PROBLEMS_Q05: {
    ...TYPE_ALLOWED_ANSWERS_NORMAL,
  },
  HYPERACTIVITY_Q01: {
    ...TYPE_ALLOWED_ANSWERS_NORMAL,
  },
  HYPERACTIVITY_Q02: {
    ...TYPE_ALLOWED_ANSWERS_NORMAL,
  },
  HYPERACTIVITY_Q03: {
    ...TYPE_ALLOWED_ANSWERS_NORMAL,
  },
  HYPERACTIVITY_Q04: {
    ...TYPE_ALLOWED_ANSWERS_INVERTED,
  },
  HYPERACTIVITY_Q05: {
    ...TYPE_ALLOWED_ANSWERS_INVERTED,
  },
  PEER_PROBLEMS_Q01: {
    ...TYPE_ALLOWED_ANSWERS_NORMAL,
  },
  PEER_PROBLEMS_Q02: {
    ...TYPE_ALLOWED_ANSWERS_INVERTED,
  },
  PEER_PROBLEMS_Q03: {
    ...TYPE_ALLOWED_ANSWERS_INVERTED,
  },
  PEER_PROBLEMS_Q04: {
    ...TYPE_ALLOWED_ANSWERS_NORMAL,
  },
  PEER_PROBLEMS_Q05: {
    ...TYPE_ALLOWED_ANSWERS_NORMAL,
  },
  PROSOCIAL_Q01: {
    ...TYPE_ALLOWED_ANSWERS_NORMAL,
  },
  PROSOCIAL_Q02: {
    ...TYPE_ALLOWED_ANSWERS_NORMAL,
  },
  PROSOCIAL_Q03: {
    ...TYPE_ALLOWED_ANSWERS_NORMAL,
  },
  PROSOCIAL_Q04: {
    ...TYPE_ALLOWED_ANSWERS_NORMAL,
  },
  PROSOCIAL_Q05: {
    ...TYPE_ALLOWED_ANSWERS_NORMAL,
  },
  IMPACT_PARENT_Q01: {
    ...ALLOWED_ANSWERS_IMPACT,
  },
  IMPACT_PARENT_Q02: {
    ...ALLOWED_ANSWERS_IMPACT,
  },
  IMPACT_PARENT_Q03: {
    ...ALLOWED_ANSWERS_IMPACT,
  },
  IMPACT_PARENT_Q04: {
    ...ALLOWED_ANSWERS_IMPACT,
  },
  IMPACT_PARENT_Q05: {
    ...ALLOWED_ANSWERS_IMPACT,
  },
  IMPACT_TEACHER_Q01: {
    ...ALLOWED_ANSWERS_IMPACT,
  },
  IMPACT_TEACHER_Q02: {
    ...ALLOWED_ANSWERS_IMPACT,
  },
  IMPACT_TEACHER_Q03: {
    ...ALLOWED_ANSWERS_IMPACT,
  },
  IMPACT_SELF_REPORT_Q01: {
    ...ALLOWED_ANSWERS_IMPACT,
  },
  IMPACT_SELF_REPORT_Q02: {
    ...ALLOWED_ANSWERS_IMPACT,
  },
  IMPACT_SELF_REPORT_Q03: {
    ...ALLOWED_ANSWERS_IMPACT,
  },
  IMPACT_SELF_REPORT_Q04: {
    ...ALLOWED_ANSWERS_IMPACT,
  },
  IMPACT_SELF_REPORT_Q05: {
    ...ALLOWED_ANSWERS_IMPACT,
  },
} satisfies ScoreInputSchemaType
