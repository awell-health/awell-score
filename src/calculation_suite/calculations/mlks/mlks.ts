import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { rawInputValueLens } from '../../helper_functions/calculation_variants/api/input/lenses'
import { add_raw_values_to_inputs } from '../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../shared_functions'
import { MLKS_INPUTS, MLKS_OUTPUT } from './definition'

export const calculate_total_score = (
  inputs_with_answers: Array<InputType>
): number | string => {
  const valid_item_scores = R.compose(
    R.filter(is_numeric),
    R.map(input => R.view(rawInputValueLens, input))
  )(inputs_with_answers)

  if (valid_item_scores.length !== inputs_with_answers.length) {
    return MISSING_MESSAGE
  }

  return R.sum(valid_item_scores)
}

const calculate_scores = (
  inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const TOTAL_SCORE = calculate_total_score(inputs_with_answers)
  return [
    {
      id: 'MLKS_TOTAL_SCORE',
      score: TOTAL_SCORE,
    },
  ]
}

const mlks_calc = [calculate_scores, add_raw_values_to_inputs(MLKS_INPUTS)]

export const mlks: CalculationType = create_calculation({
  calculation_name: 'Modified Lysolm Knee Score (MLKS)',
  readme_location: __dirname,
  calculation_steps: mlks_calc,
  calculation_definition: {
    input_definition: MLKS_INPUTS,
    output_definition: MLKS_OUTPUT,
  },
})
