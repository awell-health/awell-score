import { type DefaultSubscaleType } from '../../../../types/calculations.types'

const ALLOWED_ANSWERS = [
  { value: 0 },
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
  { value: 5 },
  { value: 6 },
]

//@ts-expect-error to do
const add_allowed_answers = input => ({
  ...input,
  input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
})

export const MPI_DOMAINS: DefaultSubscaleType[] = [
  {
    id: 'MPI_PSYCHOSOCIAL',
    input_ids_in_subscale: [
      { input_id: 'MPI_PART1_Q01' },
      { input_id: 'MPI_PART1_Q02' },
      { input_id: 'MPI_PART1_Q03' },
      { input_id: 'MPI_PART1_Q04' },
      { input_id: 'MPI_PART1_Q05' },
      { input_id: 'MPI_PART1_Q06' },
      { input_id: 'MPI_PART1_Q07' },
      { input_id: 'MPI_PART1_Q08' },
      { input_id: 'MPI_PART1_Q09' },
      { input_id: 'MPI_PART1_Q10' },
      { input_id: 'MPI_PART1_Q11' },
      { input_id: 'MPI_PART1_Q12' },
      { input_id: 'MPI_PART1_Q13' },
      { input_id: 'MPI_PART1_Q14' },
      { input_id: 'MPI_PART1_Q15' },
      { input_id: 'MPI_PART1_Q16' },
      { input_id: 'MPI_PART1_Q17' },
      { input_id: 'MPI_PART1_Q18' },
      { input_id: 'MPI_PART1_Q19' },
      { input_id: 'MPI_PART1_Q20' },
    ].map(add_allowed_answers),
  },
  {
    id: 'MPI_BEHAVIOUR',
    input_ids_in_subscale: [
      { input_id: 'MPI_PART2_Q01' },
      { input_id: 'MPI_PART2_Q02' },
      { input_id: 'MPI_PART2_Q03' },
      { input_id: 'MPI_PART2_Q04' },
      { input_id: 'MPI_PART2_Q05' },
      { input_id: 'MPI_PART2_Q06' },
      { input_id: 'MPI_PART2_Q07' },
      { input_id: 'MPI_PART2_Q08' },
      { input_id: 'MPI_PART2_Q09' },
      { input_id: 'MPI_PART2_Q10' },
      { input_id: 'MPI_PART2_Q11' },
      { input_id: 'MPI_PART2_Q12' },
      { input_id: 'MPI_PART2_Q13' },
      { input_id: 'MPI_PART2_Q14' },
    ].map(add_allowed_answers),
  },
  {
    id: 'MPI_ADL',
    input_ids_in_subscale: [
      { input_id: 'MPI_PART3_Q01' },
      { input_id: 'MPI_PART3_Q02' },
      { input_id: 'MPI_PART3_Q03' },
      { input_id: 'MPI_PART3_Q04' },
      { input_id: 'MPI_PART3_Q05' },
      { input_id: 'MPI_PART3_Q06' },
      { input_id: 'MPI_PART3_Q07' },
      { input_id: 'MPI_PART3_Q08' },
      { input_id: 'MPI_PART3_Q09' },
      { input_id: 'MPI_PART3_Q10' },
      { input_id: 'MPI_PART3_Q11' },
      { input_id: 'MPI_PART3_Q12' },
      { input_id: 'MPI_PART3_Q13' },
      { input_id: 'MPI_PART3_Q14' },
      { input_id: 'MPI_PART3_Q15' },
      { input_id: 'MPI_PART3_Q16' },
      { input_id: 'MPI_PART3_Q17' },
      { input_id: 'MPI_PART3_Q18' },
    ].map(add_allowed_answers),
  },
]
