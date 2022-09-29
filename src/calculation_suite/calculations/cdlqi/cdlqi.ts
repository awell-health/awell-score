import R from 'ramda'

import type {
  CalculationType,
  IncomingCalculationInputType,
  SubscaleType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { rawInputValueLens } from '../../helper_functions/calculation_variants/api/input/lenses'
import {
  inputsInSubscaleLens,
  scoreLens,
} from '../../helper_functions/calculation_variants/api/subscale/lenses'
import { add_response_values_to_subscale_inputs } from '../../helper_functions/calculation_variants/calculation_with_subscales'
import { create_calculation } from '../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../shared_functions'
import { CDLQI_OUTPUT, CDLQI_subscales } from './definition'

const calculate_score_for_each_subscale = (
  subscale: SubscaleType
): SubscaleType => {
  const { id, input_ids_in_subscale } = subscale
  let EXPECTED_ANSWER_COUNT = input_ids_in_subscale.length
  if (id === 'SCHOOL_OR_HOLIDAYS') {
    /**
     * Subscale "School or holidays" has 2 questions.
     * Only 1 question should be answered, however.
     * The correct question is shown based on visibility conditions
     */

    EXPECTED_ANSWER_COUNT = 1
  }

  const valid_subscale_answers = R.compose(
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input))
  )(input_ids_in_subscale)

  /**
   * All questions in the subscale should be answered in order
   * to calculate a score.
   */
  if (valid_subscale_answers.length < EXPECTED_ANSWER_COUNT)
    return R.set(scoreLens, MISSING_MESSAGE, subscale)

  const subscale_score = R.sum(valid_subscale_answers)

  return R.set(scoreLens, subscale_score, subscale)
}

export const calculate_cdlqi_subscale_scores = (
  calculation_input: IncomingCalculationInputType
): Array<SubscaleType> =>
  R.compose(
    R.map(calculate_score_for_each_subscale),
    add_response_values_to_subscale_inputs(calculation_input)
    
  )(CDLQI_subscales)

const validate_calculation_input = (
  picked_calculation_inputs: IncomingCalculationInputType
): IncomingCalculationInputType => {
  /**
   * CDLQI_Q07_SCHOOL and CDLQI_Q07_HOLIDAY cannot both be present in the response
   * Only one should be answered in the questionnaire (based on a visibility condition)
   */
  const HAS_CDLQI_Q07_SCHOOL = R.has('CDLQI_Q07_SCHOOL')
  const HAS_CDLQI_Q07_HOLIDAY = R.has('CDLQI_Q07_HOLIDAY')

  if (
    HAS_CDLQI_Q07_SCHOOL(picked_calculation_inputs) &&
    HAS_CDLQI_Q07_HOLIDAY(picked_calculation_inputs)
  ) {
    throw new Error(
      `Response passed to the CDLQI calculation can't contain both "CDLQI_Q07_SCHOOL" and "CDLQI_Q07_HOLIDAY", it must be one of the 2 but not both.`
    )
  }

  return picked_calculation_inputs
}

const add_cldqi_total_score = (
  subscales_with_scores: Array<SubscaleType>
): WIPCalculationResultType => {
  const valid_answers = R.compose(
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input)),
    R.flatten,
    R.map(scale => R.view(inputsInSubscaleLens, scale))
  )(subscales_with_scores)

  const EXPECTED_AMOUNT_OF_ANSWERS = 10

  if (valid_answers.length !== EXPECTED_AMOUNT_OF_ANSWERS)
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
 * Calculate the Children’s Dermatology Life Quality Index
 * See README.md for information about the calculation
 */
export const specific_steps_cdlqi_calc = [
  add_cldqi_total_score,
  calculate_cdlqi_subscale_scores,
  validate_calculation_input,
]

export const cdlqi: CalculationType = create_calculation({
  calculation_name: 'Children’s Dermatology Life Quality Index (CDLQI)',
  readme_location: __dirname,
  calculation_steps: specific_steps_cdlqi_calc,
  calculation_definition: {
    input_definition: CDLQI_subscales,
    output_definition: CDLQI_OUTPUT,
  },
})
