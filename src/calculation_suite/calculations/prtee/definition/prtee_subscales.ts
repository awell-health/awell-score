import { type DefaultSubscaleType } from '../../../../types/calculations.types'

const ALLOWED_ANSWERS = [
  { value: 0 },
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
  { value: 5 },
  { value: 6 },
  { value: 7 },
  { value: 8 },
  { value: 9 },
  { value: 10 },
]

//@ts-expect-error to do
const add_allowed_answers = input => ({
  ...input,
  input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
})

export const PRTEE_SUBSCALES: Array<DefaultSubscaleType> = [
  {
    id: 'PAIN',
    input_ids_in_subscale: [
      { input_id: 'PAIN_Q01' },
      { input_id: 'PAIN_Q02' },
      { input_id: 'PAIN_Q03' },
      { input_id: 'PAIN_Q04' },
      { input_id: 'PAIN_Q05' },
    ].map(add_allowed_answers),
  },
  {
    id: 'FUNCTION',
    input_ids_in_subscale: [
      { input_id: 'FUNCTION_Q01' },
      { input_id: 'FUNCTION_Q02' },
      {
        input_id: 'FUNCTION_Q03',
      },
      { input_id: 'FUNCTION_Q04' },
      { input_id: 'FUNCTION_Q05' },
      { input_id: 'FUNCTION_Q06' },
      { input_id: 'FUNCTION_Q07' },
      { input_id: 'FUNCTION_Q08' },
      { input_id: 'FUNCTION_Q09' },
      { input_id: 'FUNCTION_Q10' },
    ].map(add_allowed_answers),
  },
]
