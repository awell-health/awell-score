import { calculate_subscale_scores } from './calculate_subscale_scores'
import { Data } from './types'

export const calculate_sleep_latency = (data: Data): number | null => {
  const SLEEP_LATENCY_SCORE = calculate_subscale_scores(data, 'SLEEP_LATENCY')

  if (SLEEP_LATENCY_SCORE === null) {
    return null
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
