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
import { ZARIT_12_OUTPUT, ZARRIT_INPUTS } from './definition'

const calculate_zarit_12_score = (
  calculation_input: Array<InputType>
): WIPCalculationResultType => {
  if (do_all_required_inputs_have_a_valid_value(calculation_input))
    return [
      {
        id: 'ZARIT_12',
        score: R.sum(get_valid_values(calculation_input)),
      },
    ]

  return [
    {
      id: 'ZARIT_12',
      score: MISSING_MESSAGE,
    },
  ]
}

export const specific_steps_ZARIT_12_calc = [
  calculate_zarit_12_score,
  add_raw_values_to_inputs(ZARRIT_INPUTS),
]

export const zarit_12: CalculationType = create_calculation({
  calculation_name:
    'Zarit Caregiver Burden Interview - Short Form (ZBI-12 / ZARIT-12)',

  readme_location: __dirname,
  calculation_steps: specific_steps_ZARIT_12_calc,
  calculation_definition: {
    input_definition: ZARRIT_INPUTS,
    output_definition: ZARIT_12_OUTPUT,
  },
})
