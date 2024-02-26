/**
 * Expected scores:
 * PCS-12 (Physical Score): 23.99938
 * MCS-12 (Mental Score): 19.06444
 */
export const worst_response = {
  SF12_Q01: 5, // reverse scored
  SF12_Q02: 1,
  SF12_Q03: 1,
  SF12_Q04: 1,
  SF12_Q05: 1,
  SF12_Q06: 1,
  SF12_Q07: 1,
  SF12_Q08: 5, // reverse scored
  SF12_Q09: 6, // reverse scored
  SF12_Q10: 6, // reverse scored
  SF12_Q11: 1,
  SF12_Q12: 1,
}

export const median_response = {
  SF12_Q01: 3,
  SF12_Q02: 2, // Scored from 1 to 3 so median is 2
  SF12_Q03: 2, // Scored from 1 to 3 so median is 2
  SF12_Q04: 2, // scored from 1 to 2
  SF12_Q05: 2, // scored from 1 to 2
  SF12_Q06: 1, // scored from 1 to 2
  SF12_Q07: 1, // scored from 1 to 2
  SF12_Q08: 3,
  SF12_Q09: 3,
  SF12_Q10: 3,
  SF12_Q11: 3,
  SF12_Q12: 3,
}

export const best_response = {
  SF12_Q01: 1, // 1  is recoded to 5
  SF12_Q02: 3, // Max score is 3
  SF12_Q03: 3, // Max score is 3
  SF12_Q04: 2,
  SF12_Q05: 2,
  SF12_Q06: 2,
  SF12_Q07: 2,
  SF12_Q08: 1, // 1  is recoded to 5
  SF12_Q09: 1, // 1  is recoded to 6
  SF12_Q10: 1, // 1  is recoded to 6
  SF12_Q11: 6,
  SF12_Q12: 5,
}

/**
 * Expected scores:
 * PCS-12 (Physical Score): 37.10464
 * MCS-12 (Mental Score): 46.00098
 */
export const random_response = {
  SF12_Q01: 3,
  SF12_Q02: 1,
  SF12_Q03: 2,
  SF12_Q04: 1,
  SF12_Q05: 2,
  SF12_Q06: 1,
  SF12_Q07: 2,
  SF12_Q08: 4,
  SF12_Q09: 4,
  SF12_Q10: 1,
  SF12_Q11: 4,
  SF12_Q12: 3,
}
