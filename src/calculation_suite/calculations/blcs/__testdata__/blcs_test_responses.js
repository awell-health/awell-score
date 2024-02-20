// @flow
import {
  DAILY,
  MORE_THAN_WEEKLY,
  NEVER,
  ONCE,
  TWO_TO_FOUR_TIMES
} from '../definition/blcs_inputs'

export const best_response = {
  Q01: NEVER,
  Q02: NEVER,
  Q03: NEVER,
  Q04: 0
}

export const median_response = {
  Q01: TWO_TO_FOUR_TIMES,
  Q02: TWO_TO_FOUR_TIMES,
  Q03: TWO_TO_FOUR_TIMES,
  Q04: 5
}

export const worst_response = {
  Q01: DAILY,
  Q02: DAILY,
  Q03: DAILY,
  Q04: 10
}

/**
 * Total = 10
 */
export const random_response = {
  Q01: ONCE, // 1
  Q02: DAILY, // 4
  Q03: MORE_THAN_WEEKLY, // 3
  Q04: 2 // 2
}
