export const min_response = {
  HADS_01: 0, // Reverse scored, but is handled in form by using correct answer values
  HADS_02: 0,
  HADS_03: 0, // Reverse scored, but is handled in form by using correct answer values
  HADS_04: 0,
  HADS_05: 0, // Reverse scored, but is handled in form by using correct answer values
  HADS_06: 0, // Reverse scored, but is handled in form by using correct answer values
  HADS_07: 0,
  HADS_08: 0, // Reverse scored, but is handled in form by using correct answer values
  HADS_09: 0,
  HADS_10: 0, // Reverse scored, but is handled in form by using correct answer values
  HADS_11: 0, // Reverse scored, but is handled in form by using correct answer values
  HADS_12: 0,
  HADS_13: 0, // Reverse scored, but is handled in form by using correct answer values
  HADS_14: 0,
}

/**
 * Subscale scores are on /21 so median score would be 10.5
 * Calculation, however, does not work with half points so we'll
 * take 10 as the median/middle score.
 *
 * I.e. each subscale has a total score of 10 in the below response
 */
export const median_response = {
  HADS_01: 2,
  HADS_02: 1,
  HADS_03: 2,
  HADS_04: 1,
  HADS_05: 2,
  HADS_06: 1,
  HADS_07: 1,
  HADS_08: 1,
  HADS_09: 1,
  HADS_10: 2,
  HADS_11: 1,
  HADS_12: 2,
  HADS_13: 1,
  HADS_14: 2,
}

export const max_response = {
  HADS_01: 3,
  HADS_02: 3,
  HADS_03: 3,
  HADS_04: 3,
  HADS_05: 3,
  HADS_06: 3,
  HADS_07: 3,
  HADS_08: 3,
  HADS_09: 3,
  HADS_10: 3,
  HADS_11: 3,
  HADS_12: 3,
  HADS_13: 3,
  HADS_14: 3,
}

/**
 * Expected subscales scores
 * Fear = 11/21
 * Depression 7/21
 */
export const random_response = {
  HADS_01: 3,
  HADS_02: 1,
  HADS_03: 1,
  HADS_04: 0,
  HADS_05: 0,
  HADS_06: 2,
  HADS_07: 1,
  HADS_08: 3,
  HADS_09: 2,
  HADS_10: 0,
  HADS_11: 1,
  HADS_12: 1,
  HADS_13: 3,
  HADS_14: 0,
}
