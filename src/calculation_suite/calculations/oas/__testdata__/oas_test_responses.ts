export const best_response = {
  OAS_Q01: 1,
  OAS_Q02: 1,
  OAS_Q03: 6, // inverse
  OAS_Q04: 1,
  OAS_Q05: 1,
  OAS_Q06: 6, // inverse
  OAS_Q07: 1,
  OAS_Q08: 1,
  OAS_Q09: 6, // inverse
  OAS_Q10: 6, // inverse
  OAS_Q11: 6, // inverse
  OAS_Q12: 1,
  OAS_Q13: 6, // inverse
  OAS_Q14: 6, // inverse
  OAS_Q15: 1,
  OAS_Q16: 6, // inverse
  OAS_Q17: 6, // inverse
  OAS_Q18: 1,
  OAS_Q19: 6, // inverse
  OAS_Q20: 6, // inverse
  OAS_Q21: 1,
  OAS_Q22: 1,
  OAS_Q23: 6, // inverse
  OAS_Q24: 6, // inverse
  OAS_Q25: 6, // inverse
  OAS_Q26: 6, // inverse
  OAS_Q27: 6, // inverse
  OAS_Q28: 1,
  OAS_Q29: 1,
  OAS_Q30: 6, // inverse
  OAS_Q31: 6, // inverse
  OAS_Q32: 1,
  OAS_Q33: 1,
  OAS_Q34: 1,
}

export const worst_response = {
  OAS_Q01: 6,
  OAS_Q02: 6,
  OAS_Q03: 1, // inverse
  OAS_Q04: 6,
  OAS_Q05: 6,
  OAS_Q06: 1, // inverse
  OAS_Q07: 6,
  OAS_Q08: 6,
  OAS_Q09: 1, // inverse
  OAS_Q10: 1, // inverse
  OAS_Q11: 1, // inverse
  OAS_Q12: 6,
  OAS_Q13: 1, // inverse
  OAS_Q14: 1, // inverse
  OAS_Q15: 6,
  OAS_Q16: 1, // inverse
  OAS_Q17: 1, // inverse
  OAS_Q18: 6,
  OAS_Q19: 1, // inverse
  OAS_Q20: 1, // inverse
  OAS_Q21: 6,
  OAS_Q22: 6,
  OAS_Q23: 1, // inverse
  OAS_Q24: 1, // inverse
  OAS_Q25: 1, // inverse
  OAS_Q26: 1, // inverse
  OAS_Q27: 1, // inverse
  OAS_Q28: 6,
  OAS_Q29: 6,
  OAS_Q30: 1, // inverse
  OAS_Q31: 1, // inverse
  OAS_Q32: 6,
  OAS_Q33: 6,
  OAS_Q34: 6,
}

/**
 * Expected scores:
 * ----------------------
 * Daily activities sum: 1+2+4+5+1+6+2+1 = 22
 * Daily activities mean: 2.75
 * Knowledge and skills sum: 2+1 = 3
 * Knowledge and skills mean: 1.5
 * Self-esteem sum: 6+6+4+6+6+2+3+3+2= 38
 * Self-esteem mean: 4.22
 * Psychological/existential sum: 4+6+6+1+3+4 = 24
 * Psychological/existential mean: 4
 * Health sum: 6+3+3 = 12
 * Health mean: 4
 * Health professionals sum: 5+3+4 = 12
 * Health professionals mean: 4
 * Sexuality sum: 6+5+5 = 16
 * Sexuality mean: 5.33
 * Total score: 127
 * Mean score: 3.56
 */
export const random_response = {
  OAS_Q01: 1,
  OAS_Q02: 2,
  OAS_Q03: 3, // inverse = 4
  OAS_Q04: 5,
  OAS_Q05: 1,
  OAS_Q06: 1, // inverse = 6
  OAS_Q07: 2,
  OAS_Q08: 6,
  OAS_Q09: 1, // inverse = 6
  OAS_Q10: 1, // inverse = 6
  OAS_Q11: 3, // inverse = 4
  OAS_Q12: 4,
  OAS_Q13: 1, // inverse = 6
  OAS_Q14: 1, // inverse = 6
  OAS_Q15: 2,
  OAS_Q16: 1, // inverse = 6
  OAS_Q17: 1, // inverse = 6
  OAS_Q18: 5,
  OAS_Q19: 4, // inverse = 3
  OAS_Q20: 3, // inverse = 4
  OAS_Q21: 2,
  OAS_Q22: 1,
  OAS_Q23: 1, // inverse = 6
  OAS_Q24: 4, // inverse = 3
  OAS_Q25: 6, // inverse = 1
  OAS_Q26: 4, // inverse = 3
  OAS_Q27: 2, // inverse = 5
  OAS_Q28: 3,
  OAS_Q29: 3,
  OAS_Q30: 2, // inverse = 5
  OAS_Q31: 5, // inverse = 2
  OAS_Q32: 1,
  OAS_Q33: 4,
  OAS_Q34: 3,
}
