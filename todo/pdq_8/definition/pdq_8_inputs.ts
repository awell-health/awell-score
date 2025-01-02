import type { InputType } from '../../../src/types/calculations.types'
import { NumberInputType } from '../../../src/types/calculations/inputs/calculation-inputs.types'

export const type: NumberInputType = {
  type: 'number',
  allowed_answers: [
    { value: 0 },
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
  ],
}

export const PDQ_8_INPUTS: Array<InputType> = [
  {
    input_id: 'PDQ_8_MOBILITY',
    input_type,
    required: true,
  },
  {
    input_id: 'PDQ_8_ADL',
    input_type,
    required: true,
  },
  {
    input_id: 'PDQ_8_EMOTIONAL_WELLBEING',
    input_type,
    required: true,
  },
  {
    input_id: 'PDQ_8_STIGMA',
    input_type,
    required: true,
  },
  {
    input_id: 'PDQ_8_SOCIAL_SUPPORT',
    input_type,
    required: true,
  },
  {
    input_id: 'PDQ_8_COGNITIONS',
    input_type,
    required: true,
  },
  {
    input_id: 'PDQ_8_COMMUNICATIONS',
    input_type,
    required: true,
  },
  {
    input_id: 'PDQ_8_BODILY_DISCOMFORT',
    input_type,
    required: true,
  },
]
