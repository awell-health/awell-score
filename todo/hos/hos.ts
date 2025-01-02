import { round } from 'mathjs'
import R from 'ramda'

import type {
  CalculationType,
  IncomingCalculationInputType,
  SubscaleType,
  WIPCalculationResultType,
} from '../../src/types/calculations.types'
import { rawInputValueLens } from '../../lib/calculation_variants/api/input/lenses'
import {
  inputsInSubscaleLens,
  scoreLens,
} from '../../lib/calculation_variants/api/subscale/lenses'
import { add_response_values_to_subscale_inputs } from '../../lib/calculation_variants/calculation_with_subscales'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../../src/calculation_suite/calculations/shared_functions'
import { HOS_OUTPUT, HOS_SUBSCALES, NOT_APPLICABLE_ANSWER } from './definition'

const calculate_score_for_each_subscale = (
  subscale: SubscaleType,
): SubscaleType => {
  const inputs_in_subscale = R.view(inputsInSubscaleLens, subscale)

  //@ts-expect-error to do
  const valid_answered_inputs = R.compose(
    R.defaultTo([]),
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input)),
  )(inputs_in_subscale)

  //@ts-expect-error to do
  const valid_answered_inputs_without_non_applicable_scores = R.filter(
    answer => answer !== NOT_APPLICABLE_ANSWER,
    valid_answered_inputs,
  )

  //@ts-expect-error to do
  if (valid_answered_inputs.length === 0) {
    return R.set(scoreLens, MISSING_MESSAGE, subscale)
  }

  const MAX_SCORE_PER_ANSWER = 4
  const ROUND_TO = 2

  //@ts-expect-error to do
  const sum = R.sum(valid_answered_inputs_without_non_applicable_scores)
  const max_score =
    valid_answered_inputs_without_non_applicable_scores.length *
    MAX_SCORE_PER_ANSWER

  const subscale_score = (sum / max_score) * 100

  return R.set(scoreLens, round(subscale_score, ROUND_TO), subscale)
}

export const calculate_hos_subscale_scores = (
  calculation_input: IncomingCalculationInputType,
): Array<SubscaleType> =>
  R.compose(
    R.map(calculate_score_for_each_subscale),
    add_response_values_to_subscale_inputs(calculation_input),
  )(HOS_SUBSCALES)

const add_total_hos_score = (
  subscales_with_scores: Array<SubscaleType>,
): WIPCalculationResultType => {
  //@ts-expect-error to do
  const valid_answered_inputs = R.compose(
    R.defaultTo([]),
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input)),
    R.flatten,
    R.map(scale => R.view(inputsInSubscaleLens, scale)),
  )(subscales_with_scores)

  //@ts-expect-error to do
  const valid_answered_inputs_without_non_applicable_scores = R.filter(
    answer => answer !== NOT_APPLICABLE_ANSWER,
    valid_answered_inputs,
  )

  //@ts-expect-error to do
  if (valid_answered_inputs.length === 0) {
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
  }

  const MAX_SCORE_PER_ANSWER = 4
  const ROUND_TO = 2

  //@ts-expect-error to do
  const sum = R.sum(valid_answered_inputs_without_non_applicable_scores)
  const max_score =
    valid_answered_inputs_without_non_applicable_scores.length *
    MAX_SCORE_PER_ANSWER

  const total_score = round((sum / max_score) * 100, ROUND_TO)

  return [
    ...subscales_with_scores.map(({ id, score }) => ({
      id,
      score,
    })),
    {
      id: 'TOTAL',
      score: total_score,
    },
  ]
}

export const specific_steps_hos_calc = [
  add_total_hos_score,
  calculate_hos_subscale_scores,
]

export const hos: CalculationType = create_calculation({
  calculation_name: 'Hip Outcome Score (HOS)',
  readme_location: __dirname,
  calculation_steps: specific_steps_hos_calc,
  calculation_definition: {
    input_definition: HOS_SUBSCALES,
    output_definition: HOS_OUTPUT,
  },
})
