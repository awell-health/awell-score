import type { PcsScaleType } from '../../../../types/calculations/subscales/custom/pcs.types'

const ALLOWED_ANSWERS = [
  { value: 0 },
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
]

//@ts-expect-error to do
const add_allowed_answers = input => ({
  ...input,
  input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
})

export const PCS_SCALES: Array<PcsScaleType> = [
  {
    id: 'RUMINATION',
    input_ids_in_subscale: [
      { input_id: 'question_8' },
      { input_id: 'question_9' },
      { input_id: 'question_10' },
      { input_id: 'question_11' },
    ].map(add_allowed_answers),
    min_score: 0,
    median_score: 8,
    max_score: 16,
  },
  {
    id: 'MAGNIFICATION',
    input_ids_in_subscale: [
      { input_id: 'question_6' },
      { input_id: 'question_7' },
      { input_id: 'question_13' },
    ].map(add_allowed_answers),
    min_score: 0,
    median_score: 6,
    max_score: 12,
  },
  {
    id: 'HELPLESSNESS',
    input_ids_in_subscale: [
      { input_id: 'question_1' },
      { input_id: 'question_2' },
      { input_id: 'question_3' },
      { input_id: 'question_4' },
      { input_id: 'question_5' },
      { input_id: 'question_12' },
    ].map(add_allowed_answers),
    min_score: 0,
    median_score: 12,
    max_score: 24,
  },
]
