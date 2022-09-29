import R from 'ramda'

import type { InputType } from '../../../../types/calculations.types'
import { inputIdLens } from '../../../helper_functions/calculation_variants/api/input/lenses'
import { get_valid_values } from '../../../helper_functions/calculation_variants/simple_calculation'

/**
 * Minimum amount of expected answers is 3 ("LIGHT_PA_DAYS_PER_WEEK", "MODERATE_PA_DAYS_PER_WEEK"
 * and "VIGOROUS_PA_DAYS_PER_WEEK")
 *
 * Based on the response of the subject we can also dynamically determine
 * the amount of expected answers because when answer on "LIGHT_PA_DAYS_PER_WEEK",
 * "MODERATE_PA_DAYS_PER_WEEK" or "VIGOROUS_PA_DAYS_PER_WEEK" is > 0 we know that there is
 * a second question for that level of physical activity.
 */
export const are_sufficient_answers_provided = (
  pa_inputs_with_answers: Array<InputType>
): boolean => {
  const AMOUNT_OF_ANSWERS = get_valid_values(pa_inputs_with_answers).length

  const inputs_needed_to_determine_amount_of_expected_answers = [
    'LIGHT_PA_DAYS_PER_WEEK',
    'MODERATE_PA_DAYS_PER_WEEK',
    'VIGOROUS_PA_DAYS_PER_WEEK',
  ]

  const subset_answers = R.compose(
    get_valid_values,
    R.filter(input =>
      inputs_needed_to_determine_amount_of_expected_answers.includes(
        R.view(inputIdLens, input)
      )
    )
  )(pa_inputs_with_answers)

  const determine_amount_of_expected_answers = (
    subset_of_answers: Array<number>
  ): number => {
    const AMOUNT_OF_QUESTIONS_PER_APPLICABLE_PA_LEVEL = 2

    const NON_APPLICABLE_PA_LEVELS = R.compose(
      R.length,
      R.filter(R.equals(0))
    )(subset_of_answers)

    const APPLICABLE_PA_LEVELS = R.compose(
      R.length,
      R.reject(R.equals(0))
    )(subset_of_answers)

    const AMOUNT_OF_EXPECTED_ANSWERS =
      NON_APPLICABLE_PA_LEVELS +
      APPLICABLE_PA_LEVELS * AMOUNT_OF_QUESTIONS_PER_APPLICABLE_PA_LEVEL

    return R.max(
      inputs_needed_to_determine_amount_of_expected_answers.length,
      AMOUNT_OF_EXPECTED_ANSWERS
    )
  }

  const expected_amount_of_answers = R.compose(
    determine_amount_of_expected_answers,
    R.map(answer => Number(answer)),
    R.values
  )(subset_answers)

  return expected_amount_of_answers <= AMOUNT_OF_ANSWERS
}
