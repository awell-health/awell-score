export const worst_response = {
  EORTC_QLQ_PR25_Q31: 4,
  EORTC_QLQ_PR25_Q32: 4,
  EORTC_QLQ_PR25_Q33: 4,
  EORTC_QLQ_PR25_Q34: 4,
  EORTC_QLQ_PR25_Q35: 4,
  EORTC_QLQ_PR25_Q36: 4,
  EORTC_QLQ_PR25_Q37: 4,
  EORTC_QLQ_PR25_Q38: 4,
  EORTC_QLQ_PR25_Q39: 4,
  EORTC_QLQ_PR25_Q40: 4,
  EORTC_QLQ_PR25_Q41: 4,
  EORTC_QLQ_PR25_Q42: 4,
  EORTC_QLQ_PR25_Q43: 4,
  EORTC_QLQ_PR25_Q44: 4,
  EORTC_QLQ_PR25_Q45: 4,
  EORTC_QLQ_PR25_Q46: 4,
  EORTC_QLQ_PR25_Q47: 4,
  EORTC_QLQ_PR25_Q48: 4,
  EORTC_QLQ_PR25_Q49: 4,
  EORTC_QLQ_PR25_Q50: 1, // reverse scored
  EORTC_QLQ_PR25_Q51: 1, // reverse scored
  // Question 52-55 (=sexual functioning scale) are not applicable if Q51 is "1"
}

export const best_response = {
  EORTC_QLQ_PR25_Q31: 1,
  EORTC_QLQ_PR25_Q32: 1,
  EORTC_QLQ_PR25_Q33: 1,
  EORTC_QLQ_PR25_Q34: 1,
  EORTC_QLQ_PR25_Q35: 1,
  EORTC_QLQ_PR25_Q36: 1,
  EORTC_QLQ_PR25_Q37: 1,
  EORTC_QLQ_PR25_Q38: 1,
  EORTC_QLQ_PR25_Q39: 1,
  EORTC_QLQ_PR25_Q40: 1,
  EORTC_QLQ_PR25_Q41: 1,
  EORTC_QLQ_PR25_Q42: 1,
  EORTC_QLQ_PR25_Q43: 1,
  EORTC_QLQ_PR25_Q44: 1,
  EORTC_QLQ_PR25_Q45: 1,
  EORTC_QLQ_PR25_Q46: 1,
  EORTC_QLQ_PR25_Q47: 1,
  EORTC_QLQ_PR25_Q48: 1,
  EORTC_QLQ_PR25_Q49: 1,
  EORTC_QLQ_PR25_Q50: 4, // reverse scored
  EORTC_QLQ_PR25_Q51: 4, // reverse scored
  EORTC_QLQ_PR25_Q52: 4, // reverse scored
  EORTC_QLQ_PR25_Q53: 1,
  EORTC_QLQ_PR25_Q54: 1,
  EORTC_QLQ_PR25_Q55: 1,
}

export const random_response = {
  EORTC_QLQ_PR25_Q31: 1,
  EORTC_QLQ_PR25_Q32: 2,
  EORTC_QLQ_PR25_Q33: 3,
  EORTC_QLQ_PR25_Q34: 4,
  EORTC_QLQ_PR25_Q35: 4,
  EORTC_QLQ_PR25_Q36: 3,
  EORTC_QLQ_PR25_Q37: 1,
  EORTC_QLQ_PR25_Q38: 2,
  EORTC_QLQ_PR25_Q39: 1,
  EORTC_QLQ_PR25_Q40: 3,
  EORTC_QLQ_PR25_Q41: 3,
  EORTC_QLQ_PR25_Q42: 1,
  EORTC_QLQ_PR25_Q43: 4,
  EORTC_QLQ_PR25_Q44: 4,
  EORTC_QLQ_PR25_Q45: 1,
  EORTC_QLQ_PR25_Q46: 2,
  EORTC_QLQ_PR25_Q47: 2,
  EORTC_QLQ_PR25_Q48: 1,
  EORTC_QLQ_PR25_Q49: 3,
  EORTC_QLQ_PR25_Q50: 4,
  EORTC_QLQ_PR25_Q51: 3,
  EORTC_QLQ_PR25_Q52: 3,
  EORTC_QLQ_PR25_Q53: 1,
  EORTC_QLQ_PR25_Q54: 2,
  EORTC_QLQ_PR25_Q55: 1,
}

/**
 * Bladder Cancer Pathway AZ St. Lucas:
 * --------------------------------------
 * This PR-25 is normally only used for prostate cancer (male only)
 * But in the blader cancer pathway of AZSL, however, the PR-25 is also used and
 * inputs that are only applicable to men are hidden for women
 *
 * Inputs that are only applicable for male: Q49, Q53 and Q54
 */
export const best_female_response_without_male_related_questions = {
  EORTC_QLQ_PR25_Q31: 1,
  EORTC_QLQ_PR25_Q32: 1,
  EORTC_QLQ_PR25_Q33: 1,
  EORTC_QLQ_PR25_Q34: 1,
  EORTC_QLQ_PR25_Q35: 1,
  EORTC_QLQ_PR25_Q36: 1,
  EORTC_QLQ_PR25_Q37: 1,
  EORTC_QLQ_PR25_Q38: 1,
  EORTC_QLQ_PR25_Q39: 1,
  EORTC_QLQ_PR25_Q40: 1,
  EORTC_QLQ_PR25_Q41: 1,
  EORTC_QLQ_PR25_Q42: 1,
  EORTC_QLQ_PR25_Q43: 1,
  EORTC_QLQ_PR25_Q44: 1,
  EORTC_QLQ_PR25_Q45: 1,
  EORTC_QLQ_PR25_Q46: 1,
  EORTC_QLQ_PR25_Q47: 1,
  EORTC_QLQ_PR25_Q48: 1,
  EORTC_QLQ_PR25_Q50: 4, // reverse scored
  EORTC_QLQ_PR25_Q51: 4, // reverse scored
  EORTC_QLQ_PR25_Q52: 4, // reverse scored
  EORTC_QLQ_PR25_Q55: 1,
}
