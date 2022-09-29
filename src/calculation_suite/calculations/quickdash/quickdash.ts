import { round } from 'mathjs'
import R from 'ramda'

import type {
  CalculationType,
  IncomingCalculationInputType,
  SubscaleType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { rawInputValueLens } from '../../helper_functions/calculation_variants/api/input/lenses'
import { scoreLens } from '../../helper_functions/calculation_variants/api/subscale/lenses'
import { add_response_values_to_subscale_inputs } from '../../helper_functions/calculation_variants/calculation_with_subscales'
import { create_calculation } from '../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../shared_functions'
import { QUICKDASH_OUTPUT, QUICKDASH_SUBSCALES } from './definition'

const calculate_score_for_each_subscale = (
  subscale: SubscaleType
): SubscaleType => {
  const { input_ids_in_subscale, min_answers_needed_to_calculate_score = 0 } =
    subscale

  const valid_subscale_answers = R.compose(
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input)),
    R.defaultTo([])
  )(input_ids_in_subscale)

  if (valid_subscale_answers.length >= min_answers_needed_to_calculate_score) {
    const sum = R.sum(valid_subscale_answers)
    const subscale_score = (sum / valid_subscale_answers.length - 1) * 25
    const ROUND_TO = 2
    return R.set(scoreLens, round(subscale_score, ROUND_TO), subscale)
  }

  return R.set(scoreLens, MISSING_MESSAGE, subscale)
}

export const calculate_quickdash_scores = (
  calculation_input: IncomingCalculationInputType
): WIPCalculationResultType => {
  const subscales_with_scores = R.compose(
    R.map(calculate_score_for_each_subscale),
    add_response_values_to_subscale_inputs(calculation_input)
  )(QUICKDASH_SUBSCALES)

  return [
    ...subscales_with_scores.map(({ id, score }) => ({
      id,
      score,
    })),
  ]
}

export const specific_steps_quickdash_calc = [calculate_quickdash_scores]

export const quickdash: CalculationType = create_calculation({
  calculation_name: 'QuickDASH',
  readme_location: __dirname,
  calculation_steps: specific_steps_quickdash_calc,
  calculation_definition: {
    input_definition: QUICKDASH_SUBSCALES,
    output_definition: QUICKDASH_OUTPUT,
  },
})
