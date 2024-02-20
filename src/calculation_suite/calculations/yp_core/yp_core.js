// @flow
import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType
} from '../../../types/calculations.types'
import { add_raw_values_to_inputs } from '../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../shared_functions'
import {
  YP_CORE_INPUTS,
  YP_CORE_INTERPRATION_TABLE,
  YP_CORE_OUTPUT
} from './definition'

const calculate_score = (
  inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const valid_inputs = R.filter(
    (input) => is_numeric(input.raw_input_value),
    inputs_with_answers
  )

  if (valid_inputs.length === 0) {
    return [
      {
        id: 'YP_CORE_TOTAL_SCORE',
        score: MISSING_MESSAGE
      },
      {
        id: 'YP_CORE_INTERPRETATION',
        score: MISSING_MESSAGE
      }
    ]
  }

  const FACTOR = 10

  const total_score =
    (R.sum(valid_inputs.map((input) => Number(input.raw_input_value))) /
      valid_inputs.length) *
    FACTOR

  return [
    {
      id: 'YP_CORE_TOTAL_SCORE',
      score: total_score
    },
    {
      id: 'YP_CORE_INTERPRETATION',
      score: YP_CORE_INTERPRATION_TABLE[total_score.toString()]
    }
  ]
}

export const specific_steps_calc = [
  calculate_score,
  add_raw_values_to_inputs(YP_CORE_INPUTS)
]

export const yp_core: CalculationType = create_calculation({
  calculation_name: "The Young Person's CORE (YP-CORE)",
  readme_location: __dirname,
  calculation_steps: specific_steps_calc,
  calculation_definition: {
    input_definition: YP_CORE_INPUTS,
    output_definition: YP_CORE_OUTPUT
  }
})
