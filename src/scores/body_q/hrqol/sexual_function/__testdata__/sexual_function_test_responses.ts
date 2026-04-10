export const best_response = {
  BODY_Q_SEXUAL_FUNCTION_Q01: 1,
  BODY_Q_SEXUAL_FUNCTION_Q02: 1,
  BODY_Q_SEXUAL_FUNCTION_Q03: 1,
  BODY_Q_SEXUAL_FUNCTION_Q04: 1,
  BODY_Q_SEXUAL_FUNCTION_Q05: 1,
}

export const worst_response = {
  BODY_Q_SEXUAL_FUNCTION_Q01: 4,
  BODY_Q_SEXUAL_FUNCTION_Q02: 4,
  BODY_Q_SEXUAL_FUNCTION_Q03: 4,
  BODY_Q_SEXUAL_FUNCTION_Q04: 4,
  BODY_Q_SEXUAL_FUNCTION_Q05: 4,
}

export const random_response = {
  BODY_Q_SEXUAL_FUNCTION_Q01: 3,
  BODY_Q_SEXUAL_FUNCTION_Q02: 2,
  BODY_Q_SEXUAL_FUNCTION_Q03: 1,
  BODY_Q_SEXUAL_FUNCTION_Q04: 4,
  BODY_Q_SEXUAL_FUNCTION_Q05: 2,
}

/**
 * 3 of 5 answered (2 missing < 50% threshold of 2.5).
 * Mean of [2,3,1] = 2.0 → imputed sum = 10 → round = 10 → Rasch = 39
 */
export const partial_response = {
  BODY_Q_SEXUAL_FUNCTION_Q01: 2,
  BODY_Q_SEXUAL_FUNCTION_Q02: 3,
  BODY_Q_SEXUAL_FUNCTION_Q03: 1,
  BODY_Q_SEXUAL_FUNCTION_Q04: undefined,
  BODY_Q_SEXUAL_FUNCTION_Q05: undefined,
}

/**
 * 2 of 5 answered (3 missing >= 50% threshold of 2.5) → null
 */
export const too_many_missing_response = {
  BODY_Q_SEXUAL_FUNCTION_Q01: 1,
  BODY_Q_SEXUAL_FUNCTION_Q02: 2,
  BODY_Q_SEXUAL_FUNCTION_Q03: undefined,
  BODY_Q_SEXUAL_FUNCTION_Q04: undefined,
  BODY_Q_SEXUAL_FUNCTION_Q05: undefined,
}
