import { type DefaultSubscaleType } from '../../../../src/types/calculations.types'
import { NumberInputType } from '../../../../src/types/calculations/inputs/calculation-inputs.types'

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
      { input_id: 'SF36_Q03', type: INPUT_TYPES.serie_2 },
      { input_id: 'SF36_Q04', type: INPUT_TYPES.serie_2 },
      { input_id: 'SF36_Q05', type: INPUT_TYPES.serie_2 },
      { input_id: 'SF36_Q06', type: INPUT_TYPES.serie_2 },
      { input_id: 'SF36_Q07', type: INPUT_TYPES.serie_2 },
      { input_id: 'SF36_Q08', type: INPUT_TYPES.serie_2 },
      { input_id: 'SF36_Q09', type: INPUT_TYPES.serie_2 },
      { input_id: 'SF36_Q10', type: INPUT_TYPES.serie_2 },
      { input_id: 'SF36_Q11', type: INPUT_TYPES.serie_2 },
      { input_id: 'SF36_Q12', type: INPUT_TYPES.serie_2 },
    ],
  },
  {
    id: 'ROLE_LIMITATIONS_PHYSICAL_HEALTH',
    input_ids_in_subscale: [
      { input_id: 'SF36_Q13', type: INPUT_TYPES.serie_3 },
      { input_id: 'SF36_Q14', type: INPUT_TYPES.serie_3 },
      { input_id: 'SF36_Q15', type: INPUT_TYPES.serie_3 },
      { input_id: 'SF36_Q16', type: INPUT_TYPES.serie_3 },
    ],
  },
  {
    id: 'ROLE_LIMITATIONS_EMOTIONAL_PROBLEMS',
    input_ids_in_subscale: [
      { input_id: 'SF36_Q17', type: INPUT_TYPES.serie_3 },
      { input_id: 'SF36_Q18', type: INPUT_TYPES.serie_3 },
      { input_id: 'SF36_Q19', type: INPUT_TYPES.serie_3 },
    ],
  },
  {
    id: 'ENERGY_FATIGUE',
    input_ids_in_subscale: [
      { input_id: 'SF36_Q23', type: INPUT_TYPES.serie_4 },
      { input_id: 'SF36_Q27', type: INPUT_TYPES.serie_4 },
      { input_id: 'SF36_Q29', type: INPUT_TYPES.serie_4 },
      { input_id: 'SF36_Q31', type: INPUT_TYPES.serie_4 },
    ],
  },
  {
    id: 'EMOTIONAL_WELLBEING',
    input_ids_in_subscale: [
      { input_id: 'SF36_Q24', type: INPUT_TYPES.serie_4 },
      { input_id: 'SF36_Q25', type: INPUT_TYPES.serie_4 },
      { input_id: 'SF36_Q26', type: INPUT_TYPES.serie_4 },
      { input_id: 'SF36_Q28', type: INPUT_TYPES.serie_4 },
      { input_id: 'SF36_Q30', type: INPUT_TYPES.serie_4 },
    ],
  },
  {
    id: 'SOCIAL_FUNCTIONING',
    input_ids_in_subscale: [
      { input_id: 'SF36_Q20', type: INPUT_TYPES.serie_1 },
      { input_id: 'SF36_Q32', type: INPUT_TYPES.serie_1 },
    ],
  },
  {
    id: 'PAIN',
    input_ids_in_subscale: [
      { input_id: 'SF36_Q21', type: INPUT_TYPES.serie_4 },
      { input_id: 'SF36_Q22', type: INPUT_TYPES.serie_1 },
    ],
  },
  {
    id: 'GENERAL_HEALTH',
    input_ids_in_subscale: [
      { input_id: 'SF36_Q01', type: INPUT_TYPES.serie_1 },
      { input_id: 'SF36_Q33', type: INPUT_TYPES.serie_1 },
      { input_id: 'SF36_Q34', type: INPUT_TYPES.serie_1 },
      { input_id: 'SF36_Q35', type: INPUT_TYPES.serie_1 },
      { input_id: 'SF36_Q36', type: INPUT_TYPES.serie_1 },
    ],
  },
]
