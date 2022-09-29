import type { InputType } from '../../../../types/calculations.types'
import { NumberInputType } from '../../../../types/calculations/inputs/calculation-inputs.types'

export const input_type: NumberInputType = {
  type: 'number',
  allowed_answers: [
    { value: 0 },
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
  ],
}

export const OKS_INPUTS: Array<InputType> = [
  {
    input_id: '1_usual_knee_pain',
    input_type,
    required: true,
  },
  {
    input_id: '2_washing_and_trouble_washing',
    input_type,
    required: true,
  },
  {
    input_id: '3_car_problem',
    input_type,
    required: true,
  },
  {
    input_id: '4_time_before_pain',
    input_type,
    required: true,
  },
  {
    input_id: '5_table_pain',
    input_type,
    required: true,
  },
  {
    input_id: '6_have_you_been_limping_when_walking',
    input_type,
    required: true,
  },
  {
    input_id: '7_kneel_down_and_get_up',
    input_type,
    required: true,
  },
  {
    input_id: '8_trouble_with_night_pain',
    input_type,
    required: true,
  },
  {
    input_id: '9_usual_pain_work',
    input_type,
    required: true,
  },
  {
    input_id: '10_knee_sudden_failure',
    input_type,
    required: true,
  },
  {
    input_id: '11_household_shopping',
    input_type,
    required: true,
  },
  {
    input_id: '12_flight_of_stairs',
    input_type,
    required: true,
  },
]
