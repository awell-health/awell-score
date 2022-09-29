import { type DefaultSubscaleType } from '../../../../types/calculations.types'

/**
 * Problem part
 */
const ALLOWED_ANSWERS_NORMAL = [
  { value: 0, label: { en: 'Not true' } },
  { value: 1, label: { en: 'Somewhat true' } },
  { value: 2, label: { en: 'Certainly true' } },
]

const ALLOWED_ANSWERS_INVERTED = [
  { value: 0, label: { en: 'Certainly true' } },
  { value: 1, label: { en: 'Somewhat true' } },
  { value: 2, label: { en: 'Not true' } },
]

/**
 * Impact part
 */
export const NOT_AT_ALL = 999

const ONLY_A_LITTLE = 0
const A_MEDIUM_AMOUNT = 1
const A_GREAT_DEAL = 2

const ALLOWED_ANSWERS_IMPACT = [
  { value: NOT_AT_ALL, label: { en: 'Not at all' } },
  { value: ONLY_A_LITTLE, label: { en: 'Only a little' } },
  { value: A_MEDIUM_AMOUNT, label: { en: 'A medium amount' } },
  { value: A_GREAT_DEAL, label: { en: 'A great deal' } },
]

//@ts-expect-error to do
const add_allowed_answers_impact_part = input => ({
  ...input,
  input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS_IMPACT },
})

export const SDQ_SUBSCALES: DefaultSubscaleType[] = [
  {
    id: 'EMOTIONAL_PROBLEMS',
    input_ids_in_subscale: [
      {
        input_id: 'EMOTIONAL_PROBLEMS_Q01',
        input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS_NORMAL },
      },
      {
        input_id: 'EMOTIONAL_PROBLEMS_Q02',
        input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS_NORMAL },
      },
      {
        input_id: 'EMOTIONAL_PROBLEMS_Q03',
        input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS_NORMAL },
      },
      {
        input_id: 'EMOTIONAL_PROBLEMS_Q04',
        input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS_NORMAL },
      },
      {
        input_id: 'EMOTIONAL_PROBLEMS_Q05',
        input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS_NORMAL },
      },
    ],
  },
  {
    id: 'CONDUCT_PROBLEMS',
    input_ids_in_subscale: [
      {
        input_id: 'CONDUCT_PROBLEMS_Q01',
        input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS_NORMAL },
      },
      {
        input_id: 'CONDUCT_PROBLEMS_Q02',
        input_type: {
          type: 'number',
          allowed_answers: ALLOWED_ANSWERS_INVERTED,
        },
      },
      {
        input_id: 'CONDUCT_PROBLEMS_Q03',
        input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS_NORMAL },
      },
      {
        input_id: 'CONDUCT_PROBLEMS_Q04',
        input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS_NORMAL },
      },
      {
        input_id: 'CONDUCT_PROBLEMS_Q05',
        input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS_NORMAL },
      },
    ],
  },
  {
    id: 'HYPERACTIVITY',
    input_ids_in_subscale: [
      {
        input_id: 'HYPERACTIVITY_Q01',
        input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS_NORMAL },
      },
      {
        input_id: 'HYPERACTIVITY_Q02',
        input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS_NORMAL },
      },
      {
        input_id: 'HYPERACTIVITY_Q03',
        input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS_NORMAL },
      },
      {
        input_id: 'HYPERACTIVITY_Q04',
        input_type: {
          type: 'number',
          allowed_answers: ALLOWED_ANSWERS_INVERTED,
        },
      },
      {
        input_id: 'HYPERACTIVITY_Q05',
        input_type: {
          type: 'number',
          allowed_answers: ALLOWED_ANSWERS_INVERTED,
        },
      },
    ],
  },
  {
    id: 'PEER_PROBLEMS',
    input_ids_in_subscale: [
      {
        input_id: 'PEER_PROBLEMS_Q01',
        input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS_NORMAL },
      },
      {
        input_id: 'PEER_PROBLEMS_Q02',
        input_type: {
          type: 'number',
          allowed_answers: ALLOWED_ANSWERS_INVERTED,
        },
      },
      {
        input_id: 'PEER_PROBLEMS_Q03',
        input_type: {
          type: 'number',
          allowed_answers: ALLOWED_ANSWERS_INVERTED,
        },
      },
      {
        input_id: 'PEER_PROBLEMS_Q04',
        input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS_NORMAL },
      },
      {
        input_id: 'PEER_PROBLEMS_Q05',
        input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS_NORMAL },
      },
    ],
  },
  {
    id: 'PROSOCIAL',
    input_ids_in_subscale: [
      {
        input_id: 'PROSOCIAL_Q01',
        input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS_NORMAL },
      },
      {
        input_id: 'PROSOCIAL_Q02',
        input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS_NORMAL },
      },
      {
        input_id: 'PROSOCIAL_Q03',
        input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS_NORMAL },
      },
      {
        input_id: 'PROSOCIAL_Q04',
        input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS_NORMAL },
      },
      {
        input_id: 'PROSOCIAL_Q05',
        input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS_NORMAL },
      },
    ],
  },
  {
    id: 'IMPACT_PARENT_REPORTED',
    input_ids_in_subscale: [
      {
        input_id: 'IMPACT_PARENT_Q01',
      },
      {
        input_id: 'IMPACT_PARENT_Q02',
      },
      {
        input_id: 'IMPACT_PARENT_Q03',
      },
      {
        input_id: 'IMPACT_PARENT_Q04',
      },
      {
        input_id: 'IMPACT_PARENT_Q05',
      },
    ].map(add_allowed_answers_impact_part),
  },
  {
    id: 'IMPACT_TEACHER_REPORTED',
    input_ids_in_subscale: [
      {
        input_id: 'IMPACT_TEACHER_Q01',
      },
      {
        input_id: 'IMPACT_TEACHER_Q02',
      },
      {
        input_id: 'IMPACT_TEACHER_Q03',
      },
    ].map(add_allowed_answers_impact_part),
  },
  {
    id: 'IMPACT_SELF_REPORTED',
    input_ids_in_subscale: [
      {
        input_id: 'IMPACT_SELF_REPORT_Q01',
      },
      {
        input_id: 'IMPACT_SELF_REPORT_Q02',
      },
      {
        input_id: 'IMPACT_SELF_REPORT_Q03',
      },
      {
        input_id: 'IMPACT_SELF_REPORT_Q04',
      },
      {
        input_id: 'IMPACT_SELF_REPORT_Q05',
      },
    ].map(add_allowed_answers_impact_part),
  },
]
