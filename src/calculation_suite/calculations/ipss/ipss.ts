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
import { IPSS_INPUTS, IPSS_OUTPUT } from './definition'

const calculate_ipss_score = (
  calculation_input: Array<InputType>
): WIPCalculationResultType => {
  if (do_all_required_inputs_have_a_valid_value(calculation_input))
    return [
      {
        id: 'IPSS',
        score: R.sum(get_valid_values(calculation_input)),
      },
    ]

  return [
    {
      id: 'IPSS',
      score: MISSING_MESSAGE,
    },
  ]
}

export const specific_steps_ipss_calc = [
  calculate_ipss_score,
  add_raw_values_to_inputs(IPSS_INPUTS),
]

export const ipss: CalculationType = create_calculation({
  calculation_name: `International Prostate Symptom Score (IPSS)`,
  readme_location: __dirname,
  calculation_steps: specific_steps_ipss_calc,
  calculation_definition: {
    input_definition: IPSS_INPUTS,
    output_definition: IPSS_OUTPUT,
  },
})
