/**
 * See README for more information
 */
export const response_with_q7_answered_not_relevant = {
  DLQI_Q07: 999, // 999 is "not relevant"
} // Q7 will be assigned a value of 0

export const response_with_q7_answered_yes = {
  DLQI_Q07: 3, // "Yes" has a value of 3
} // Q7 will be assigned a value of 3

/**
 * When question 7 is answered "no", an additional
 * question shows up to determine the score that
 * needs to be assigned to question 7
 */
export const response_with_q7_answered_no_and_indicated_a_lot_on_sub_question =
  {
    DLQI_Q07: 0, // "No" has a value of 0
    DLQI_Q07_SUB: 2, // "A lot" has a value of 2
  } // Q7 will be assigned a value of 2

export const response_with_q7_answered_no_and_indicated_a_little_on_sub_question =
  {
    DLQI_Q07: 0, // "No" has a value of 0
    DLQI_Q07_SUB: 1, // "A little" has a value of 1
  } // Q7 will be assigned a value of 1

export const response_with_q7_answered_no_and_indicated_not_at_all_on_sub_question =
  {
    DLQI_Q07: 0, // "No" has a value of 0
    DLQI_Q07_SUB: 0, // "Not at all" has a value of 0
  } // Q7 will be assigned a value of 0
