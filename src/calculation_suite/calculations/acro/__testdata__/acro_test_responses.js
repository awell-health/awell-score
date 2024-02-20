// @flow
import {
  ALWAYS,
  COMPLETELY_AGREE,
  COMPLETELY_DISAGREE,
  MODERATELY_AGREE,
  MODERATELY_DISAGREE,
  MOST_OF_THE_TIME,
  NEITHER_AGREE_NOR_DISAGREE,
  NEVER,
  RARELY,
  SOMETIMES
} from '../definition/acro_inputs'
// LOWER THE TOTAL THE WORSE IT IS 100 is the best 0 is the worst

// TOTAL 110
export const best_response = {
  Q01: COMPLETELY_DISAGREE,
  Q02: NEVER,
  Q03: COMPLETELY_DISAGREE,
  Q04: NEVER,
  Q05: NEVER,
  Q06: NEVER,
  Q07: NEVER,
  Q08: NEVER,
  Q09: COMPLETELY_DISAGREE,
  Q10: NEVER,
  Q11: NEVER,
  Q12: NEVER,
  Q13: COMPLETELY_DISAGREE,
  Q14: COMPLETELY_DISAGREE,
  Q15: COMPLETELY_DISAGREE,
  Q16: NEVER,
  Q17: NEVER,
  Q18: NEVER,
  Q19: COMPLETELY_DISAGREE,
  Q20: NEVER,
  Q21: NEVER,
  Q22: COMPLETELY_DISAGREE
}

/**
 * Physicial subscale score = 18
 * Psychological appearance subscale score = 19
 * Psychological personal relationships subscale score = 18
 * Total = 55
 */
export const median_response = {
  Q01: NEITHER_AGREE_NOR_DISAGREE, // physical
  Q02: SOMETIMES, // appearance
  Q03: NEITHER_AGREE_NOR_DISAGREE, // physical
  Q04: SOMETIMES, // appearance
  Q05: SOMETIMES, // personal relationships
  Q06: SOMETIMES, // personal relationships
  Q07: SOMETIMES, // appearance
  Q08: SOMETIMES, // personal relationships
  Q09: SOMETIMES, // physical
  Q10: SOMETIMES, // personal relationships
  Q11: SOMETIMES, // appearance
  Q12: SOMETIMES, // appearance
  Q13: NEITHER_AGREE_NOR_DISAGREE, // physical
  Q14: NEITHER_AGREE_NOR_DISAGREE, // physical
  Q15: NEITHER_AGREE_NOR_DISAGREE, // physical
  Q16: SOMETIMES, // appearance
  Q17: SOMETIMES, // appearance
  Q18: SOMETIMES, // personal relationships
  Q19: NEITHER_AGREE_NOR_DISAGREE, // physical
  Q20: SOMETIMES, // personal relationships
  Q21: SOMETIMES, // personal relationships
  Q22: NEITHER_AGREE_NOR_DISAGREE // physical
}

// TOTAL 22
export const worst_response = {
  Q01: COMPLETELY_AGREE,
  Q02: ALWAYS,
  Q03: COMPLETELY_AGREE,
  Q04: ALWAYS,
  Q05: ALWAYS,
  Q06: ALWAYS,
  Q07: ALWAYS,
  Q08: ALWAYS,
  Q09: COMPLETELY_AGREE,
  Q10: ALWAYS,
  Q11: ALWAYS,
  Q12: ALWAYS,
  Q13: COMPLETELY_AGREE,
  Q14: COMPLETELY_AGREE,
  Q15: COMPLETELY_AGREE,
  Q16: ALWAYS,
  Q17: ALWAYS,
  Q18: ALWAYS,
  Q19: COMPLETELY_AGREE,
  Q20: ALWAYS,
  Q21: ALWAYS,
  Q22: COMPLETELY_AGREE
}

/**
 * Physicial subscale score = 24
 * Psychological appearance subscale score = 26
 * Psychological personal relationships subscale score = 19
 * Total = 69
 */
export const random_response = {
  Q01: MODERATELY_AGREE, // 2 Physicial subscale
  Q02: RARELY, // 4 Psychological appearance subscale
  Q03: MODERATELY_AGREE, // 2 Physicial subscale
  Q04: NEVER, // 5 Psychological appearance subscale
  Q05: MOST_OF_THE_TIME, // 2 Psychological personal relationships subscale
  Q06: RARELY, // 4 Psychological personal relationships subscale
  Q07: RARELY, // 4 Psychological appearance subscale
  Q08: NEVER, // 5 Psychological personal relationships subscale
  Q09: NEITHER_AGREE_NOR_DISAGREE, // 3 Physicial subscale
  Q10: ALWAYS, // 1 Psychological personal relationships subscale
  Q11: SOMETIMES, // 3 Psychological appearance subscale
  Q12: SOMETIMES, // 3 Psychological appearance subscale
  Q13: COMPLETELY_AGREE, // 1 Physicial subscale
  Q14: MODERATELY_DISAGREE, // 4 Physicial subscale
  Q15: COMPLETELY_DISAGREE, // 5 Physicial subscale
  Q16: SOMETIMES, // 3 Psychological appearance subscale
  Q17: RARELY, // 4 Psychological appearance subscale
  Q18: ALWAYS, // 1 Psychological personal relationships subscale
  Q19: MODERATELY_AGREE, // 2 Physicial subscale
  Q20: ALWAYS, // 1 Psychological personal relationships subscale
  Q21: NEVER, // 5 Psychological personal relationships subscale
  Q22: COMPLETELY_DISAGREE // 5 Physicial subscale
}
