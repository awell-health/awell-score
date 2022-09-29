import R from 'ramda'

import type { SubscaleType } from '../../../../types/calculations.types'
import { rawInputValueLens } from '../../../helper_functions/calculation_variants/api/input/lenses'
import {
  inputsInSubscaleLens,
  scoreLens,
  subscaleIdLens,
} from '../../../helper_functions/calculation_variants/api/subscale/lenses'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { is_numeric } from '../../shared_functions'
import { NOT_AT_ALL } from '../definition/sdq_subscales'

const calculate_score_for_problem_scale = (
  subscale: SubscaleType
): SubscaleType => {
  const inputs_in_subscale = R.view(inputsInSubscaleLens, subscale)

  /**
   * A score for a subscale can only be calculated when
   * at least 3 questions are answered on that subscale.
   */
  const MIN_ANSWERS_NEEDED_TO_CALCULATE_SCORE = 3
  const MAX_SCORE_PER_QUESTION = 2

  const valid_answers_in_subscale = R.compose(
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input))
  )(inputs_in_subscale)

  if (valid_answers_in_subscale.length < MIN_ANSWERS_NEEDED_TO_CALCULATE_SCORE)
    return R.set(scoreLens, MISSING_MESSAGE, subscale)

  /**
   * Score is always expressed on a scale of 10
   */
  const MULTIPLIER = 10
  const score_on_a_scale_of_10 =
    (R.sum(valid_answers_in_subscale) /
      (valid_answers_in_subscale.length * MAX_SCORE_PER_QUESTION)) *
    MULTIPLIER

  /**
   * Always round to the nearest integer
   */
  return R.set(scoreLens, Math.round(score_on_a_scale_of_10), subscale)
}

const calculate_score_for_impact_scale = (
  subscale: SubscaleType
): SubscaleType => {
  const inputs_in_subscale = R.view(inputsInSubscaleLens, subscale)

  /**
   * Transform "Not at all score (999)" to 0
   */
  //@ts-expect-error to do
  const transform_not_at_all_score = score => (score === NOT_AT_ALL ? 0 : score)

  const valid_answers_in_subscale = R.compose(
    R.filter(is_numeric),
    R.map(transform_not_at_all_score),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input))
  )(inputs_in_subscale)

  if (valid_answers_in_subscale.length === 0)
    return R.set(scoreLens, MISSING_MESSAGE, subscale)

  const score = R.sum(valid_answers_in_subscale)

  /**
   * Always round to the nearest integer
   */
  return R.set(scoreLens, score, subscale)
}

export const calculate_subscale_scores = (
  subscale: SubscaleType
): SubscaleType => {
  const PROBLEM_SCALES_IDS = [
    'EMOTIONAL_PROBLEMS',
    'CONDUCT_PROBLEMS',
    'HYPERACTIVITY',
    'PEER_PROBLEMS',
    'PROSOCIAL',
  ]

  const IMPACT_SCALES_IDS = [
    'IMPACT_PARENT_REPORTED',
    'IMPACT_TEACHER_REPORTED',
    'IMPACT_SELF_REPORTED',
  ]

  const subscale_id = R.view(subscaleIdLens, subscale)

  if (PROBLEM_SCALES_IDS.includes(subscale_id)) {
    return calculate_score_for_problem_scale(subscale)
  }

  if (IMPACT_SCALES_IDS.includes(subscale_id)) {
    return calculate_score_for_impact_scale(subscale)
  }

  return subscale
}
