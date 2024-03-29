import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../../types/calculations.types'
import { rawInputValueLens } from '../../../helper_functions/calculation_variants/api/input/lenses'
import { add_raw_values_to_inputs } from '../../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { is_numeric } from '../../shared_functions'
import { MULTIPLY_INPUTS, MULTIPLY_OUTPUT } from './definition'

const calculate = (
  calculation_input: Array<InputType>
): WIPCalculationResultType => {
  const valid_inputs = R.compose(
    R.filter(is_numeric),
    R.map(input => R.view(rawInputValueLens, input))
  )(calculation_input)

  if (valid_inputs.length === 0) {
    return [
      {
        id: 'PRODUCT',
        score: MISSING_MESSAGE,
      },
    ]
  }

  return [
    {
      id: 'PRODUCT',
      score: valid_inputs.reduce((a, b) => a * b),
    },
  ]
}

export const specific_steps_calc = [
  calculate,
  add_raw_values_to_inputs(MULTIPLY_INPUTS),
]

export const math_multiply: CalculationType = create_calculation({
  calculation_name: `Multiply`,
  readme_location: __dirname,
  calculation_steps: specific_steps_calc,
  calculation_definition: {
    input_definition: MULTIPLY_INPUTS,
    output_definition: MULTIPLY_OUTPUT,
  },
})
