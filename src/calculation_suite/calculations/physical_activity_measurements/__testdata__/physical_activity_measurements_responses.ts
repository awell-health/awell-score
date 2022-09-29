/**
 * When answer on "Days per week" question is 0,
 * we don't need to ask the second question (minutes per day)
 * So in that case you would only have 3 answers in your response
 */
export const minimum_response = {
  LIGHT_PA_DAYS_PER_WEEK: 0,
  MODERATE_PA_DAYS_PER_WEEK: 0,
  VIGOROUS_PA_DAYS_PER_WEEK: 0,
}

/**
 * Since it's a continuous scale there's no need to have
 * a median and maximum response
 */
export const random_response_with_sufficient_physical_activity = {
  LIGHT_PA_DAYS_PER_WEEK: 3,
  LIGHT_PA_MINUTES_PER_DAY: 60,
  MODERATE_PA_DAYS_PER_WEEK: 2,
  MODERATE_PA_MINUTES_PER_DAY: 90,
  VIGOROUS_PA_DAYS_PER_WEEK: 4,
  VIGOROUS_PA_MINUTES_PER_DAY: 30,
}

export const random_response_with_insufficient_physical_activity = {
  LIGHT_PA_DAYS_PER_WEEK: 1,
  LIGHT_PA_MINUTES_PER_DAY: 15,
  MODERATE_PA_DAYS_PER_WEEK: 1,
  MODERATE_PA_MINUTES_PER_DAY: 30,
  VIGOROUS_PA_DAYS_PER_WEEK: 0,
}
