import { calculate_subscale_scores } from './calculate_subscale_scores'
import { Data } from './types'

export const calculate_sleep_duration = (data: Data): number | null => {
  const SLEEP_DURATION_SCORE = calculate_subscale_scores(data, 'SLEEP_DURATION')

  if (SLEEP_DURATION_SCORE === null) {
    return null
  }

  let SLEEP_DURATION
  if (SLEEP_DURATION_SCORE > 7) {
    SLEEP_DURATION = 0
  } else if (SLEEP_DURATION_SCORE >= 6 && SLEEP_DURATION_SCORE <= 7) {
    SLEEP_DURATION = 1
  } else if (SLEEP_DURATION_SCORE >= 5 && SLEEP_DURATION_SCORE <= 6) {
    SLEEP_DURATION = 2
  } else {
    SLEEP_DURATION = 3
  }

  return SLEEP_DURATION
}
