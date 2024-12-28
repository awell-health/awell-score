import R from 'ramda'

import { MISSING_MESSAGE } from '../../../../PARAMETERS'
import { DEFAULT_MAX_SCORE_PER_INPUT } from '../definition/ompq_inputs'
import type { OMPQInputType } from '../../../../../types/calculations/inputs/custom/ompq.types'

import {
  inputIdLens,
  inputInverseLens,
  rawInputValueLens,
  stdInputValueLens,
} from '../../../../lib/calculation_variants/api/input/lenses'
import { is_numeric } from '../../../shared_functions'

const calculate_reverse_score = (answer: unknown): number | string => {
  const numeric_answer = Number(answer)

  return is_numeric(numeric_answer)
    ? DEFAULT_MAX_SCORE_PER_INPUT - numeric_answer
    : MISSING_MESSAGE
}

const calculate_score_for_input_5 = (
  pain_site_answers: unknown
): number | string => {
  /**
   * Input 5 should be an array because it's a multiple choice input with multiple answers allowed.
   * Needs to be checked explictly to make sure flow does not complain.
   */
  if (!Array.isArray(pain_site_answers)) return MISSING_MESSAGE

  const MULTIPLIER = 2

  //@ts-expect-error to do
  return R.compose(
    //@ts-expect-error to do
    score => R.min(score, DEFAULT_MAX_SCORE_PER_INPUT),
    //@ts-expect-error to do
    amount_of_pain_sites => amount_of_pain_sites * MULTIPLIER,
    R.length
  )(pain_site_answers)
}

export const add_score_to_ompq_inputs = (
  ompq_inputs: Array<OMPQInputType>
): Array<OMPQInputType> =>
  R.map(ompq_input => {
    const id = R.view(inputIdLens, ompq_input)
    const inverse = R.view(inputInverseLens, ompq_input)
    const answer = R.view(rawInputValueLens, ompq_input)

    /**
     * If there is no answer for a spefic input,
     * we cannot determine a score so we set it to undefined.
     */
    if (R.isNil(answer))
      return R.set(stdInputValueLens, MISSING_MESSAGE, ompq_input)

    /**
     * For question 5, count the number of pain sites and multiply by two.
     * Maximum score allowable is 10.
     */
    if (id === 'OMPQ_Q05')
      return R.set(
        stdInputValueLens,
        calculate_score_for_input_5(answer),
        ompq_input
      )

    /**
     * For the inverse inputs the score is 10 minus the selected number.
     * The inverse inputs are 12, 16, 17, 21, 22, 23, 24 and 25.
     */
    if (inverse)
      return R.set(
        stdInputValueLens,
        calculate_reverse_score(answer),
        ompq_input
      )

    /**
     * For all other cases the score is the same as the raw answer.
     */
    return R.set(stdInputValueLens, Number(answer), ompq_input)
  }, ompq_inputs)
