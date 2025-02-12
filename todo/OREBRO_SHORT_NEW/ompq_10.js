// @flow
import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType
} from '../../../../../types/calculations.types'
import { stdInputValueLens } from '../../../../helper_functions/calculation_variants/api/input/lenses'
import { add_raw_values_to_inputs } from '../../../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../../../helper_functions/create_calculation'
import { MISSING_MESSAGE, type MissingScoreType } from '../../../../PARAMETERS'
import { is_numeric } from '../../../shared_functions'
import { OMPQ_10_INPUTS, OMPQ_10_OUTPUT } from './definition'

export const inverse_raw_input_values = (
  calculation_input: Array<InputType>
): Array<InputType> =>
  R.map((input) => {
    const answer = Number(input.raw_input_value)

    if (!is_numeric(answer) || answer === MISSING_MESSAGE)
      return R.set(stdInputValueLens, MISSING_MESSAGE, input)

    if (input.inverse) {
      const MAX_SCORE = 10
      const inversed_value = MAX_SCORE - answer

      return R.set(stdInputValueLens, inversed_value, input)
    }

    return R.set(stdInputValueLens, answer, input)
  }, calculation_input)

const calculate_ompq_10_score = (
  calculation_input: Array<InputType>
): WIPCalculationResultType => {
  const standardized_calculation_input =
    inverse_raw_input_values(calculation_input)

  const calculate_sum = (
    input: Array<InputType>
  ): number | MissingScoreType => {
    const valid_inputs = R.compose(
      R.filter(is_numeric),
      R.map((i) => R.view(stdInputValueLens, i))
    )(input)

    if (valid_inputs.length === 0) return MISSING_MESSAGE

    return R.sum(valid_inputs)
  }

  const sum = calculate_sum(standardized_calculation_input)

  return [
    {
      id: 'OREBRO',
      score: sum
    }
  ]
}

export const specific_steps_ompq_10_calc = [
  calculate_ompq_10_score,
  add_raw_values_to_inputs(OMPQ_10_INPUTS)
]

export const ompq_10: CalculationType = create_calculation({
  calculation_name: `Orebro Musculoskeletal Pain Questionnaire - Short form (OMPQ-10)`,
  readme_location: __dirname,
  calculation_steps: specific_steps_ompq_10_calc,
  calculation_definition: {
    input_definition: OMPQ_10_INPUTS,
    output_definition: OMPQ_10_OUTPUT
  }
})
