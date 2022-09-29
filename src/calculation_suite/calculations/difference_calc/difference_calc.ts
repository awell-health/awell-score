import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { rawInputValueLens } from '../../helper_functions/calculation_variants/api/input/lenses'
import { add_raw_values_to_inputs } from '../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../shared_functions'
import { DIFFERENCE_INPUTS, DIFFERENCE_OUTPUT } from './definition'

const calculate_difference = (
  ghq_12_inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const valid_inputs = R.compose(
    R.filter(is_numeric),
    R.map(input => R.view(rawInputValueLens, input))
  )(ghq_12_inputs_with_answers)

  if (valid_inputs.length === 0)
    return [
      {
        id: 'ABSOLUTE_DIFFERENCE',
        score: MISSING_MESSAGE,
      },
      {
        id: 'PERCENTAGE_INCREASE',
        score: MISSING_MESSAGE,
      },
    ]

  const absolute_difference = valid_inputs[1] - valid_inputs[0]
  const increase =
    // You cannot devide by 0
    absolute_difference === 0
      ? 0
      : ((valid_inputs[1] - valid_inputs[0]) / valid_inputs[0]) * 100

  return [
    {
      id: 'ABSOLUTE_DIFFERENCE',
      score: absolute_difference,
    },
    {
      id: 'PERCENTAGE_INCREASE',
      score: increase,
    },
  ]
}

export const specific_steps_difference_calc = [
  calculate_difference,
  add_raw_values_to_inputs(DIFFERENCE_INPUTS),
]

export const difference_calc: CalculationType = create_calculation({
  calculation_name: `Difference Calculator`,
  readme_location: __dirname,
  calculation_steps: specific_steps_difference_calc,
  calculation_definition: {
    input_definition: DIFFERENCE_INPUTS,
    output_definition: DIFFERENCE_OUTPUT,
  },
})
