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
import { KOOS_PS_INPUTS, KOOS_PS_OUTPUT } from './definition'
import { koos_conversion_table } from './koos_ps_conversion_table'

export const KOOS_PS_CALCULATION_ID = 'KOOS_PS'

const calculate_koos_ps_score = (
  calculation_input: Array<InputType>
): WIPCalculationResultType => {
  if (do_all_required_inputs_have_a_valid_value(calculation_input))
    return [
      {
        id: KOOS_PS_CALCULATION_ID,
        score: R.compose(
          summed => koos_conversion_table[summed.toString()],
          R.sum
        )(get_valid_values(calculation_input)),
      },
    ]

  return [
    {
      id: KOOS_PS_CALCULATION_ID,
      score: MISSING_MESSAGE,
    },
  ]
}

export const specific_steps_koos_ps_calc = [
  calculate_koos_ps_score,
  add_raw_values_to_inputs(KOOS_PS_INPUTS),
]

export const koos_ps: CalculationType = create_calculation({
  calculation_name: `Knee Injury and Osteoarthritis Outcome Score - Short form (KOOS PS)`,
  readme_location: __dirname,
  calculation_steps: specific_steps_koos_ps_calc,
  calculation_definition: {
    input_definition: KOOS_PS_INPUTS,
    output_definition: KOOS_PS_OUTPUT,
  },
})
