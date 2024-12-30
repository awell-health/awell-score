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
import { is_numeric } from '../../src/calculation_suite/calculations/shared_functions'
import { AUDIT_OUTPUT, AUDIT_SUBSCALES } from './definition'

const calculate_score_for_each_subscale = (
  subscale: SubscaleType,
): SubscaleType => {
  const { input_ids_in_subscale } = subscale

  //@ts-expect-error to do
  const valid_subscale_answers = R.compose(
    R.defaultTo([]),
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input)),
  )(input_ids_in_subscale)

  //@ts-expect-error to do
  const subscale_score = R.sum(valid_subscale_answers)

  return R.set(scoreLens, subscale_score, subscale)
}

export const calculate_audit_subscale_scores = (
  calculation_input: IncomingCalculationInputType,
): Array<SubscaleType> =>
  R.compose(
    R.map(calculate_score_for_each_subscale),
    add_response_values_to_subscale_inputs(calculation_input),
  )(AUDIT_SUBSCALES)

const add_total_audit_score = (
  subscales_with_scores: Array<SubscaleType>,
): WIPCalculationResultType => {
  //@ts-expect-error to do
  const valid_answers = R.compose(
    R.defaultTo([]),
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input)),
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
      //@ts-expect-error to do
      score: R.sum(valid_answers),
    },
  ]
}

export const specific_steps_audit_score_calc = [
  add_total_audit_score,
  calculate_audit_subscale_scores,
]

export const audit: CalculationType = create_calculation({
  calculation_name: 'Alcohol Use Disorders Identification Test (AUDIT)',
  readme_location: __dirname,
  calculation_steps: specific_steps_audit_score_calc,
  calculation_definition: {
    input_definition: AUDIT_SUBSCALES,
    output_definition: AUDIT_OUTPUT,
  },
})
