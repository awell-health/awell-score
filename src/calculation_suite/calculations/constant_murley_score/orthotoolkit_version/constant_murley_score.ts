import R from 'ramda'

import type {
  CalculationType,
  IncomingCalculationInputType,
  SubscaleType,
  WIPCalculationResultType,
} from '../../../../types/calculations.types'
import { rawInputValueLens } from '../../../helper_functions/calculation_variants/api/input/lenses'
import {
  inputsInSubscaleLens,
  scoreLens,
  subscaleIdLens,
} from '../../../helper_functions/calculation_variants/api/subscale/lenses'
import { add_response_values_to_subscale_inputs } from '../../../helper_functions/calculation_variants/calculation_with_subscales'
import { create_calculation } from '../../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { is_numeric } from '../../shared_functions'
import { CMS_OUTPUT, CMS_SUBSCALES } from './definition'
import {
  calculate_mobility_subscale_score,
  calculate_stength_subscale_score,
} from './helpers'

const calculate_score_for_each_subscale = (
  subscale: SubscaleType
): SubscaleType => {
  const subscale_id = R.view(subscaleIdLens, subscale)
  const inputs_in_subscale = R.view(inputsInSubscaleLens, subscale)

  /**
   * Calculate score for strength subscale
   */
  if (subscale_id === 'STRENGTH')
    return calculate_stength_subscale_score(subscale)

  /**
   * Calculate score for strength subscale
   */
  if (subscale_id === 'MOBILITY')
    return calculate_mobility_subscale_score(subscale)

  /** All other subscales */
  //@ts-expect-error to do
  const valid_answers = R.compose(
    R.defaultTo([]),
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input))
  )(inputs_in_subscale)

  //@ts-expect-error to do
  if (valid_answers.length !== inputs_in_subscale.length) {
    return R.set(scoreLens, MISSING_MESSAGE, subscale)
  }

  //@ts-expect-error to do
  return R.set(scoreLens, R.sum(valid_answers), subscale)
}

export const calculate_subscale_scores = (
  calculation_input: IncomingCalculationInputType
): SubscaleType[] =>
  R.compose(
    R.map(calculate_score_for_each_subscale),
    add_response_values_to_subscale_inputs(calculation_input)
  )(CMS_SUBSCALES)

const add_total_score = (
  subscales_with_scores: Array<SubscaleType>
): WIPCalculationResultType => {
  //@ts-expect-error to do
  const valid_subscale_scores = R.compose(
    R.defaultTo([]),
    R.filter(is_numeric),
    R.map(score => Number(score)),
    R.flatten,
    R.map(subscale => R.view(scoreLens, subscale))
  )(subscales_with_scores)

  //@ts-expect-error to do
  if (valid_subscale_scores.length === 0) {
    return [
      ...subscales_with_scores.map(({ id, score }) => ({
        id,
        score,
      })),
      {
        id: 'TS',
        score: MISSING_MESSAGE,
      },
    ]
  }

  return [
    ...subscales_with_scores.map(({ id, score }) => ({
      id,
      score,
    })),
    {
      id: 'TS',
      //@ts-expect-error to do
      score: R.sum(valid_subscale_scores),
    },
  ]
}

export const specific_steps_cms_calc = [
  add_total_score,
  calculate_subscale_scores,
]

export const constant_murley_score: CalculationType = create_calculation({
  calculation_name: 'Constant Murley Score (CMS) - OrthoToolKit version',
  readme_location: __dirname,
  calculation_steps: specific_steps_cms_calc,
  calculation_definition: {
    input_definition: CMS_SUBSCALES,
    output_definition: CMS_OUTPUT,
  },
})
