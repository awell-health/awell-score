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
} from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { POSAS_OBSERVER_INPUTS, POSAS_OBSERVER_OUTPUT } from './definition'

const calculate_posas_observer_score = (
  calculation_input: Array<InputType>
): WIPCalculationResultType => {
  if (do_all_required_inputs_have_a_valid_value(calculation_input))
    return [
      {
        id: 'POSAS_OBSERVER',
        score: R.sum(get_valid_values(calculation_input)),
      },
    ]

  return [
    {
      id: 'POSAS_OBSERVER',
      score: MISSING_MESSAGE,
    },
  ]
}

/**
 * Calculate the POSAS Observer score
 * See README.md for information about the calculation
 */
export const specific_steps_posas_observer_calc = [
  calculate_posas_observer_score,
  add_raw_values_to_inputs(POSAS_OBSERVER_INPUTS),
]

export const posas_observer: CalculationType = create_calculation({
  calculation_name: 'POSAS Observer',
  readme_location: __dirname,
  calculation_steps: specific_steps_posas_observer_calc,
  calculation_definition: {
    input_definition: POSAS_OBSERVER_INPUTS,
    output_definition: POSAS_OBSERVER_OUTPUT,
  },
})
