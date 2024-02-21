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
import { SUBTRACT_INPUTS, SUBTRACT_OUTPUT } from './definition'

const calculate = (
  calculation_input: Array<InputType>
): WIPCalculationResultType => {
  const minuend = R.compose(
    weight => Number(weight),
    R.view(rawInputValueLens),
    R.find(input => R.view(inputIdLens, input) === 'MINUEND')
  )(calculation_input)

  const subtrahend = R.compose(
    height => Number(height),
    R.view(rawInputValueLens),
    R.find(input => R.view(inputIdLens, input) === 'SUBTRAHEND')
  )(calculation_input)

  if (isNaN(minuend) || isNaN(subtrahend)) {
    return [
      {
        id: 'DIFFERENCE',
        score: MISSING_MESSAGE,
      },
      {
        id: 'ABSOLUTE_DIFFERENCE',
        score: MISSING_MESSAGE,
      },
    ]
  }

  const difference = R.subtract(minuend, subtrahend)

  return [
    {
      id: 'DIFFERENCE',
      score: difference,
    },
    {
      id: 'ABSOLUTE_DIFFERENCE',
      score: Math.abs(difference),
    },
  ]
}

export const specific_steps_sum_calc = [
  calculate,
  add_raw_values_to_inputs(SUBTRACT_INPUTS),
]

export const math_subtract: CalculationType = create_calculation({
  calculation_name: `Subtract`,
  readme_location: __dirname,
  calculation_steps: specific_steps_sum_calc,
  calculation_definition: {
    input_definition: SUBTRACT_INPUTS,
    output_definition: SUBTRACT_OUTPUT,
  },
})
