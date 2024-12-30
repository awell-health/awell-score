import R from 'ramda'

import type {
  CalculationType,
  IncomingCalculationInputType,
  SubscaleType,
  WIPCalculationResultType,
} from '../../src/types/calculations.types'
import { stdInputValueLens } from '../../lib/calculation_variants/api/input/lenses'
import {
  inputsInSubscaleLens,
  scoreLens,
} from '../../lib/calculation_variants/api/subscale/lenses'
import { add_response_values_to_subscale_inputs } from '../../lib/calculation_variants/calculation_with_subscales'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../../src/calculation_suite/calculations/shared_functions'
import { DLQI_OUTPUT, DLQI_subscales } from './definition'
import {
  are_sufficient_answers_provided,
  transform_not_relevant_answers,
  validate_work_and_school_subscale_input,
} from './helpers'
import { are_sufficient_answers_provided_for_subscale } from './helpers/are_sufficient_answers_provided'

const calculate_score_for_each_subscale = (
  subscale: SubscaleType,
): SubscaleType => {
  const { input_ids_in_subscale } = subscale

  //@ts-expect-error to do
  const valid_subscale_answers = R.compose(
    R.defaultTo([]),
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(stdInputValueLens, input)),
  )(input_ids_in_subscale)

  /**
   * All questions in the subscale should be answered in order
   * to calculate a score.
   */
  if (!are_sufficient_answers_provided_for_subscale(subscale))
    return R.set(scoreLens, MISSING_MESSAGE, subscale)

  //@ts-expect-error to do
  const subscale_score = R.sum(valid_subscale_answers)

  return R.set(scoreLens, subscale_score, subscale)
}

const calculate_dlqi_scores = (
  calculation_input: IncomingCalculationInputType,
): Array<SubscaleType> =>
  R.compose(
    R.map(calculate_score_for_each_subscale),
    transform_not_relevant_answers,
    validate_work_and_school_subscale_input,
    add_response_values_to_subscale_inputs(calculation_input),
  )(DLQI_subscales)

const add_total_dlqi_score = (
  subscales_with_scores: Array<SubscaleType>,
): WIPCalculationResultType => {
  /**
   * If one question is unanswered, this is allocated a score of 0 and
   * the DLQI score summed in the usual way, out of 30.
   * If two or more questions are unanswered, the questionnaire is not scored.
   */

  if (!are_sufficient_answers_provided(subscales_with_scores))
    return [
      ...subscales_with_scores.map(({ id, score }) => ({
        id,
        score,
      })),
      {
        id: 'TOTAL',
        score: MISSING_MESSAGE,
      },
    ]

  const valid_answers = R.compose(
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(stdInputValueLens, input)),
    R.flatten,
    R.map(scale => R.view(inputsInSubscaleLens, scale)),
  )(subscales_with_scores)

  return [
    ...subscales_with_scores.map(({ id, score }) => ({
      id,
      score,
    })),
    {
      id: 'TOTAL',
      score: R.sum(valid_answers),
    },
  ]
}

/**
 * Calculate the Dermatology Life Quality Index
 * See README.md for information about the calculation
 */
export const specific_steps_dlqi_calc = [
  add_total_dlqi_score,
  calculate_dlqi_scores,
]

export const dlqi: CalculationType = create_calculation({
  calculation_name: 'Dermatology Life Quality Index (DLQI)',
  readme_location: __dirname,
  calculation_steps: specific_steps_dlqi_calc,
  calculation_definition: {
    input_definition: DLQI_subscales,
    output_definition: DLQI_OUTPUT,
  },
})
