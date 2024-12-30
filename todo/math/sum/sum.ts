import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../src/types/calculations.types'
import { rawInputValueLens } from '../../../lib/calculation_variants/api/input/lenses'
import { add_raw_values_to_inputs } from '../../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { is_numeric } from '../../../src/calculation_suite/calculations/shared_functions'
import { SUM_INPUTS, SUM_OUTPUT } from './definition'

const calculate_sum = (
  calculation_input: Array<InputType>,
): WIPCalculationResultType => {
  const valid_inputs = R.compose(
    R.filter(is_numeric),
    R.map(input => R.view(rawInputValueLens, input)),
  )(calculation_input)

  if (valid_inputs.length === 0) {
    return [
      {
        id: 'SUM',
        score: MISSING_MESSAGE,
      },
    ]
  }

  return [
    {
      id: 'SUM',
      score: R.sum(valid_inputs),
    },
  ]
}

export const specific_steps_sum_calc = [
  calculate_sum,
  add_raw_values_to_inputs(SUM_INPUTS),
]

export const math_sum: CalculationType = create_calculation({
  calculation_name: `Sum`,
  readme_location: __dirname,
  calculation_steps: specific_steps_sum_calc,
  calculation_definition: {
    input_definition: SUM_INPUTS,
    output_definition: SUM_OUTPUT,
  },
})
