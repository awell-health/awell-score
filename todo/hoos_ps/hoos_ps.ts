import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../src/types/calculations.types'
import {
  add_raw_values_to_inputs,
  do_all_required_inputs_have_a_valid_value,
  get_valid_values,
} from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { HOOS_PS_INPUTS, HOOS_PS_OUTPUT } from './definition'
import { hoos_conversion_table } from './hoos_ps_conversion_table'

export const HOOS_PS_CALCULATION_ID = 'HOOS_PS'

const calculate_hoos_ps_score = (
  calculation_input: Array<InputType>,
): WIPCalculationResultType => {
  if (do_all_required_inputs_have_a_valid_value(calculation_input))
    return [
      {
        id: HOOS_PS_CALCULATION_ID,
        score: R.compose(
          summed => hoos_conversion_table[summed.toString()],
          R.sum,
        )(get_valid_values(calculation_input)),
      },
    ]

  return [
    {
      id: HOOS_PS_CALCULATION_ID,
      score: MISSING_MESSAGE,
    },
  ]
}

export const specific_steps_hoos_ps_calc = [
  calculate_hoos_ps_score,
  add_raw_values_to_inputs(HOOS_PS_INPUTS),
]

export const hoos_ps: CalculationType = create_calculation({
  calculation_name: `Hip disability and Osteoarthritis Outcome Score-Physical function Short form (HOOS-PS)`,
  readme_location: __dirname,
  calculation_steps: specific_steps_hoos_ps_calc,
  calculation_definition: {
    input_definition: HOOS_PS_INPUTS,
    output_definition: HOOS_PS_OUTPUT,
  },
})
