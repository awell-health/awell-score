import { round } from 'mathjs'
import R from 'ramda'

import type {
  CalculationType,
  IncomingCalculationInputType,
  SubscaleType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { rawInputValueLens } from '../../lib/calculation_variants/api/input/lenses'
import {
  inputsInSubscaleLens,
  scoreLens,
} from '../../lib/calculation_variants/api/subscale/lenses'
import { add_response_values_to_subscale_inputs } from '../../lib/calculation_variants/calculation_with_subscales'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../shared_functions'
import { HOOS_OUTPUT, HOOS_SUBSCALES } from './definition'

const ROUND_TO = 2

const calculate_score_for_each_subscale = (
  subscale: SubscaleType
): SubscaleType => {
  const inputs_in_subscale = R.view(inputsInSubscaleLens, subscale)

  //@ts-expect-error to do
  const valid_answers = R.compose(
    R.defaultTo([]),
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input))
  )(inputs_in_subscale)

  //@ts-expect-error to do
  if (valid_answers.length === 0) {
    return R.set(scoreLens, MISSING_MESSAGE, subscale)
  }

  const MAX_ANSWER_PER_QUESTION = 4
  //@ts-expect-error to do
  const max_score = MAX_ANSWER_PER_QUESTION * valid_answers.length
  //@ts-expect-error to do
  const subscale_score = 100 - (R.sum(valid_answers) / max_score) * 100

  return R.set(scoreLens, round(subscale_score, ROUND_TO), subscale)
}

export const calculate_hoos_extended_scores = (
  calculation_input: IncomingCalculationInputType
): SubscaleType[] =>
  R.compose(
    R.map(calculate_score_for_each_subscale),
    add_response_values_to_subscale_inputs(calculation_input)
  )(HOOS_SUBSCALES)

const add_total_hoos_score = (
  subscales_with_scores: Array<SubscaleType>
): WIPCalculationResultType => {
  //@ts-expect-error to do
  const valid_answers = R.compose(
    R.defaultTo([]),
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input)),
    R.flatten,
    R.map(scale => R.view(inputsInSubscaleLens, scale))
  )(subscales_with_scores)

  //@ts-expect-error to do
  if (valid_answers.length === 0) {
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

  const MAX_ANSWER_PER_QUESTION = 4
  //@ts-expect-error to do
  const max_score = MAX_ANSWER_PER_QUESTION * valid_answers.length
  //@ts-expect-error to do
  const total_score = 100 - (R.sum(valid_answers) / max_score) * 100

  return [
    ...subscales_with_scores.map(({ id, score }) => ({
      id,
      score,
    })),
    {
      id: 'TOTAL',
      score: round(total_score, ROUND_TO),
    },
  ]
}

export const specific_steps_hoos_extended_calc = [
  add_total_hoos_score,
  calculate_hoos_extended_scores,
]

export const hoos_extended: CalculationType = create_calculation({
  calculation_name: 'Hip Disability and Osteoarthritis Outcome Score (HOOS)',
  readme_location: __dirname,
  calculation_steps: specific_steps_hoos_extended_calc,
  calculation_definition: {
    input_definition: HOOS_SUBSCALES,
    output_definition: HOOS_OUTPUT,
  },
})
