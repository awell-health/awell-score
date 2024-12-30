import R from 'ramda'

import type {
  CalculationType,
  IncomingCalculationInputType,
  SubscaleType,
  WIPCalculationResultType,
} from '../../src/types/calculations.types'
import { rawInputValueLens } from '../../lib/calculation_variants/api/input/lenses'
import { scoreLens } from '../../lib/calculation_variants/api/subscale/lenses'
import { add_response_values_to_subscale_inputs } from '../../lib/calculation_variants/calculation_with_subscales'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../../src/calculation_suite/calculations/shared_functions'
import { PRTEE_OUTPUT, PRTEE_SUBSCALES } from './definition'

const calculate_score_for_each_subscale = (
  subscale: SubscaleType,
): SubscaleType => {
  const { id, input_ids_in_subscale } = subscale

  const valid_subscale_answers = R.compose(
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input)),
  )(input_ids_in_subscale)

  /**
   * All inputs in the subscale should be answered in order
   * to calculate a score.
   */
  if (valid_subscale_answers.length < input_ids_in_subscale.length)
    return R.set(scoreLens, MISSING_MESSAGE, subscale)

  const subscale_score =
    id === 'FUNCTION'
      ? R.sum(valid_subscale_answers) / 2
      : R.sum(valid_subscale_answers)

  return R.set(scoreLens, subscale_score, subscale)
}

export const calculate_prtee_subscale_scores = (
  calculation_input: IncomingCalculationInputType,
): WIPCalculationResultType => {
  const subscales_with_scores = R.compose(
    R.map(calculate_score_for_each_subscale),
    add_response_values_to_subscale_inputs(calculation_input),
  )(PRTEE_SUBSCALES)

  return [
    ...subscales_with_scores.map(({ id, score }) => ({
      id,
      score,
    })),
  ]
}

export const add_total_score = (
  wip_calculation_result: WIPCalculationResultType,
): WIPCalculationResultType => {
  const valid_subscale_scores = R.compose(
    R.filter(is_numeric),
    //@ts-expect-error to do
    R.map(result => result.score),
  )(wip_calculation_result)

  /**
   * All subscales should have a valid score in order
   * to calculate a total score.
   */
  if (valid_subscale_scores.length === PRTEE_SUBSCALES.length)
    return [
      ...wip_calculation_result,
      {
        id: 'TOTAL',

        score: R.sum(valid_subscale_scores),
      },
    ]

  return [
    ...wip_calculation_result,
    {
      id: 'TOTAL',
      score: MISSING_MESSAGE,
    },
  ]
}

export const specific_steps_prtee_calc = [
  add_total_score,
  calculate_prtee_subscale_scores,
]

export const prtee: CalculationType = create_calculation({
  calculation_name: 'Patient-Rated Tennis Elbow Evaluation (PRTEE)',
  readme_location: __dirname,
  calculation_steps: specific_steps_prtee_calc,
  calculation_definition: {
    input_definition: PRTEE_SUBSCALES,
    output_definition: PRTEE_OUTPUT,
  },
})
