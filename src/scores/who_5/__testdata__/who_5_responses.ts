/**
 * Worst possible well-being.
 * Raw score = 0, percentage score = 0
 */
export const minimum_response = {
  WHO5_Q01: 0,
  WHO5_Q02: 0,
  WHO5_Q03: 0,
  WHO5_Q04: 0,
  WHO5_Q05: 0,
}

/**
 * Raw score = 5 × 3 = 15, percentage score = 15 × 4 = 60
 */
export const median_response = {
  WHO5_Q01: 3,
  WHO5_Q02: 3,
  WHO5_Q03: 3,
  WHO5_Q04: 3,
  WHO5_Q05: 3,
}

/**
 * Best possible well-being.
 * Raw score = 5 × 5 = 25, percentage score = 25 × 4 = 100
 */
export const maximum_response = {
  WHO5_Q01: 5,
  WHO5_Q02: 5,
  WHO5_Q03: 5,
  WHO5_Q04: 5,
  WHO5_Q05: 5,
}

/**
 * Raw score = 4 + 1 + 0 + 2 + 3 = 10, percentage score = 10 × 4 = 40
 *
 * Below the suggested cut-off of a raw score of 13 / a percentage score of 50.
 */
export const random_response = {
  WHO5_Q01: 4,
  WHO5_Q02: 1,
  WHO5_Q03: 0,
  WHO5_Q04: 2,
  WHO5_Q05: 3,
}
