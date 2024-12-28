import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { add_raw_values_to_inputs } from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../shared_functions'
import {
  IIEF5_INPUTS,
  IIEF5_INTERPRATION_TABLE,
  IIEF5_OUTPUT,
} from './definition'

const calculate_score = (
  inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const valid_inputs = R.filter(
    input => is_numeric(input.raw_input_value),
    inputs_with_answers
  )

  if (valid_inputs.length === 0) {
    return [
      {
        id: 'IIEF5_TOTAL_SCORE',
        score: MISSING_MESSAGE,
      },
      {
        id: 'IIEF5_INTERPRETATION',
        score: MISSING_MESSAGE,
      },
    ]
  }

  const total_score = R.sum(
    valid_inputs.map(input => Number(input.raw_input_value))
  )

  return [
    {
      id: 'IIEF5_TOTAL_SCORE',
      score: total_score,
    },
    {
      id: 'IIEF5_INTERPRETATION',
      score: IIEF5_INTERPRATION_TABLE[total_score.toString()],
    },
  ]
}

export const specific_steps_calc = [
  calculate_score,
  add_raw_values_to_inputs(IIEF5_INPUTS),
]

export const iief5: CalculationType = create_calculation({
  calculation_name: 'The International Index of Erectile Function (IIEF-5)',
  readme_location: __dirname,
  calculation_steps: specific_steps_calc,
  calculation_definition: {
    input_definition: IIEF5_INPUTS,
    output_definition: IIEF5_OUTPUT,
  },
})
