import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { is_number } from '../../../utils/validation'
import { stdInputValueLens } from '../../lib/calculation_variants/api/input/lenses'
import {
  add_raw_values_to_inputs,
  do_all_required_inputs_have_a_valid_value,
} from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import {
  STOP_BANG_INPUTS,
  STOP_BANG_INTERPRETATION_TABLE,
  STOP_BANG_OUTPUT,
} from './definition'
import { standardize_answer_values } from './helpers'

export const STOP_BANG_ID = 'STOP_BANG'

const calculate_score = (
  stop_bang_inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  if (
    do_all_required_inputs_have_a_valid_value(stop_bang_inputs_with_answers)
  ) {
    const inputs_with_standardized_answers = standardize_answer_values(
      stop_bang_inputs_with_answers
    )

    const valid_inputs = R.compose(
      R.filter(is_number),
      R.map(stdValue => Number(stdValue)),
      R.filter(stdValue => stdValue !== MISSING_MESSAGE),
      R.map(input => R.view(stdInputValueLens, input))
    )(inputs_with_standardized_answers)

    const total_score = R.sum(valid_inputs)

    const interpretation =
      STOP_BANG_INTERPRETATION_TABLE[total_score.toString()]

    return [
      {
        id: STOP_BANG_ID,
        score: total_score,
      },
      {
        id: 'STOP_BANG_INTERPRETATION',
        score: interpretation,
      },
    ]
  }

  return [
    {
      id: STOP_BANG_ID,
      score: MISSING_MESSAGE,
    },
    {
      id: 'STOP_BANG_INTERPRETATION',
      score: MISSING_MESSAGE,
    },
  ]
}

export const specific_steps_stop_bang_calc = [
  calculate_score,
  add_raw_values_to_inputs(STOP_BANG_INPUTS),
]

export const stop_bang: CalculationType = create_calculation({
  calculation_name: 'STOP-BANG',
  readme_location: __dirname,
  calculation_steps: specific_steps_stop_bang_calc,
  calculation_definition: {
    input_definition: STOP_BANG_INPUTS,
    output_definition: STOP_BANG_OUTPUT,
  },
})
