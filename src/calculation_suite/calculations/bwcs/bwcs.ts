import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { add_raw_values_to_inputs } from '../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../helper_functions/create_calculation'
import { BWCS_INPUTS, BWCS_OUTPUT } from './definition'
import { calculate_total_score } from './helpers'

const calculate_scores = (
  inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const TOTAL_SCORE = calculate_total_score(inputs_with_answers)

  return [
    {
      id: 'BWCS_TOTAL_SCORE',
      score: TOTAL_SCORE,
    },
  ]
}

const bwcs_calc = [calculate_scores, add_raw_values_to_inputs(BWCS_INPUTS)]

export const bwcs: CalculationType = create_calculation({
  calculation_name: 'Bowel Control Scale (BWCS)',
  readme_location: __dirname,
  calculation_steps: bwcs_calc,
  calculation_definition: {
    input_definition: BWCS_INPUTS,
    output_definition: BWCS_OUTPUT,
  },
})
