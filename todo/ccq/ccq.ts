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
import { CCQ_OUTPUT, CCQ_SCALES } from './definition'

const calculate_score_for_each_subscale = (
  subscale: SubscaleType,
): SubscaleType => {
  const input_ids_in_subscale = R.view(inputsInSubscaleLens, subscale)
  const { min_answers_needed_to_calculate_score } = subscale

  const valid_answers_in_subscale = R.compose(
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input)),
  )(input_ids_in_subscale)

  //@ts-expect-error to do
  if (valid_answers_in_subscale.length < min_answers_needed_to_calculate_score)
    return R.set(scoreLens, MISSING_MESSAGE, subscale)

  const subscale_score =
    R.sum(valid_answers_in_subscale) / valid_answers_in_subscale.length

  return R.set(scoreLens, subscale_score, subscale)
}

const calculate_ccq_scores = (
  calculation_input: IncomingCalculationInputType,
): WIPCalculationResultType => {
  const subscales_with_scores = R.compose(
    R.map(calculate_score_for_each_subscale),
    add_response_values_to_subscale_inputs(calculation_input),
  )(CCQ_SCALES)

  const valid_subscale_scores = R.compose(
    R.filter(is_numeric),
    R.map(score => Number(score)),
    R.flatten,
    R.map(scale => R.view(scoreLens, scale)),
  )(subscales_with_scores)

  const all_answers_in_all_subscales = R.compose(
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input)),
    R.flatten,
    R.map(scale => R.view(inputsInSubscaleLens, scale)),
  )(subscales_with_scores)

  const total_score =
    // We need 3 valid subscale scores
    valid_subscale_scores.length === CCQ_SCALES.length
      ? R.sum(all_answers_in_all_subscales) /
        all_answers_in_all_subscales.length
      : MISSING_MESSAGE

  return [
    ...subscales_with_scores.map(({ id, score }) => ({
      id,
      score,
    })),
    {
      id: 'TOTAL_SCORE',
      score: total_score,
    },
  ]
}

export const specific_steps_ccq_calc = [calculate_ccq_scores]

export const ccq: CalculationType = create_calculation({
  calculation_name: `Clinical COPD Questionnaire (CCQ)`,
  readme_location: __dirname,
  calculation_steps: specific_steps_ccq_calc,
  calculation_definition: {
    input_definition: CCQ_SCALES,
    output_definition: CCQ_OUTPUT,
  },
})
