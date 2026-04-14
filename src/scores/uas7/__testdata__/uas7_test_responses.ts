export const best_response = {
  DAY_1_WHEALS: 0,
  DAY_1_ITCH: 0,
  DAY_2_WHEALS: 0,
  DAY_2_ITCH: 0,
  DAY_3_WHEALS: 0,
  DAY_3_ITCH: 0,
  DAY_4_WHEALS: 0,
  DAY_4_ITCH: 0,
  DAY_5_WHEALS: 0,
  DAY_5_ITCH: 0,
  DAY_6_WHEALS: 0,
  DAY_6_ITCH: 0,
  DAY_7_WHEALS: 0,
  DAY_7_ITCH: 0,
}

export const worst_response = {
  DAY_1_WHEALS: 3,
  DAY_1_ITCH: 3,
  DAY_2_WHEALS: 3,
  DAY_2_ITCH: 3,
  DAY_3_WHEALS: 3,
  DAY_3_ITCH: 3,
  DAY_4_WHEALS: 3,
  DAY_4_ITCH: 3,
  DAY_5_WHEALS: 3,
  DAY_5_ITCH: 3,
  DAY_6_WHEALS: 3,
  DAY_6_ITCH: 3,
  DAY_7_WHEALS: 3,
  DAY_7_ITCH: 3,
}

/**
 * Day 1: 2 + 3 = 5
 * Day 2: 1 + 1 = 2
 * Day 3: 0 + 2 = 2
 * Day 4: 3 + 3 = 6
 * Day 5: 1 + 0 = 1
 * Day 6: 2 + 1 = 3
 * Day 7: 0 + 1 = 1
 * Total: 5 + 2 + 2 + 6 + 1 + 3 + 1 = 20
 * Interpretation: Moderate activity urticaria (16-27)
 */
export const random_response = {
  DAY_1_WHEALS: 2,
  DAY_1_ITCH: 3,
  DAY_2_WHEALS: 1,
  DAY_2_ITCH: 1,
  DAY_3_WHEALS: 0,
  DAY_3_ITCH: 2,
  DAY_4_WHEALS: 3,
  DAY_4_ITCH: 3,
  DAY_5_WHEALS: 1,
  DAY_5_ITCH: 0,
  DAY_6_WHEALS: 2,
  DAY_6_ITCH: 1,
  DAY_7_WHEALS: 0,
  DAY_7_ITCH: 1,
}

/**
 * 6 days present, day 3 missing.
 * Day 1: 2+3=5, Day 2: 1+1=2, Day 4: 3+3=6, Day 5: 1+0=1, Day 6: 2+1=3, Day 7: 0+1=1
 * Sum = 18, mean = 3, imputed total = round(3 * 7) = 21
 * Interpretation: Moderate (16-27)
 */
export const six_day_response = {
  DAY_1_WHEALS: 2,
  DAY_1_ITCH: 3,
  DAY_2_WHEALS: 1,
  DAY_2_ITCH: 1,
  DAY_4_WHEALS: 3,
  DAY_4_ITCH: 3,
  DAY_5_WHEALS: 1,
  DAY_5_ITCH: 0,
  DAY_6_WHEALS: 2,
  DAY_6_ITCH: 1,
  DAY_7_WHEALS: 0,
  DAY_7_ITCH: 1,
}

/**
 * 5 days present, days 2 and 5 missing.
 * Day 1: 2+3=5, Day 3: 0+2=2, Day 4: 3+3=6, Day 6: 2+1=3, Day 7: 0+1=1
 * Sum = 17, mean = 3.4, imputed total = round(3.4 * 7) = round(23.8) = 24
 * Interpretation: Moderate (16-27)
 */
export const five_day_response = {
  DAY_1_WHEALS: 2,
  DAY_1_ITCH: 3,
  DAY_3_WHEALS: 0,
  DAY_3_ITCH: 2,
  DAY_4_WHEALS: 3,
  DAY_4_ITCH: 3,
  DAY_6_WHEALS: 2,
  DAY_6_ITCH: 1,
  DAY_7_WHEALS: 0,
  DAY_7_ITCH: 1,
}

/**
 * 4 days present, days 2, 4, 7 missing.
 * Day 1: 2+3=5, Day 3: 0+2=2, Day 5: 1+0=1, Day 6: 2+1=3
 * Sum = 11, mean = 2.75, imputed total = round(2.75 * 7) = round(19.25) = 19
 * Interpretation: Moderate (16-27)
 */
export const four_day_response = {
  DAY_1_WHEALS: 2,
  DAY_1_ITCH: 3,
  DAY_3_WHEALS: 0,
  DAY_3_ITCH: 2,
  DAY_5_WHEALS: 1,
  DAY_5_ITCH: 0,
  DAY_6_WHEALS: 2,
  DAY_6_ITCH: 1,
}

/**
 * 3 days present (below 4/7 threshold), days 2, 4, 5, 7 missing.
 * Day 1: 2+3=5, Day 3: 0+2=2, Day 6: 2+1=3
 * Total should be null (insufficient data).
 */
export const three_day_response = {
  DAY_1_WHEALS: 2,
  DAY_1_ITCH: 3,
  DAY_3_WHEALS: 0,
  DAY_3_ITCH: 2,
  DAY_6_WHEALS: 2,
  DAY_6_ITCH: 1,
}
