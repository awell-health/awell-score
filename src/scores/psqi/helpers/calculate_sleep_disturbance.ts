import { calculate_subscale_scores } from './calculate_subscale_scores'
import { Data } from './types'

export const calculate_sleep_disturbance = (data: Data): number | null => {
  const SLEEP_DISTURBANCES_SCORE = calculate_subscale_scores(
    data,
    'SLEEP_DISTURBANCES',
  )

  if (SLEEP_DISTURBANCES_SCORE === null) {
    return null
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
