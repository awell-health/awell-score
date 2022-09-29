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
import { QOL_STOMA_INPUTS, QOL_STOMA_OUTPUT } from './definition'

const calculate_qol_stoma_score = (
  calculation_input: Array<InputType>
): WIPCalculationResultType => {
  if (do_all_required_inputs_have_a_valid_value(calculation_input))
    return [
      {
        id: 'QOL_STOMA',
        score: R.sum(get_valid_values(calculation_input)),
      },
    ]

  return [
    {
      id: 'QOL_STOMA',
      score: MISSING_MESSAGE,
    },
  ]
}

/**
 * Calculate the QOL Stoma score
 * See README.md for information about the calculation
 */
export const specific_steps_qol_stoma_calc = [
  calculate_qol_stoma_score,
  add_raw_values_to_inputs(QOL_STOMA_INPUTS),
]

export const qol_stoma: CalculationType = create_calculation({
  calculation_name: 'QOL Stoma',
  readme_location: __dirname,
  calculation_steps: specific_steps_qol_stoma_calc,
  calculation_definition: {
    input_definition: QOL_STOMA_INPUTS,
    output_definition: QOL_STOMA_OUTPUT,
  },
})
