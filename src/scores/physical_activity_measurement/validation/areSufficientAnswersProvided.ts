import { z } from 'zod'
import { PA_INPUTS } from '../definition'
import { isNil, max, pick } from 'lodash'

/**
 * Minimum amount of expected answers is 3 ("LIGHT_PA_DAYS_PER_WEEK", "MODERATE_PA_DAYS_PER_WEEK"
 * and "VIGOROUS_PA_DAYS_PER_WEEK")
 *
 * Based on the response of the subject we can also dynamically determine
 * the amount of expected answers because when answer on "LIGHT_PA_DAYS_PER_WEEK",
 * "MODERATE_PA_DAYS_PER_WEEK" or "VIGOROUS_PA_DAYS_PER_WEEK" is > 0 we know that there is
 * a second question for that level of physical activity.
 */
const getValidValues = (
  data: z.infer<
    z.ZodObject<{
      [K in keyof typeof PA_INPUTS]: (typeof PA_INPUTS)[K]['type']
    }>
  >,
) => Object.values(data).filter(v => !isNil(v))

export const areSufficientAnswersProvided = (
  data: z.infer<
    z.ZodObject<{
      [K in keyof typeof PA_INPUTS]: (typeof PA_INPUTS)[K]['type']
    }>
  >,
): boolean => {
  const validInputs = getValidValues(data)
  const AMOUNT_OF_ANSWERS = validInputs.length

  const inputsNeededToDetermineAmountOfExpectedAnswers = [
    'LIGHT_PA_DAYS_PER_WEEK',
    'MODERATE_PA_DAYS_PER_WEEK',
    'VIGOROUS_PA_DAYS_PER_WEEK',
  ]

  const subsetAnswers = getValidValues(
    pick(data, inputsNeededToDetermineAmountOfExpectedAnswers),
  )

  const determineAmountOfExpectedAnswers = (subsetOfAnswers: Array<number>) => {
    const AMOUNT_OF_QUESTIONS_PER_APPLICABLE_PA_LEVEL = 2

    const NON_APPLICABLE_PA_LEVELS = subsetOfAnswers.filter(v => v === 0).length
    const APPLICABLE_PA_LEVELS = subsetOfAnswers.filter(v => v !== 0).length

    const AMOUNT_OF_EXPECTED_ANSWERS =
      NON_APPLICABLE_PA_LEVELS +
      APPLICABLE_PA_LEVELS * AMOUNT_OF_QUESTIONS_PER_APPLICABLE_PA_LEVEL

    return max([
      inputsNeededToDetermineAmountOfExpectedAnswers.length,
      AMOUNT_OF_EXPECTED_ANSWERS,
    ])
  }

  const expectedAmountOfAnswers =
    determineAmountOfExpectedAnswers(subsetAnswers)

  return (expectedAmountOfAnswers ?? 0) <= AMOUNT_OF_ANSWERS
}
