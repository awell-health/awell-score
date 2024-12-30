import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../src/types/calculations.types'
import { add_raw_values_to_inputs } from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import { is_numeric } from '../../src/calculation_suite/calculations/shared_functions'
import { PHQ4_INPUTS, PHQ4_INTERPRATION_TABLE, PHQ4_OUTPUT } from './definition'

const calculate_score = (
  inputs_with_answers: Array<InputType>,
): WIPCalculationResultType => {
  const all_valid_inputs = R.filter(
    input => is_numeric(input.raw_input_value),
    inputs_with_answers,
  )

  const inputs_for_anxiety = all_valid_inputs.filter(input =>
    ['PHQ4_Q01', 'PHQ4_Q02'].includes(input.input_id),
  )

  const inputs_for_depression = all_valid_inputs.filter(input =>
    ['PHQ4_Q03', 'PHQ4_Q04'].includes(input.input_id),
  )

  const anxiety_score = R.sum(
    inputs_for_anxiety.map(input => Number(input.raw_input_value)),
  )

  const depression_score = R.sum(
    inputs_for_depression.map(input => Number(input.raw_input_value)),
  )

  const total_score = R.sum(
    all_valid_inputs.map(input => Number(input.raw_input_value)),
  )

  return [
    {
      id: 'PHQ4_ANXIETY_SCORE',
      score: anxiety_score,
    },
    {
      id: 'PHQ4_ANXIETY_POSITIVE_SCREENING',
      score: anxiety_score >= 3,
    },
    {
      id: 'PHQ4_DEPRESSION_SCORE',
      score: depression_score,
    },
    {
      id: 'PHQ4_DEPRESSION_POSITIVE_SCREENING',
      score: depression_score >= 3,
    },
    {
      id: 'PHQ4_TOTAL_SCORE',
      score: total_score,
    },
    {
      id: 'PHQ4_TOTAL_SCORE_INTERPRETATION',
      score: PHQ4_INTERPRATION_TABLE[total_score.toString()],
    },
  ]
}

export const specific_steps_phq_4_calc = [
  calculate_score,
  add_raw_values_to_inputs(PHQ4_INPUTS),
]

export const phq_4: CalculationType = create_calculation({
  calculation_name: 'Patient Health Questionnaire‐4 (PHQ‐4)',
  readme_location: __dirname,
  calculation_steps: specific_steps_phq_4_calc,
  calculation_definition: {
    input_definition: PHQ4_INPUTS,
    output_definition: PHQ4_OUTPUT,
  },
})
