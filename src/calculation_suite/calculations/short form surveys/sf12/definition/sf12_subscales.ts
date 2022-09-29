import { type DefaultSubscaleType } from '../../../../../types/calculations.types'
import { NumberInputType } from '../../../../../types/calculations/inputs/calculation-inputs.types'

const INPUT_TYPES: { [key in string]: NumberInputType } = {
  serie_1: {
    type: 'number',
    allowed_answers: [
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 5 },
    ],
  },
  serie_2: {
    type: 'number',
    allowed_answers: [{ value: 1 }, { value: 2 }, { value: 3 }],
  },
}

export const SF12_SUBSCALES: Array<DefaultSubscaleType> = [
  {
    id: 'GENERAL_HEALTH',
    input_ids_in_subscale: [
      { input_id: 'SF12_Q01', input_type: INPUT_TYPES.serie_1 },
    ],
  },
  {
    id: 'PHYSICAL_FUNCTIONING',
    input_ids_in_subscale: [
      { input_id: 'SF12_Q02', input_type: INPUT_TYPES.serie_2 },
      { input_id: 'SF12_Q03', input_type: INPUT_TYPES.serie_2 },
    ],
  },
  {
    id: 'ROLE_PHYSICAL',
    input_ids_in_subscale: [
      { input_id: 'SF12_Q04', input_type: INPUT_TYPES.serie_1 },
      { input_id: 'SF12_Q05', input_type: INPUT_TYPES.serie_1 },
    ],
  },
  {
    id: 'ROLE_EMOTIONAL',
    input_ids_in_subscale: [
      { input_id: 'SF12_Q06', input_type: INPUT_TYPES.serie_1 },
      { input_id: 'SF12_Q07', input_type: INPUT_TYPES.serie_1 },
    ],
  },
  {
    id: 'BODILY_PAIN',
    input_ids_in_subscale: [
      { input_id: 'SF12_Q08', input_type: INPUT_TYPES.serie_1 },
    ],
  },
  {
    id: 'MENTAL_HEALTH',
    input_ids_in_subscale: [
      { input_id: 'SF12_Q09', input_type: INPUT_TYPES.serie_1 },
      { input_id: 'SF12_Q10', input_type: INPUT_TYPES.serie_1 },
    ],
  },
  {
    id: 'VITALITY',
    input_ids_in_subscale: [
      { input_id: 'SF12_Q11', input_type: INPUT_TYPES.serie_1 },
    ],
  },
  {
    id: 'SOCIAL_FUNCTIONING',
    input_ids_in_subscale: [
      { input_id: 'SF12_Q12', input_type: INPUT_TYPES.serie_1 },
    ],
  },
]
