import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { add_raw_values_to_inputs } from '../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { ASRS_INPUTS, ASRS_OUTPUT } from './definition'
import { calculate_part_scores, calculate_subscale_scores } from './helpers'

const calculate_scores = (
  inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const PART_A_SCORE = calculate_part_scores(inputs_with_answers, 'PART_A')
  const PART_B_SCORE = calculate_part_scores(inputs_with_answers, 'PART_B')
  const TOTAL_SCORE =
    PART_A_SCORE === MISSING_MESSAGE || PART_B_SCORE === MISSING_MESSAGE
      ? MISSING_MESSAGE
      : Number(PART_A_SCORE) + Number(PART_B_SCORE)
  const ASRS_INATTENTIVE_SUBSCALE_SCORE = calculate_subscale_scores(
    inputs_with_answers,
    'INATTENTIVE_SUBSCALE'
  )
  const ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR_SCORE =
    calculate_subscale_scores(
      inputs_with_answers,
      'HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR'
    )
  const ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL_SCORE =
    calculate_subscale_scores(
      inputs_with_answers,
      'HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL'
    )

  return [
    {
      id: 'ASRS_PART_A_SCORE',
      score: PART_A_SCORE,
    },
    {
      id: 'ASRS_PART_B_SCORE',
      score: PART_B_SCORE,
    },
    {
      id: 'ASRS_TOTAL_SCORE',
      score: TOTAL_SCORE,
    },
    {
      id: 'ASRS_INATTENTIVE_SUBSCALE_SCORE',
      score: ASRS_INATTENTIVE_SUBSCALE_SCORE,
    },
    {
      id: 'ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR_SCORE',
      score: ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR_SCORE,
    },
    {
      id: 'ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL_SCORE',
      score: ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL_SCORE,
    },
  ]
}

export const specific_steps_asrs_calc = [
  calculate_scores,
  add_raw_values_to_inputs(ASRS_INPUTS),
]

export const asrs: CalculationType = create_calculation({
  calculation_name: 'Adult ADHD Self-Report Scale (ASRS-v1.1)',
  readme_location: __dirname,
  calculation_steps: specific_steps_asrs_calc,
  calculation_definition: {
    input_definition: ASRS_INPUTS,
    output_definition: ASRS_OUTPUT,
  },
})
