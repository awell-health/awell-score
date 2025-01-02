import { type DefaultSubscaleType } from '../../../src/types/calculations.types'
import { NumberInputType } from '../../../src/types/calculations/inputs/calculation-inputs.types'

export const type: NumberInputType = {
  type: 'number',
  allowed_answers: [
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
  ],
}

export const SPADI_SUBSCALES: Array<DefaultSubscaleType> = [
  {
    id: 'PAIN',
    input_ids_in_subscale: [
      { input_id: 'Q01', input_type },
      { input_id: 'Q02', input_type },
      { input_id: 'Q03', input_type },
      { input_id: 'Q04', input_type },
      { input_id: 'Q05', input_type },
    ],
  },
  {
    id: 'DISABILITY',
    input_ids_in_subscale: [
      { input_id: 'Q06', input_type },
      { input_id: 'Q07', input_type },
      { input_id: 'Q08', input_type },
      { input_id: 'Q09', input_type },
      { input_id: 'Q10', input_type },
      { input_id: 'Q11', input_type },
      { input_id: 'Q12', input_type },
      { input_id: 'Q13', input_type },
    ],
  },
]
