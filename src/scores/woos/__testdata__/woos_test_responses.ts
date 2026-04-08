export const best_response = {
  WOOS_1: 0,
  WOOS_2: 0,
  WOOS_3: 0,
  WOOS_4: 0,
  WOOS_5: 0,
  WOOS_6: 0,
  WOOS_7: 0,
  WOOS_8: 0,
  WOOS_9: 0,
  WOOS_10: 0,
  WOOS_11: 0,
  WOOS_12: 0,
  WOOS_13: 0,
  WOOS_14: 0,
  WOOS_15: 0,
  WOOS_16: 0,
  WOOS_17: 0,
  WOOS_18: 0,
  WOOS_19: 0,
}

export const worst_response = {
  WOOS_1: 100,
  WOOS_2: 100,
  WOOS_3: 100,
  WOOS_4: 100,
  WOOS_5: 100,
  WOOS_6: 100,
  WOOS_7: 100,
  WOOS_8: 100,
  WOOS_9: 100,
  WOOS_10: 100,
  WOOS_11: 100,
  WOOS_12: 100,
  WOOS_13: 100,
  WOOS_14: 100,
  WOOS_15: 100,
  WOOS_16: 100,
  WOOS_17: 100,
  WOOS_18: 100,
  WOOS_19: 100,
}

export const median_response = {
  WOOS_1: 50,
  WOOS_2: 50,
  WOOS_3: 50,
  WOOS_4: 50,
  WOOS_5: 50,
  WOOS_6: 50,
  WOOS_7: 50,
  WOOS_8: 50,
  WOOS_9: 50,
  WOOS_10: 50,
  WOOS_11: 50,
  WOOS_12: 50,
  WOOS_13: 50,
  WOOS_14: 50,
  WOOS_15: 50,
  WOOS_16: 50,
  WOOS_17: 50,
  WOOS_18: 50,
  WOOS_19: 50,
}

/**
 * Physical symptoms = 6 * 90 = 540
 * Sports/Leisure/Work = 5 * 90 = 450
 * Lifestyle = 5 * 90 = 450
 * Emotions: WOOS_17 = 90, WOOS_18 = 50, WOOS_19 = 45 → 185
 * Total = 540 + 450 + 450 + 185 = 1625
 * Percentage = (1900 - 1625) / 19 = 275 / 19 = 14.47 (rounded to 2 decimals)
 */
export const random_response = {
  WOOS_1: 90,
  WOOS_2: 90,
  WOOS_3: 90,
  WOOS_4: 90,
  WOOS_5: 90,
  WOOS_6: 90,
  WOOS_7: 90,
  WOOS_8: 90,
  WOOS_9: 90,
  WOOS_10: 90,
  WOOS_11: 90,
  WOOS_12: 90,
  WOOS_13: 90,
  WOOS_14: 90,
  WOOS_15: 90,
  WOOS_16: 90,
  WOOS_17: 90,
  WOOS_18: 50,
  WOOS_19: 45,
}
