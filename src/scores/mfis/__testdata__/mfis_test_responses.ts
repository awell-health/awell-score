import {
  ALMOST_ALWAYS,
  NEVER,
  OFTEN,
  RARELY,
  SOMETIMES,
} from '../definition/mfis_inputs'

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
  Q19: NEVER,
  Q20: NEVER,
  Q21: NEVER,
}

export const median_response = {
  Q01: SOMETIMES,
  Q02: SOMETIMES,
  Q03: SOMETIMES,
  Q04: SOMETIMES,
  Q05: SOMETIMES,
  Q06: SOMETIMES,
  Q07: SOMETIMES,
  Q08: SOMETIMES,
  Q09: SOMETIMES,
  Q10: SOMETIMES,
  Q11: SOMETIMES,
  Q12: SOMETIMES,
  Q13: SOMETIMES,
  Q14: SOMETIMES,
  Q15: SOMETIMES,
  Q16: SOMETIMES,
  Q17: SOMETIMES,
  Q18: SOMETIMES,
  Q19: SOMETIMES,
  Q20: SOMETIMES,
  Q21: SOMETIMES,
}

export const worst_response = {
  Q01: ALMOST_ALWAYS,
  Q02: ALMOST_ALWAYS,
  Q03: ALMOST_ALWAYS,
  Q04: ALMOST_ALWAYS,
  Q05: ALMOST_ALWAYS,
  Q06: ALMOST_ALWAYS,
  Q07: ALMOST_ALWAYS,
  Q08: ALMOST_ALWAYS,
  Q09: ALMOST_ALWAYS,
  Q10: ALMOST_ALWAYS,
  Q11: ALMOST_ALWAYS,
  Q12: ALMOST_ALWAYS,
  Q13: ALMOST_ALWAYS,
  Q14: ALMOST_ALWAYS,
  Q15: ALMOST_ALWAYS,
  Q16: ALMOST_ALWAYS,
  Q17: ALMOST_ALWAYS,
  Q18: ALMOST_ALWAYS,
  Q19: ALMOST_ALWAYS,
  Q20: ALMOST_ALWAYS,
  Q21: ALMOST_ALWAYS,
}

/**
 * Physicial subscale score = 19
 * Cognitive subscale score = 18
 * Psycosocial subscale score = 3
 * Total = 40
 */
export const random_response = {
  Q01: NEVER, // Cognitive subscale
  Q02: ALMOST_ALWAYS, // Cognitive subscale
  Q03: OFTEN, // Cognitive subscale
  Q04: RARELY, // Physicial subscale
  Q05: SOMETIMES, // Cognitive subscale
  Q06: RARELY, // Physicial subscale
  Q07: NEVER, // Physicial subscale
  Q08: RARELY, // Psychosocial subscale
  Q09: SOMETIMES, // Psychosocial subscale
  Q10: ALMOST_ALWAYS, // Physicial subscale
  Q11: RARELY, // Cognitive subscale
  Q12: SOMETIMES, // Cognitive subscale
  Q13: ALMOST_ALWAYS, // Physicial subscale
  Q14: RARELY, // Physicial subscale
  Q15: NEVER, // Cognitive subscale
  Q16: SOMETIMES, // Cognitive subscale
  Q17: NEVER, // Physicial subscale
  Q18: NEVER, // Cognitive subscale
  Q19: ALMOST_ALWAYS, // Cognitive subscale
  Q20: ALMOST_ALWAYS, // Physicial subscale
  Q21: ALMOST_ALWAYS, // Physicial subscale
}
