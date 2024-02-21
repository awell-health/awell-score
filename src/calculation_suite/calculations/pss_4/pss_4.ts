// @flow
import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType
} from '../../../types/calculations.types'
import { add_raw_values_to_inputs } from '../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../helper_functions/create_calculation'
import { is_numeric } from '../shared_functions'
import { PSS4_INPUTS, PSS4_OUTPUTS } from './definition'
import { standardize_answer_values } from './helpers'

const calculate_score = (
  inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const input_with_standardized_answers =
    standardize_answer_values(inputs_with_answers)

  const all_valid_inputs = R.filter(
    (input) => is_numeric(input.std_value),
    input_with_standardized_answers
  )

  const total_score = R.sum(
    all_valid_inputs.map((input) => Number(input.raw_input_value))
  )

  return [
    {
      id: 'PSS4_SCORE',
      score: total_score
    }
  ]
}

export const specific_steps_pss_4_calc = [
  calculate_score,
  add_raw_values_to_inputs(PSS4_INPUTS)
]

export const pss_4: CalculationType = create_calculation({
  calculation_name: 'Perceived Stress Scale 4 (PSS-4)',
  readme_location: __dirname,
  calculation_steps: specific_steps_pss_4_calc,
  calculation_definition: {
    input_definition: PSS4_INPUTS,
    output_definition: PSS4_OUTPUTS
  }
})
