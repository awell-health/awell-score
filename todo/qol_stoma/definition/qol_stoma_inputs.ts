import type { InputType } from '../../../src/types/calculations.types'
import { NumberInputType } from '../../../src/types/calculations/inputs/calculation-inputs.types'

const type: NumberInputType = {
  type: 'number',
  allowed_answers: [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }],
}

export const QOL_STOMA_INPUTS: Array<InputType> = [
  {
    input_id: 'QOL_STOMA_Q01',
    input_type,
    required: true,
  },
  {
    input_id: 'QOL_STOMA_Q02',
    input_type,
    required: true,
  },
  {
    input_id: 'QOL_STOMA_Q03',
    input_type,
    required: true,
  },
  {
    input_id: 'QOL_STOMA_Q04',
    input_type,
    required: true,
  },
  {
    input_id: 'QOL_STOMA_Q05',
    input_type,
    required: true,
  },
  {
    input_id: 'QOL_STOMA_Q06',
    input_type,
    required: true,
  },
  {
    input_id: 'QOL_STOMA_Q07',
    input_type,
    required: true,
    inverse: false,
  },
  {
    input_id: 'QOL_STOMA_Q08',
    input_type,
    required: true,
  },
  {
    input_id: 'QOL_STOMA_Q09',
    input_type,
    required: true,
  },
  {
    input_id: 'QOL_STOMA_Q10',
    input_type,
    required: true,
  },
  {
    input_id: 'QOL_STOMA_Q11',
    input_type,
    required: true,
  },
  {
    input_id: 'QOL_STOMA_Q12',
    input_type,
    required: true,
  },
  {
    input_id: 'QOL_STOMA_Q13',
    input_type,
    required: true,
  },
  {
    input_id: 'QOL_STOMA_Q14',
    input_type,
    required: true,
  },
  {
    input_id: 'QOL_STOMA_Q15',
    input_type,
    required: true,
  },
  {
    input_id: 'QOL_STOMA_Q16',
    input_type,
    required: true,
  },
  {
    input_id: 'QOL_STOMA_Q17',
    input_type,
    required: true,
  },
  {
    input_id: 'QOL_STOMA_Q18',
    input_type,
    required: true,
  },
  {
    input_id: 'QOL_STOMA_Q19',
    input_type,
    required: true,
  },
  {
    input_id: 'QOL_STOMA_Q20',
    input_type,
    required: true,
  },
]
