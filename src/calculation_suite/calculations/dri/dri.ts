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
import { DRI_OUTPUT, DRI_SUBSCALES } from './definition'

const calculate_score_for_each_subscale = (
  subscale: SubscaleType
): SubscaleType => {
  const { input_ids_in_subscale } = subscale

  const valid_subscale_answers = R.compose(
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input))
  )(input_ids_in_subscale)

  if (valid_subscale_answers.length === 0)
    return R.set(scoreLens, MISSING_MESSAGE, subscale)

  const subscale_score = R.mean(valid_subscale_answers)

  return R.set(scoreLens, round(subscale_score, 2), subscale)
}

const calculate_dri_score = (
  calculation_input: IncomingCalculationInputType
): WIPCalculationResultType => {
  const subscales_with_scores = R.compose(
    R.map(calculate_score_for_each_subscale),
    add_response_values_to_subscale_inputs(calculation_input)
  )(DRI_SUBSCALES)

  const valid_subscale_scores = R.compose(
    R.filter(is_numeric),
    R.map(score => Number(score)),
    R.flatten,
    R.map(scale => R.view(scoreLens, scale))
  )(subscales_with_scores)

  if (valid_subscale_scores.length === 0)
    return [
      ...subscales_with_scores.map(({ id, score }) => ({
        id,
        score,
      })),
      {
        id: 'DRI',
        score: MISSING_MESSAGE,
      },
    ]

  // Total score is average of all VAS scores
  const result = R.mean(valid_subscale_scores)
  const POSITIVE_SCORE_CUT_OFF = 50

  const is_positive_score = result >= POSITIVE_SCORE_CUT_OFF
  const readable_result = is_positive_score
    ? `Positive score (Score >= ${result}%)`
    : `Negative score (Score < ${result}%)`

  return [
    ...subscales_with_scores.map(({ id, score }) => ({
      id,
      score,
    })),
    {
      id: 'DRI',
      score: round(result, 2),
      interpretation: { en: `${readable_result}` },
    },
  ]
}

export const specific_steps_dri_calc = [calculate_dri_score]

export const dri: CalculationType = create_calculation({
  calculation_name: 'Disability Rating Index (DRI)',
  readme_location: __dirname,
  calculation_steps: specific_steps_dri_calc,
  calculation_definition: {
    input_definition: DRI_SUBSCALES,
    output_definition: DRI_OUTPUT,
  },
})
