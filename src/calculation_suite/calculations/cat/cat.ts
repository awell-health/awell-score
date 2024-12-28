import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { rawInputValueLens } from '../../lib/calculation_variants/api/input/lenses'
import { add_raw_values_to_inputs } from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../shared_functions'
import { CAT_INPUTS, CAT_INTERPRATION_TABLE, CAT_OUTPUT } from './definition'

const calculate_points = (
  inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const valid_inputs = R.compose(
    R.filter(is_numeric),
    R.map(input => R.view(rawInputValueLens, input))
  )(inputs_with_answers)

  if (valid_inputs.length !== CAT_INPUTS.length)
    return [
      {
        id: 'CAT_POINTS',
        score: MISSING_MESSAGE,
      },
      {
        id: 'CAT_HEALTH_IMPACT',
        score: MISSING_MESSAGE,
      },
    ]

  const points = R.sum(valid_inputs)

  return [
    {
      id: 'CAT_POINTS',
      score: R.sum(valid_inputs),
    },
    {
      id: 'CAT_HEALTH_IMPACT',
      score: CAT_INTERPRATION_TABLE[points.toString()],
    },
  ]
}

export const specific_steps_cat_calc = [
  calculate_points,
  add_raw_values_to_inputs(CAT_INPUTS),
]

export const cat: CalculationType = create_calculation({
  calculation_name: 'COPD Assessment Test (CAT)',
  readme_location: __dirname,
  calculation_steps: specific_steps_cat_calc,
  calculation_definition: {
    input_definition: CAT_INPUTS,
    output_definition: CAT_OUTPUT,
  },
})
