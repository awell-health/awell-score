import { type DefaultSubscaleType } from '../../../../../types/calculations.types'
import { NumberInputType } from '../../../../../types/calculations/inputs/calculation-inputs.types'

const INPUT_TYPES: Record<string, NumberInputType> = {
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
  serie_3: { type: 'number', allowed_answers: [{ value: 1 }, { value: 2 }] },
  serie_4: {
    type: 'number',
    allowed_answers: [
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 5 },
      { value: 6 },
    ],
  },
}

export const SF36_SUBSCALES: Array<DefaultSubscaleType> = [
  {
    id: 'PHYSICAL_FUNCTIONING',
    input_ids_in_subscale: [
      { input_id: 'SF36_Q03', input_type: INPUT_TYPES.serie_2 },
      { input_id: 'SF36_Q04', input_type: INPUT_TYPES.serie_2 },
      { input_id: 'SF36_Q05', input_type: INPUT_TYPES.serie_2 },
      { input_id: 'SF36_Q06', input_type: INPUT_TYPES.serie_2 },
      { input_id: 'SF36_Q07', input_type: INPUT_TYPES.serie_2 },
      { input_id: 'SF36_Q08', input_type: INPUT_TYPES.serie_2 },
      { input_id: 'SF36_Q09', input_type: INPUT_TYPES.serie_2 },
      { input_id: 'SF36_Q10', input_type: INPUT_TYPES.serie_2 },
      { input_id: 'SF36_Q11', input_type: INPUT_TYPES.serie_2 },
      { input_id: 'SF36_Q12', input_type: INPUT_TYPES.serie_2 },
    ],
  },
  {
    id: 'ROLE_LIMITATIONS_PHYSICAL_HEALTH',
    input_ids_in_subscale: [
      { input_id: 'SF36_Q13', input_type: INPUT_TYPES.serie_3 },
      { input_id: 'SF36_Q14', input_type: INPUT_TYPES.serie_3 },
      { input_id: 'SF36_Q15', input_type: INPUT_TYPES.serie_3 },
      { input_id: 'SF36_Q16', input_type: INPUT_TYPES.serie_3 },
    ],
  },
  {
    id: 'ROLE_LIMITATIONS_EMOTIONAL_PROBLEMS',
    input_ids_in_subscale: [
      { input_id: 'SF36_Q17', input_type: INPUT_TYPES.serie_3 },
      { input_id: 'SF36_Q18', input_type: INPUT_TYPES.serie_3 },
      { input_id: 'SF36_Q19', input_type: INPUT_TYPES.serie_3 },
    ],
  },
  {
    id: 'ENERGY_FATIGUE',
    input_ids_in_subscale: [
      { input_id: 'SF36_Q23', input_type: INPUT_TYPES.serie_4 },
      { input_id: 'SF36_Q27', input_type: INPUT_TYPES.serie_4 },
      { input_id: 'SF36_Q29', input_type: INPUT_TYPES.serie_4 },
      { input_id: 'SF36_Q31', input_type: INPUT_TYPES.serie_4 },
    ],
  },
  {
    id: 'EMOTIONAL_WELLBEING',
    input_ids_in_subscale: [
      { input_id: 'SF36_Q24', input_type: INPUT_TYPES.serie_4 },
      { input_id: 'SF36_Q25', input_type: INPUT_TYPES.serie_4 },
      { input_id: 'SF36_Q26', input_type: INPUT_TYPES.serie_4 },
      { input_id: 'SF36_Q28', input_type: INPUT_TYPES.serie_4 },
      { input_id: 'SF36_Q30', input_type: INPUT_TYPES.serie_4 },
    ],
  },
  {
    id: 'SOCIAL_FUNCTIONING',
    input_ids_in_subscale: [
      { input_id: 'SF36_Q20', input_type: INPUT_TYPES.serie_1 },
      { input_id: 'SF36_Q32', input_type: INPUT_TYPES.serie_1 },
    ],
  },
  {
    id: 'PAIN',
    input_ids_in_subscale: [
      { input_id: 'SF36_Q21', input_type: INPUT_TYPES.serie_4 },
      { input_id: 'SF36_Q22', input_type: INPUT_TYPES.serie_1 },
    ],
  },
  {
    id: 'GENERAL_HEALTH',
    input_ids_in_subscale: [
      { input_id: 'SF36_Q01', input_type: INPUT_TYPES.serie_1 },
      { input_id: 'SF36_Q33', input_type: INPUT_TYPES.serie_1 },
      { input_id: 'SF36_Q34', input_type: INPUT_TYPES.serie_1 },
      { input_id: 'SF36_Q35', input_type: INPUT_TYPES.serie_1 },
      { input_id: 'SF36_Q36', input_type: INPUT_TYPES.serie_1 },
    ],
  },
]
