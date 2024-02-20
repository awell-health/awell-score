// @flow
import type {
  CalculationType,
  InputType,
  WIPCalculationResultType
} from '../../../types/calculations.types'
import { add_raw_values_to_inputs } from '../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../helper_functions/create_calculation'
import { BLCS_INPUTS, BLCS_OUTPUT } from './definition'
import { calculate_total_score } from './helpers'

const calculate_scores = (
  inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const TOTAL_SCORE = calculate_total_score(inputs_with_answers)

  return [
    {
      id: 'BLCS_TOTAL_SCORE',
      score: TOTAL_SCORE
    }
  ]
}

const blcs_calc = [calculate_scores, add_raw_values_to_inputs(BLCS_INPUTS)]

export const blcs: CalculationType = create_calculation({
  calculation_name: 'Bladder Control Scale (BLCS)',
  readme_location: __dirname,
  calculation_steps: blcs_calc,
  calculation_definition: {
    input_definition: BLCS_INPUTS,
    output_definition: BLCS_OUTPUT
  }
})
