/* eslint-disable no-magic-numbers */

import type { InputType } from '../../../../types/calculations.types'
import { calculate_subscale_scores } from './calculate_subscale_scores'

export const calculate_sleep_latency = (
  inputs_with_answers: Array<InputType>
): number | string => {
  const SLEEP_LATENCY_SCORE = calculate_subscale_scores(
    inputs_with_answers,
    'SLEEP_LATENCY'
  )
  if (typeof SLEEP_LATENCY_SCORE === 'string') {
    return SLEEP_LATENCY_SCORE
  }

  let SLEEP_LATENCY
  if (SLEEP_LATENCY_SCORE === 0) {
    SLEEP_LATENCY = 0
  } else if (SLEEP_LATENCY_SCORE >= 1 && SLEEP_LATENCY_SCORE <= 2) {
    SLEEP_LATENCY = 1
  } else if (SLEEP_LATENCY_SCORE >= 3 && SLEEP_LATENCY_SCORE <= 4) {
    SLEEP_LATENCY = 2
  } else {
    SLEEP_LATENCY = 3
  }

  return SLEEP_LATENCY
}
