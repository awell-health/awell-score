// @flow
import { round } from 'mathjs'
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
import { BASDAI_INPUTS, BASDAI_OUTPUT } from './definition'

const get_answer =
  (input_id: string) =>
  (calculation_input: Array<InputType>): number =>
    R.compose(
      (answer) => Number(answer),
      (input) => input?.raw_input_value,
      R.find((input) => input.input_id === input_id)
    )(calculation_input)

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
        id: 'BASDAI_TOTAL_SCORE',
        score: MISSING_MESSAGE
      }
    ]
  }

  const PART_A = [
    get_answer('Q1')(calculation_input),
    get_answer('Q2')(calculation_input),
    get_answer('Q3')(calculation_input),
    get_answer('Q4')(calculation_input)
  ]

  const PART_A_SCORE = R.sum(PART_A)

  const PART_B = [
    get_answer('Q5')(calculation_input),
    get_answer('Q6')(calculation_input)
  ]

  const PART_B_SCORE = R.sum(PART_B) / 2

  const ROUND_TO = 2
  const TOTAL_SCORE = round((PART_A_SCORE + PART_B_SCORE) / 5, ROUND_TO)

  return [
    {
      id: 'BASDAI_TOTAL_SCORE',
      score: TOTAL_SCORE
    }
  ]
}

export const specific_steps_basdai_calc = [
  calculate_basdai,
  add_raw_values_to_inputs(BASDAI_INPUTS)
]

export const basdai: CalculationType = create_calculation({
  calculation_name: `Bath Ankylosing Spondylitis Disease Activity Index (BASDAI)`,
  readme_location: __dirname,
  calculation_steps: specific_steps_basdai_calc,
  calculation_definition: {
    input_definition: BASDAI_INPUTS,
    output_definition: BASDAI_OUTPUT
  }
})
