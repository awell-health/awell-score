import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import {
  add_raw_values_to_inputs,
  do_all_required_inputs_have_a_valid_value,
  get_valid_values,
} from '../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { PDQ_8_INPUTS, PDQ_8_OUTPUT } from './definition'

const calculate_pdq_8_score = (
  calculation_input: Array<InputType>
): WIPCalculationResultType => {
  if (do_all_required_inputs_have_a_valid_value(calculation_input)) {
    const MAX_SCORE = 32

    return [
      {
        id: 'PDQ_8',
        score: R.compose(
          score => Math.round(score),
          // eslint-disable-next-line no-magic-numbers
          R.multiply(100),
          sum => R.divide(sum, MAX_SCORE),
          R.sum
        )(get_valid_values(calculation_input)),
      },
    ]
  }

  return [
    {
      id: 'PDQ_8',
      score: MISSING_MESSAGE,
    },
  ]
}

/**
 * Calculate the PDQ-8 score
 * See README.md for information about the calculation
 */
export const specific_steps_pdq_8_calc = [
  calculate_pdq_8_score,
  add_raw_values_to_inputs(PDQ_8_INPUTS),
]

export const pdq_8: CalculationType = create_calculation({
  calculation_name: `Parkinson's Disease Questionnaire-8 (PDQ-8)`,
  readme_location: __dirname,
  calculation_steps: specific_steps_pdq_8_calc,
  calculation_definition: {
    input_definition: PDQ_8_INPUTS,
    output_definition: PDQ_8_OUTPUT,
  },
})
