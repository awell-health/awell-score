import { round } from 'mathjs'
import R from 'ramda'

import type {
  CalculationType,
  IncomingCalculationInputType,
  SubscaleType,
  WIPCalculationResultType,
} from '../../../../types/calculations.types'
import { rawInputValueLens } from '../../../lib/calculation_variants/api/input/lenses'
import { scoreLens } from '../../../lib/calculation_variants/api/subscale/lenses'
import { add_response_values_to_subscale_inputs } from '../../../lib/calculation_variants/calculation_with_subscales'
import { create_calculation } from '../../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { is_numeric } from '../../shared_functions'
import { FFI_OUTPUT, FFI_SUBSCALES, NOT_APPLICABLE_ANSWER } from './definition'

const calculate_score_for_each_subscale = (
  subscale: SubscaleType
): SubscaleType => {
  const { input_ids_in_subscale } = subscale

  //@ts-expect-error to do
  const valid_subscale_answers = R.compose(
    /**
     * If function loss is not a result of foot complaints,
     * the patient is asked to indicate “NA,” not applicable. That
     * item is then omitted in further calculations.
     */
    R.filter(answer => answer !== NOT_APPLICABLE_ANSWER),
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input))
  )(input_ids_in_subscale)

  //@ts-expect-error to do
  if (valid_subscale_answers.length === 0)
    return R.set(scoreLens, MISSING_MESSAGE, subscale)

  /**
   * To calculate the definitive scale scores,
   * the item scores are summed, divided by the maximum possible sum
   * of the item scores, and then multiplied by 100.
   */
  const MAX_SCORE_PER_ANSWER = 4
  const total_scale_score =
    //@ts-expect-error to do
    (R.sum(valid_subscale_answers) /
      //@ts-expect-error to do
      (valid_subscale_answers.length * MAX_SCORE_PER_ANSWER)) *
    100

  return R.set(scoreLens, total_scale_score, subscale)
}

const calculate_ffi_scores = (
  calculation_input: IncomingCalculationInputType
): WIPCalculationResultType => {
  const subscales_with_scores = R.compose(
    R.map(calculate_score_for_each_subscale),
    add_response_values_to_subscale_inputs(calculation_input)
  )(FFI_SUBSCALES)

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
        id: 'TOTAL',
        score: MISSING_MESSAGE,
      },
    ]

  /**
   * The total score is the mean of the scale scores.
   */
  const total_score = R.mean(valid_subscale_scores)
  const ROUND_TO = 2

  return [
    ...subscales_with_scores.map(({ id, score }) => ({
      id,
      score:
        //@ts-expect-error to do
        score === MISSING_MESSAGE ? MISSING_MESSAGE : round(score, ROUND_TO),
    })),
    {
      id: 'TOTAL',
      score: round(total_score, ROUND_TO),
    },
  ]
}

export const specific_steps_ffi_5pt_calc = [calculate_ffi_scores]

export const foot_function_index_5pt: CalculationType = create_calculation({
  calculation_name: 'Foot Function Index (FFI) - 5pt',
  readme_location: __dirname,
  calculation_steps: specific_steps_ffi_5pt_calc,
  calculation_definition: {
    input_definition: FFI_SUBSCALES,
    output_definition: FFI_OUTPUT,
  },
})
