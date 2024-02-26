/* eslint-disable no-magic-numbers */

import type { InputType } from '../../../../types/calculations.types'
import { calculate_subscale_scores } from './calculate_subscale_scores'

export const calculate_sleep_duration = (
  inputs_with_answers: Array<InputType>
): number | string => {
  const DAYTIME_DYSFUNCTION_SCORE = calculate_subscale_scores(
    inputs_with_answers,
    'SLEEP_DURATION'
  )

  if (typeof DAYTIME_DYSFUNCTION_SCORE === 'string') {
    return DAYTIME_DYSFUNCTION_SCORE
  }

  let SLEEP_DURATION
  if (DAYTIME_DYSFUNCTION_SCORE > 7) {
    SLEEP_DURATION = 0
  } else if (DAYTIME_DYSFUNCTION_SCORE >= 6 && DAYTIME_DYSFUNCTION_SCORE <= 7) {
    SLEEP_DURATION = 1
  } else if (DAYTIME_DYSFUNCTION_SCORE >= 5 && DAYTIME_DYSFUNCTION_SCORE <= 6) {
    SLEEP_DURATION = 2
  } else {
    SLEEP_DURATION = 3
  }

  return SLEEP_DURATION
}
