export const response_with_one_missing_item = {
  DLQI_Q01: 3,
  DLQI_Q02: 3,
  DLQI_Q03: 3,
  DLQI_Q04: 3,
  DLQI_Q05: 3,
  DLQI_Q06: 3,
  DLQI_Q07: 3,
  DLQI_Q08: 3,
  DLQI_Q09: 3,
  // Question 10 is missing
}

export const response_with_more_than_one_missing_item = {
  DLQI_Q01: 3,
  DLQI_Q02: 3,
  DLQI_Q03: 3,
  DLQI_Q04: 3,
  DLQI_Q05: 3,
  // Question 6 to 10 are missing
}

export const min_response = {
  DLQI_Q01: 0,
  DLQI_Q02: 0,
  DLQI_Q03: 0,
  DLQI_Q04: 0,
  DLQI_Q05: 0,
  DLQI_Q06: 0,
  DLQI_Q07: 0,
  DLQI_Q07_SUB: 0,
  DLQI_Q08: 0,
  DLQI_Q09: 0,
  DLQI_Q10: 0,
}

/**
 * "Not relevant" has a value of 999 in the front-end but should be counted a 0 in the back-end
 */
export const min_response_with_not_relevant_answers = {
  DLQI_Q01: 0,
  DLQI_Q02: 0,
  DLQI_Q03: 999, // "Not relevant"
  DLQI_Q04: 999, // "Not relevant"
  DLQI_Q05: 999, // "Not relevant"
  DLQI_Q06: 999, // "Not relevant"
  DLQI_Q07: 999, // "Not relevant"
  DLQI_Q08: 999, // "Not relevant"
  DLQI_Q09: 999, // "Not relevant"
  DLQI_Q10: 999, // "Not relevant"
}

export const max_response = {
  DLQI_Q01: 3,
  DLQI_Q02: 3,
  DLQI_Q03: 3,
  DLQI_Q04: 3,
  DLQI_Q05: 3,
  DLQI_Q06: 3,
  DLQI_Q07: 3,
  DLQI_Q08: 3,
  DLQI_Q09: 3,
  DLQI_Q10: 3,
}

export const random_response = {
  DLQI_Q01: 3, // Very much
  DLQI_Q02: 2, // A lot
  DLQI_Q03: 1, // A little
  DLQI_Q04: 1, // A little
  DLQI_Q05: 3, // Very much
  DLQI_Q06: 3, // Very much
  DLQI_Q07: 0, // No
  DLQI_Q07_SUB: 1, // A little
  DLQI_Q08: 0, // Not at all
  DLQI_Q09: 1, // A little
  DLQI_Q10: 2, // A lot
}
