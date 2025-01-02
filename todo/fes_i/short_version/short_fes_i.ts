import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../src/types/calculations.types'
import { rawInputValueLens } from '../../../lib/calculation_variants/api/input/lenses'
import { add_raw_values_to_inputs } from '../../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { is_numeric } from '../../../src/calculation_suite/calculations/shared_functions'
import { SHORT_FES_I_INPUTS, SHORT_FES_I_OUTPUT } from './definition'

const calculate_score = (
  inputs_with_answers: Array<InputType>,
): WIPCalculationResultType => {
  const MIN_ANSWERS_NEEDED_TO_CALCULATE_SCORE = 6

  const valid_inputs = R.compose(
    R.filter(is_numeric),
    R.map(input => R.view(rawInputValueLens, input)),
  )(inputs_with_answers)

  /**
   * If responses are missing on at most 1 item
   * (i.e. at least 6 out of 7 items need to be answered) then
   * the questionnaire scores cannot be used.
   */
  if (valid_inputs.length < MIN_ANSWERS_NEEDED_TO_CALCULATE_SCORE)
    return [
      {
        id: 'SHORT_FES_I_TOTAL_SCORE',
        score: MISSING_MESSAGE,
      },
    ]

  /**
   * If a response is missing on 1 item
   * then it is possible to calculate a Short FES-I score
   */
  const has_missing_items = valid_inputs.length !== SHORT_FES_I_INPUTS.length

  if (has_missing_items) {
    /**
     * When there are missing items, calculate the total score of the items
     * which have been completed. Divide that score by the number of items
     * completed and then multiply by 7
     */
    const ADJUSTING_FACTOR = 7
    const total_score_with_missing_data =
      (R.sum(valid_inputs) / valid_inputs.length) * ADJUSTING_FACTOR

    return [
      {
        id: 'SHORT_FES_I_TOTAL_SCORE',
        /**
         * The new total score should be rounded up
         * to the nearest whole number to give the score
         * for an individual.
         */
        score: Math.round(total_score_with_missing_data),
      },
    ]
  }

  const total_score = R.sum(valid_inputs)

  return [
    {
      id: 'SHORT_FES_I_TOTAL_SCORE',
      score: total_score,
    },
  ]
}

export const specific_steps_short_fes_i_calc = [
  calculate_score,
  add_raw_values_to_inputs(SHORT_FES_I_INPUTS),
]

export const short_fes_i: CalculationType = create_calculation({
  calculation_name: 'Short Falls Efficacy Scale-International (Short FES-I)',
  readme_location: __dirname,
  calculation_steps: specific_steps_short_fes_i_calc,
  calculation_definition: {
    input_definition: SHORT_FES_I_INPUTS,
    output_definition: SHORT_FES_I_OUTPUT,
  },
})
