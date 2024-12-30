import R from 'ramda'

import type {
  CalculationType,
  IncomingCalculationInputType,
  SubscaleType,
  WIPCalculationResultType,
} from '../../src/types/calculations.types'
import { rawInputValueLens } from '../../lib/calculation_variants/api/input/lenses'
import { inputsInSubscaleLens } from '../../lib/calculation_variants/api/subscale/lenses'
import { add_response_values_to_subscale_inputs } from '../../lib/calculation_variants/calculation_with_subscales'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../../src/calculation_suite/calculations/shared_functions'
import { MINI_BEST_TEST_OUTPUT, MINI_BEST_TEST_SECTIONS } from './definition'
import {
  calculate_subscale_scores,
  keep_lowest_value_of_bilateral_inputs,
} from './helpers'

/**
 * "Section" is a synonym for "subscale"
 */
const calculate_mini_best_test_scores = (
  calculation_input: IncomingCalculationInputType,
): Array<SubscaleType> =>
  R.compose(
    calculate_subscale_scores,
    keep_lowest_value_of_bilateral_inputs,
    add_response_values_to_subscale_inputs(calculation_input),
  )(MINI_BEST_TEST_SECTIONS)

const add_total_score = (
  subscales_with_scores: Array<SubscaleType>,
): WIPCalculationResultType => {
  //@ts-expect-error to do
  const EXPECTED_AMOUNT_OF_ANSWERS = R.compose(
    R.length,
    R.flatten,
    R.map(scale => R.view(inputsInSubscaleLens, scale)),
  )(subscales_with_scores)

  const valid_answers = R.compose(
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input)),
    R.flatten,
    R.map(scale => R.view(inputsInSubscaleLens, scale)),
  )(subscales_with_scores)

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

export const specific_steps_mini_best_test_calc = [
  add_total_score,
  calculate_mini_best_test_scores,
]

export const mini_best_test: CalculationType = create_calculation({
  calculation_name: `Mini-Best Test`,
  readme_location: __dirname,
  calculation_steps: specific_steps_mini_best_test_calc,
  calculation_definition: {
    input_definition: MINI_BEST_TEST_SECTIONS,
    output_definition: MINI_BEST_TEST_OUTPUT,
  },
})
