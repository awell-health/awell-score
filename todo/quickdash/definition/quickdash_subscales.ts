import { type DefaultSubscaleType } from '../../../src/types/calculations.types'

const ALLOWED_ANSWERS = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
  { value: 5 },
]

//@ts-expect-error to do
const add_allowed_answers = input => ({
  ...input,
  type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
})

export const QUICKDASH_SUBSCALES: Array<DefaultSubscaleType> = [
  {
    id: 'QUICKDASH_SCORE',
    input_ids_in_subscale: [
      { input_id: 'QUICKDASH_Q01' },
      { input_id: 'QUICKDASH_Q02' },
      { input_id: 'QUICKDASH_Q03' },
      { input_id: 'QUICKDASH_Q04' },
      { input_id: 'QUICKDASH_Q05' },
      { input_id: 'QUICKDASH_Q06' },
      { input_id: 'QUICKDASH_Q07' },
      { input_id: 'QUICKDASH_Q08' },
      { input_id: 'QUICKDASH_Q09' },
      { input_id: 'QUICKDASH_Q10' },
      { input_id: 'QUICKDASH_Q11' },
    ].map(add_allowed_answers),
    min_answers_needed_to_calculate_score: 10,
  },
  {
    id: 'WORK_MODULE',
    input_ids_in_subscale: [
      { input_id: 'QUICKDASH_WORK_MODULE_Q01' },
      { input_id: 'QUICKDASH_WORK_MODULE_Q02' },
      {
        input_id: 'QUICKDASH_WORK_MODULE_Q03',
      },
      { input_id: 'QUICKDASH_WORK_MODULE_Q04' },
    ].map(add_allowed_answers),
    min_answers_needed_to_calculate_score: 4,
  },
  {
    id: 'SPORTS_PERFORMING_ARTS_MODULE',
    input_ids_in_subscale: [
      { input_id: 'QUICKDASH_SPORTS_PERFORMING_ARTS_MODULE_Q01' },
      { input_id: 'QUICKDASH_SPORTS_PERFORMING_ARTS_MODULE_Q02' },
      {
        input_id: 'QUICKDASH_SPORTS_PERFORMING_ARTS_MODULE_Q03',
      },
      { input_id: 'QUICKDASH_SPORTS_PERFORMING_ARTS_MODULE_Q04' },
    ].map(add_allowed_answers),
    min_answers_needed_to_calculate_score: 4,
  },
]
