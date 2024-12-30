/* eslint-disable no-magic-numbers */

import type { InputType } from '../../../src/types/calculations.types'
import { calculate_subscale_scores } from './calculate_subscale_scores'

export const calculate_sleep_disturbance = (
  inputs_with_answers: Array<InputType>,
): number | string => {
  const SLEEP_DISTURBANCES_SCORE = calculate_subscale_scores(
    inputs_with_answers,
    'SLEEP_DISTURBANCES',
  )

  if (typeof SLEEP_DISTURBANCES_SCORE === 'string') {
    return SLEEP_DISTURBANCES_SCORE
  }

  let SLEEP_DISTURBANCES = 0
  // Determine overall score for sleep disturbance based on the total score
  if (SLEEP_DISTURBANCES_SCORE >= 1 && SLEEP_DISTURBANCES_SCORE <= 9) {
    SLEEP_DISTURBANCES = 1
  } else if (SLEEP_DISTURBANCES_SCORE >= 10 && SLEEP_DISTURBANCES_SCORE <= 18) {
    SLEEP_DISTURBANCES = 2
  } else if (SLEEP_DISTURBANCES_SCORE >= 19 && SLEEP_DISTURBANCES_SCORE <= 27) {
    SLEEP_DISTURBANCES = 3
  }

  return SLEEP_DISTURBANCES
}
