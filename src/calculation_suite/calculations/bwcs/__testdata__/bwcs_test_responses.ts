import {
  DAILY,
  MORE_THAN_WEEKLY,
  NOT_AT_ALL,
  ONCE,
  TWO_TO_FOUR_TIMES,
} from '../definition/bwcs_inputs'

export const best_response = {
  Q01: NOT_AT_ALL,
  Q02: NOT_AT_ALL,
  Q03: NOT_AT_ALL,
  Q04: NOT_AT_ALL,
  Q05: 0,
}

export const median_response = {
  Q01: TWO_TO_FOUR_TIMES,
  Q02: TWO_TO_FOUR_TIMES,
  Q03: TWO_TO_FOUR_TIMES,
  Q04: TWO_TO_FOUR_TIMES,
  Q05: 5,
}

export const worst_response = {
  Q01: DAILY,
  Q02: DAILY,
  Q03: DAILY,
  Q04: DAILY,
  Q05: 10,
}

/**
 * Total = 10
 */
export const random_response = {
  Q01: ONCE, // 1
  Q02: DAILY, // 4
  Q03: MORE_THAN_WEEKLY, // 3
  Q04: NOT_AT_ALL, // 0
  Q05: 2, // 2
}
