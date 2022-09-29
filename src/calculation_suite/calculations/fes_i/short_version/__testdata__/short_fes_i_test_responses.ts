const BEST_ANSWER = 1
const WORST_ANSWER = 4

export const best_response = {
  Q01: BEST_ANSWER,
  Q02: BEST_ANSWER,
  Q03: BEST_ANSWER,
  Q04: BEST_ANSWER,
  Q05: BEST_ANSWER,
  Q06: BEST_ANSWER,
  Q07: BEST_ANSWER,
}

export const worst_response = {
  Q01: WORST_ANSWER,
  Q02: WORST_ANSWER,
  Q03: WORST_ANSWER,
  Q04: WORST_ANSWER,
  Q05: WORST_ANSWER,
  Q06: WORST_ANSWER,
  Q07: WORST_ANSWER,
}

/**
 * Expected score = 20
 */
export const missing_data_response = {
  Q01: 2,
  Q02: 3,
  // Q03: MISSING,
  Q04: 3,
  Q05: 2,
  Q06: 4,
  Q07: 3,
}

/**
 * Expected score: 15
 */
export const random_response = {
  Q01: 1,
  Q02: 2,
  Q03: 1,
  Q04: 3,
  Q05: 1,
  Q06: 3,
  Q07: 4,
}
