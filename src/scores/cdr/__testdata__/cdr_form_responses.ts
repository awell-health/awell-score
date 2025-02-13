/**
 * Scenario 1:
 * ------------
 * Memory = 0 AND NO impairment (≥0.5) in ≥2 secondary categories
 *
 * Outcome:
 * ------------
 * CDR = 0
 *
 * Manual checks:
 * ------------
 * MDCalc = 0
 * naccdata = 0
 */
export const scenario_1 = {
  MEMORY: 0,
  ORIENTATION: 0,
  JUDGEMENT_AND_PROBLEM_SOLVING: 0,
  COMMUNITY_AFFAIRS: 0,
  HOME_AND_HOBBIES: 1,
  PERSONAL_CARE: 0,
}

/**
 * Scenario 2:
 * ------------
 * Memory = 0 AND impairment (≥0.5) in ≥2 secondary categories
 *
 * Outcome:
 * ------------
 * CDR = 0.5
 *
 * Manual checks:
 * ------------
 * MDCalc = 0.5
 * naccdata = 0.5
 */
export const scenario_2 = {
  MEMORY: 0,
  ORIENTATION: 0,
  JUDGEMENT_AND_PROBLEM_SOLVING: 0.5,
  COMMUNITY_AFFAIRS: 0,
  HOME_AND_HOBBIES: 0,
  PERSONAL_CARE: 3,
}

/**
 * Scenario 3:
 * ------------
 * Memory = 0.5 AND NOT ≥ 3 of the other categories are scored ≥ 1
 *
 * Outcome:
 * ------------
 * CDR = 0.5
 *
 * Manual checks:
 * ------------
 * MDCalc = 0.5
 * naccdata = 0.5
 */
export const scenario_3 = {
  MEMORY: 0.5,
  ORIENTATION: 0,
  JUDGEMENT_AND_PROBLEM_SOLVING: 0.5,
  COMMUNITY_AFFAIRS: 0,
  HOME_AND_HOBBIES: 0.5,
  PERSONAL_CARE: 3,
}

/**
 * Scenario 4:
 * ------------
 * Memory = 0.5 AND ≥ 3 of the other categories are scored ≥ 1
 *
 * Outcome:
 * ------------
 * CDR = 1
 *
 * Manual checks:
 * ------------
 * MDCalc = 1
 * naccdata = 1
 */
export const scenario_4 = {
  MEMORY: 0.5,
  ORIENTATION: 0.5,
  JUDGEMENT_AND_PROBLEM_SOLVING: 0.5,
  COMMUNITY_AFFAIRS: 2,
  HOME_AND_HOBBIES: 1,
  PERSONAL_CARE: 3,
}

/**
 * Scenario 5:
 * ------------
 * Memory > 0.5 AND ≥3 secondary categories have scores greater than M
 *
 * Additional info:
 * ------------
 * When M ≥1, CDR cannot be 0; in this circumstance, CDR = 0.5 when the majority of secondary categories are 0.
 * X = score of majority of secondary categories on the side of M that has the greater number of secondary categories. With ties in the secondary categories on one side of M, CDR = tied score closest to M (e.g. if M and another secondary category = 3, two secondary categories = 2, and two secondary categories = 1, then CDR = 2).
 *
 * Outcome:
 * ------------
 * CDR = 2
 *
 * Manual checks:
 * ------------
 * MDCalc = 2
 * naccdata = 2
 */
export const scenario_5 = {
  MEMORY: 2,
  ORIENTATION: 3,
  JUDGEMENT_AND_PROBLEM_SOLVING: 3,
  COMMUNITY_AFFAIRS: 3,
  HOME_AND_HOBBIES: 1,
  PERSONAL_CARE: 1,
}

/**
 * Scenario 6:
 * ------------
 * Memory > 0.5 AND ≥3 secondary categories have scores less than M
 *
 * Additional info:
 * ------------
 * When M ≥1, CDR cannot be 0; in this circumstance, CDR = 0.5 when the majority of secondary categories are 0.
 * X = score of majority of secondary categories on the side of M that has the greater number of secondary categories. With ties in the secondary categories on one side of M, CDR = tied score closest to M (e.g. if M and another secondary category = 3, two secondary categories = 2, and two secondary categories = 1, then CDR = 2).
 *
 * Outcome:
 * ------------
 * CDR = 2
 *
 * Manual checks:
 * ------------
 * MDCalc = 2
 * naccdata = 2
 */
export const scenario_6 = {
  MEMORY: 2,
  ORIENTATION: 1,
  JUDGEMENT_AND_PROBLEM_SOLVING: 1,
  COMMUNITY_AFFAIRS: 1,
  HOME_AND_HOBBIES: 3,
  PERSONAL_CARE: 3,
}

/**
 * Scenario 8:
 * ------------
 * Memory > 0.5 AND ≥3 secondary categories have the same score as M
 *
 * Additional info:
 * ------------
 * When 1-2 secondary categories have the same score as M, CDR = M as long as ≤2 secondary categories are on either side of M.
 *
 * Outcome:
 * ------------
 * CDR = 1
 *
 * Manual checks:
 * ------------
 * MDCalc = 1
 * naccdata = 1
 */
export const scenario_8 = {
  MEMORY: 1,
  ORIENTATION: 1,
  JUDGEMENT_AND_PROBLEM_SOLVING: 1,
  COMMUNITY_AFFAIRS: 1,
  HOME_AND_HOBBIES: 3,
  PERSONAL_CARE: 3,
}

/**
 * Scenario 9:
 * ------------
 * When M ≥1, CDR cannot be 0; in this circumstance, CDR = 0.5 when the majority of secondary categories are 0.
 *
 * Outcome:
 * ------------
 * CDR = 0.5
 *
 * Manual checks:
 * ------------
 * MDCalc = 0.5
 * naccdata = 0.5
 */
export const scenario_9 = {
  MEMORY: 1,
  ORIENTATION: 0,
  JUDGEMENT_AND_PROBLEM_SOLVING: 0,
  COMMUNITY_AFFAIRS: 0,
  HOME_AND_HOBBIES: 0,
  PERSONAL_CARE: 0,
}

/**
 * Scenario 10:
 * ------------
 * Memory = 2 AND secondary categories tie in scores on one side of M
 *
 * Additional info:
 * ------------
 * With ties in the secondary categories on one side of M, CDR = tied score closest to M.
 *
 * Outcome:
 * ------------
 * CDR = 1
 *
 * Manual checks:
 * ------------
 * MDCalc = 1
 * naccdata = 1
 */
export const scenario_10 = {
  MEMORY: 2,
  ORIENTATION: 2,
  JUDGEMENT_AND_PROBLEM_SOLVING: 2,
  COMMUNITY_AFFAIRS: 1,
  HOME_AND_HOBBIES: 1,
  PERSONAL_CARE: 1,
}

/**
 * Scenario 11:
 * ------------
 * Memory = 0.5 AND exactly 3 of the other categories are scored ≥ 1
 *
 * Outcome:
 * ------------
 * CDR = 1
 *
 * Manual checks:
 * ------------
 * MDCalc = 1
 * naccdata = 1
 */
export const scenario_11 = {
  MEMORY: 0.5,
  ORIENTATION: 1,
  JUDGEMENT_AND_PROBLEM_SOLVING: 1,
  COMMUNITY_AFFAIRS: 1,
  HOME_AND_HOBBIES: 0.5,
  PERSONAL_CARE: 0,
}

/**
 * Scenario 12:
 * ------------
 * Memory = 1 AND majority of secondary categories are 0
 *
 * Outcome:
 * ------------
 * CDR = 0.5
 *
 * Manual checks:
 * ------------
 * MDCalc = 0.5
 * naccdata = 0.5
 */
export const scenario_12 = {
  MEMORY: 1,
  ORIENTATION: 0,
  JUDGEMENT_AND_PROBLEM_SOLVING: 0,
  COMMUNITY_AFFAIRS: 0,
  HOME_AND_HOBBIES: 2,
  PERSONAL_CARE: 1,
}

/**
 * Scenario 13:
 * ------------
 * M and another secondary category = 3, two secondary categories = 2, and two secondary categories = 1
 *
 * Outcome:
 * ------------
 * CDR = 2
 *
 * Manual checks:
 * ------------
 * MDCalc = 2
 * naccdata = 2
 */
export const scenario_13 = {
  MEMORY: 3,
  ORIENTATION: 3,
  JUDGEMENT_AND_PROBLEM_SOLVING: 2,
  COMMUNITY_AFFAIRS: 2,
  HOME_AND_HOBBIES: 1,
  PERSONAL_CARE: 1,
}

/**
 * Scenario 14:
 * ------------
 * When M ≥1, CDR cannot be 0; in this circumstance,
 * CDR = 0.5 when the majority of secondary categories are 0.
 *
 * Outcome:
 * ------------
 * CDR = 0.5
 *
 * Manual checks:
 * ------------
 * MDCalc = 0.5
 * naccdata = 0.5
 */
export const scenario_14 = {
  MEMORY: 1,
  ORIENTATION: 0,
  JUDGEMENT_AND_PROBLEM_SOLVING: 0,
  COMMUNITY_AFFAIRS: 0,
  HOME_AND_HOBBIES: 2,
  PERSONAL_CARE: 2,
}
