import { isNaN } from 'lodash'
import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../../types/calculations.types'
import {
  inputIdLens,
  rawInputValueLens,
} from '../../../helper_functions/calculation_variants/api/input/lenses'
import { add_raw_values_to_inputs } from '../../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { DIVIDE_INPUTS, DIVIDE_OUTPUT } from './definition'

const calculate = (
  calculation_input: Array<InputType>
): WIPCalculationResultType => {
  const dividend = R.compose(
    weight => Number(weight),
    R.view(rawInputValueLens),
    R.find(input => R.view(inputIdLens, input) === 'DIVIDEND')
  )(calculation_input)

  const divisor = R.compose(
    height => Number(height),
    R.view(rawInputValueLens),
    R.find(input => R.view(inputIdLens, input) === 'DIVISOR')
  )(calculation_input)

  if (isNaN(dividend) || isNaN(divisor)) {
    return [
      {
        id: 'QUOTIENT',
        score: MISSING_MESSAGE,
      },
    ]
  }

  return [
    {
      id: 'QUOTIENT',
      score: R.divide(dividend, divisor),
    },
  ]
}

export const specific_steps_calc = [
  calculate,
  add_raw_values_to_inputs(DIVIDE_INPUTS),
]

export const math_divide: CalculationType = create_calculation({
  calculation_name: `Divide`,
  readme_location: __dirname,
  calculation_steps: specific_steps_calc,
  calculation_definition: {
    input_definition: DIVIDE_INPUTS,
    output_definition: DIVIDE_OUTPUT,
  },
})
