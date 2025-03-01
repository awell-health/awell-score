import { Data } from './types'
export const calculate_habitual_sleep_efficiency = (
  data: Data,
): number | null => {
  const GONE_TO_BED_TIME = data.Q01
  const WAKE_UP_TIME = data.Q03
  const SLEEP_DURATION = data.Q04

  if (
    GONE_TO_BED_TIME === undefined ||
    WAKE_UP_TIME === undefined ||
    SLEEP_DURATION === undefined
  ) {
    return null
  }

  let wakeUpTime = WAKE_UP_TIME
  const bedTime = GONE_TO_BED_TIME
  // If wake up time is before bed time, assume it's the next day
  if (wakeUpTime < bedTime) {
    wakeUpTime += 24
  }

  // Calculate the difference in hours
  const hoursInBed = wakeUpTime - bedTime

  const habitual_efficiency_score = (SLEEP_DURATION / hoursInBed) * 100

  if (habitual_efficiency_score >= 85) {
    return 0
  }

  if (habitual_efficiency_score >= 75 && habitual_efficiency_score <= 84) {
    return 1
  }

  if (habitual_efficiency_score >= 65 && habitual_efficiency_score <= 74) {
    return 2
  }

  return 3
}
