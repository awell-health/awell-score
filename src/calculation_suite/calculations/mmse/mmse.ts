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
import { MMSE_INPUTS, MMSE_OUTPUT } from './definition'

export const MMSE_CALCULATION_ID = 'MMSE'

const calculate_mmse_score = (
  calculation_input: Array<InputType>
): WIPCalculationResultType => {
  if (do_all_required_inputs_have_a_valid_value(calculation_input))
    return [
      {
        id: MMSE_CALCULATION_ID,
        score: R.sum(get_valid_values(calculation_input)),
      },
    ]

  return [
    {
      id: MMSE_CALCULATION_ID,
      score: MISSING_MESSAGE,
    },
  ]
}

/**
 * Calculate the MMSE score
 * See README.md for information about the calculation
 */
export const specific_steps_mmse_calc = [
  calculate_mmse_score,
  add_raw_values_to_inputs(MMSE_INPUTS),
]

export const mmse: CalculationType = create_calculation({
  calculation_name: `Mini-mental State Examiniation (MMSE)`,
  readme_location: __dirname,
  calculation_steps: specific_steps_mmse_calc,
  calculation_definition: {
    input_definition: MMSE_INPUTS,
    output_definition: MMSE_OUTPUT,
  },
})
