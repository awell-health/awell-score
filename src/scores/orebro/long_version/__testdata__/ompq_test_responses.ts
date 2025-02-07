export const min_response = {
  OMPQ_Q05: ['neck'], // Array because this input is a multiple choice input with multiple answers allowed
  OMPQ_Q06: 1, // Min score = 1
  OMPQ_Q07: 1, // Min score = 1
  OMPQ_Q08: 0,
  OMPQ_Q09: 0,
  OMPQ_Q10: 0,
  OMPQ_Q11: 0,
  OMPQ_Q12: 10, // Reverse scored
  OMPQ_Q13: 0,
  OMPQ_Q14: 0,
  OMPQ_Q15: 0,
  OMPQ_Q16: 10, // Reverse scored
  OMPQ_Q17: 10, // Reverse scored
  OMPQ_Q18: 0,
  OMPQ_Q19: 0,
  OMPQ_Q20: 0,
  OMPQ_Q21: 10, // Reverse scored
  OMPQ_Q22: 10, // Reverse scored
  OMPQ_Q23: 10, // Reverse scored
  OMPQ_Q24: 10, // Reverse scored
  OMPQ_Q25: 10, // Reverse scored
}

export const median_response = {
  OMPQ_Q05: ['neck', 'shoulder'],
  OMPQ_Q06: 6,
  OMPQ_Q07: 5,
  OMPQ_Q08: 5,
  OMPQ_Q09: 5,
  OMPQ_Q10: 5,
  OMPQ_Q11: 5,
  OMPQ_Q12: 5,
  OMPQ_Q13: 5,
  OMPQ_Q14: 5,
  OMPQ_Q15: 5,
  OMPQ_Q16: 5,
  OMPQ_Q17: 5,
  OMPQ_Q18: 5,
  OMPQ_Q19: 5,
  OMPQ_Q20: 5,
  OMPQ_Q21: 5,
  OMPQ_Q22: 5,
  OMPQ_Q23: 5,
  OMPQ_Q24: 5,
  OMPQ_Q25: 5,
}

export const max_response = {
  OMPQ_Q05: [
    'neck',
    'shoulder',
    'arm',
    'upper_back',
    'lower_back',
    'leg',
    'other',
  ],
  OMPQ_Q06: 10,
  OMPQ_Q07: 10,
  OMPQ_Q08: 10,
  OMPQ_Q09: 10,
  OMPQ_Q10: 10,
  OMPQ_Q11: 10,
  OMPQ_Q12: 0, // Reverse scored
  OMPQ_Q13: 10,
  OMPQ_Q14: 10,
  OMPQ_Q15: 10,
  OMPQ_Q16: 0, // Reverse scored
  OMPQ_Q17: 0, // Reverse scored
  OMPQ_Q18: 10,
  OMPQ_Q19: 10,
  OMPQ_Q20: 10,
  OMPQ_Q21: 0, // Reverse scored
  OMPQ_Q22: 0, // Reverse scored
  OMPQ_Q23: 0, // Reverse scored
  OMPQ_Q24: 0, // Reverse scored
  OMPQ_Q25: 0, // Reverse scored
}

/**
 * Expected score = 70.
 */
export const random_response = {
  OMPQ_Q05: ['neck', 'shoulder', 'arm'],
  OMPQ_Q06: 1,
  OMPQ_Q07: 5,
  OMPQ_Q08: 1,
  OMPQ_Q09: 0,
  OMPQ_Q10: 8,
  OMPQ_Q11: 7,
  OMPQ_Q12: 6, // Reverse scored
  OMPQ_Q13: 5,
  OMPQ_Q14: 3,
  OMPQ_Q15: 2,
  OMPQ_Q16: 7, // Reverse scored
  OMPQ_Q17: 4, // Reverse scored
  OMPQ_Q18: 2,
  OMPQ_Q19: 2,
  OMPQ_Q20: 3,
  OMPQ_Q21: 4, // Reverse scored
  OMPQ_Q22: 7, // Reverse scored
  OMPQ_Q23: 8, // Reverse scored
  OMPQ_Q24: 9, // Reverse scored
  OMPQ_Q25: 10, // Reverse scored
}
