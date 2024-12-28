import { round } from 'mathjs'
import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { rawInputValueLens } from '../../lib/calculation_variants/api/input/lenses'
import {
  add_raw_values_to_inputs,
  get_valid_values,
} from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../shared_functions'
import { IKDC_INPUTS, IKDC_OUTPUT } from './definition'

const inverse_input_answers = (
  ikdc_inputs_with_answers: Array<InputType>
): Array<InputType> => {
  const inverse_input_answer_if_needed = (input: InputType): InputType => {
    const { raw_input_value, inverse } = input
    const INVERSE_CONST = 10

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

  return R.map(inverse_input_answer_if_needed, ikdc_inputs_with_answers)
}

const calculate_ikdc_score = (
  calculation_input: Array<InputType>
): WIPCalculationResultType => {
  const valid_answered_inputs = get_valid_values(calculation_input)
  const MAX_POSSIBLE_SCORE = 87
  const ROUND_TO = 2

  if (valid_answered_inputs.length === 0)
    return [
      {
        id: 'IKDC_SCORE',
        score: MISSING_MESSAGE,
      },
    ]

  return [
    {
      id: 'IKDC_SCORE',
      score: round(
        (R.sum(valid_answered_inputs) / MAX_POSSIBLE_SCORE) * 100,
        ROUND_TO
      ),
    },
  ]
}

export const specific_steps_ikdc_calc = [
  calculate_ikdc_score,
  inverse_input_answers,
  add_raw_values_to_inputs(IKDC_INPUTS),
]

export const ikdc: CalculationType = create_calculation({
  calculation_name:
    'International Knee Documentation Committee Subjective Knee Form (IKDC)',
  readme_location: __dirname,
  calculation_steps: specific_steps_ikdc_calc,
  calculation_definition: {
    input_definition: IKDC_INPUTS,
    output_definition: IKDC_OUTPUT,
  },
})
