export const best_response = {
  WOOS_Q01: 0,
  WOOS_Q02: 0,
  WOOS_Q03: 0,
  WOOS_Q04: 0,
  WOOS_Q05: 0,
  WOOS_Q06: 0,
  WOOS_Q07: 0,
  WOOS_Q08: 0,
  WOOS_Q09: 0,
  WOOS_Q10: 0,
  WOOS_Q11: 0,
  WOOS_Q12: 0,
  WOOS_Q13: 0,
  WOOS_Q14: 0,
  WOOS_Q15: 0,
  WOOS_Q16: 0,
  WOOS_Q17: 0,
  WOOS_Q18: 0,
  WOOS_Q19: 0,
}

export const worst_response = {
  WOOS_Q01: 100,
  WOOS_Q02: 100,
  WOOS_Q03: 100,
  WOOS_Q04: 100,
  WOOS_Q05: 100,
  WOOS_Q06: 100,
  WOOS_Q07: 100,
  WOOS_Q08: 100,
  WOOS_Q09: 100,
  WOOS_Q10: 100,
  WOOS_Q11: 100,
  WOOS_Q12: 100,
  WOOS_Q13: 100,
  WOOS_Q14: 100,
  WOOS_Q15: 100,
  WOOS_Q16: 100,
  WOOS_Q17: 100,
  WOOS_Q18: 100,
  WOOS_Q19: 100,
}

/**
 * Physical Symptoms (Q01-Q06): 10 + 20 + 30 + 40 + 50 + 60 = 210
 * Sports/Recreation/Work (Q07-Q11): 15 + 25 + 35 + 45 + 55 = 175
 * Lifestyle (Q12-Q16): 5 + 70 + 80 + 90 + 10 = 255
 * Emotions (Q17-Q19): 65 + 75 + 85 = 225
 * Total: 210 + 175 + 255 + 225 = 865
 * Percentage of normal: (1900 - 865) / 19 = 54.47368421...
 */
export const random_response = {
  WOOS_Q01: 10,
  WOOS_Q02: 20,
  WOOS_Q03: 30,
  WOOS_Q04: 40,
  WOOS_Q05: 50,
  WOOS_Q06: 60,
  WOOS_Q07: 15,
  WOOS_Q08: 25,
  WOOS_Q09: 35,
  WOOS_Q10: 45,
  WOOS_Q11: 55,
  WOOS_Q12: 5,
  WOOS_Q13: 70,
  WOOS_Q14: 80,
  WOOS_Q15: 90,
  WOOS_Q16: 10,
  WOOS_Q17: 65,
  WOOS_Q18: 75,
  WOOS_Q19: 85,
}
