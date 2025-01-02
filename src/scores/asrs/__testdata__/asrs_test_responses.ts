import {
  NEVER,
  OFTEN,
  RARELY,
  SOMETIMES,
  VERY_OFTEN,
} from '../definition/asrs_inputs'

export const best_response = {
  Q01: NEVER,
  Q02: NEVER,
  Q03: NEVER,
  Q04: NEVER,
  Q05: NEVER,
  Q06: NEVER,
  Q07: NEVER,
  Q08: NEVER,
  Q09: NEVER,
  Q10: NEVER,
  Q11: NEVER,
  Q12: NEVER,
  Q13: NEVER,
  Q14: NEVER,
  Q15: NEVER,
  Q16: NEVER,
  Q17: NEVER,
  Q18: NEVER,
}

export const worst_response = {
  Q01: VERY_OFTEN,
  Q02: VERY_OFTEN,
  Q03: VERY_OFTEN,
  Q04: VERY_OFTEN,
  Q05: VERY_OFTEN,
  Q06: VERY_OFTEN,
  Q07: VERY_OFTEN,
  Q08: VERY_OFTEN,
  Q09: VERY_OFTEN,
  Q10: VERY_OFTEN,
  Q11: VERY_OFTEN,
  Q12: VERY_OFTEN,
  Q13: VERY_OFTEN,
  Q14: VERY_OFTEN,
  Q15: VERY_OFTEN,
  Q16: VERY_OFTEN,
  Q17: VERY_OFTEN,
  Q18: VERY_OFTEN,
}

/**
 * Part A = 2
 * Part B = 5
 * Total = 7
 * Inattentive Subscale = 4
 * Hyperactive/Impulsive Subscale (Motor) = 2
 * Hyperactive/Impulsive Subscale (Verbal) = 1
 */
export const random_response = {
  Q01: NEVER,
  Q02: VERY_OFTEN, // 1
  Q03: OFTEN, // 1
  Q04: RARELY,
  Q05: SOMETIMES,
  Q06: RARELY,
  Q07: NEVER,
  Q08: RARELY,
  Q09: SOMETIMES, // 1
  Q10: VERY_OFTEN, // 1
  Q11: RARELY,
  Q12: SOMETIMES, // 1
  Q13: VERY_OFTEN, // 1
  Q14: RARELY,
  Q15: NEVER,
  Q16: SOMETIMES, // 1
  Q17: NEVER,
  Q18: NEVER,
}
