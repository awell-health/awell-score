import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../src/types/calculations.types'
import { rawInputValueLens } from '../../lib/calculation_variants/api/input/lenses'
import {
  add_raw_values_to_inputs,
  do_all_required_inputs_have_a_valid_value,
  get_valid_values,
} from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../../src/calculation_suite/calculations/shared_functions'
import { TAMPA_INPUTS, TAMPA_OUTPUT } from './definition'

export const TAMPA_CALCULATION_ID = 'TAMPA'

const inverse_input_answers = (
  TAMPA_INPUTS_with_answers: Array<InputType>,
): Array<InputType> => {
  const inverse_input_answer_if_needed = (input: InputType): InputType => {
    const { raw_input_value, inverse } = input
    const INVERSE_CONST = 5

    //@ts-expect-error to do
    const inverse_score = answer => {
      const numeric_answer = Number(answer)

      return is_numeric(numeric_answer)
        ? INVERSE_CONST - numeric_answer
        : MISSING_MESSAGE
    }

    const stdScore = inverse ? inverse_score(raw_input_value) : raw_input_value

    return R.set(rawInputValueLens, stdScore, input)
  }

  return R.map(inverse_input_answer_if_needed, TAMPA_INPUTS_with_answers)
}

const calculate_tampa_score = (
  TAMPA_INPUTS_with_answers: Array<InputType>,
): WIPCalculationResultType => {
  if (do_all_required_inputs_have_a_valid_value(TAMPA_INPUTS_with_answers)) {
    const total_score = R.sum(get_valid_values(TAMPA_INPUTS_with_answers))
    const CUT_OFF_SCORE = 37
    const has_movement_fear = total_score >= CUT_OFF_SCORE

    const readable_result = has_movement_fear
      ? `Kinesiophobia present`
      : `Kinesiophobia not present`

    return [
      {
        id: TAMPA_CALCULATION_ID,
        score: total_score,
        interpretation: { en: readable_result },
      },
    ]
  }

  return [
    {
      id: TAMPA_CALCULATION_ID,
      score: MISSING_MESSAGE,
    },
  ]
}

export const specific_steps_tampa_calc = [
  calculate_tampa_score,
  inverse_input_answers,
  add_raw_values_to_inputs(TAMPA_INPUTS),
]

export const tampa: CalculationType = create_calculation({
  calculation_name: 'Tampa',
  readme_location: __dirname,
  calculation_steps: specific_steps_tampa_calc,
  calculation_definition: {
    input_definition: TAMPA_INPUTS,
    output_definition: TAMPA_OUTPUT,
  },
})
