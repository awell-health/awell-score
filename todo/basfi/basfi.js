// @flow
import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType
} from '../../../types/calculations.types'
import { rawInputValueLens } from '../../helper_functions/calculation_variants/api/input/lenses'
import { add_raw_values_to_inputs } from '../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../shared_functions'
import { BASFI_INPUTS, BASFI_OUTPUT } from './definition'

const calculate_basdai = (
  calculation_input: Array<InputType>
): WIPCalculationResultType => {
  const valid_inputs = R.compose(
    R.filter(is_numeric),
    R.map((input) => R.view(rawInputValueLens, input))
  )(calculation_input)

  if (valid_inputs.length !== calculation_input.length) {
    return [
      {
        id: 'BASFI_SCORE',
        score: MISSING_MESSAGE
      }
    ]
  }

  const DIVISOR = 10

  return [
    {
      id: 'BASFI_SCORE',
      score: R.sum(valid_inputs) / DIVISOR
    }
  ]
}

export const specific_steps_basfi_calc = [
  calculate_basdai,
  add_raw_values_to_inputs(BASFI_INPUTS)
]

export const basfi: CalculationType = create_calculation({
  calculation_name: `Bath Ankylosing Spondylitis Functional Index (BASFI)`,
  readme_location: __dirname,
  calculation_steps: specific_steps_basfi_calc,
  calculation_definition: {
    input_definition: BASFI_INPUTS,
    output_definition: BASFI_OUTPUT
  }
})
