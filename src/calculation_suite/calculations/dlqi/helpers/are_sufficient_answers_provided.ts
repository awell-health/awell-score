import R from 'ramda'

import type { SubscaleType } from '../../../../types/calculations.types'
import {
  inputIdLens,
  rawInputValueLens,
} from '../../../lib/calculation_variants/api/input/lenses'
import {
  inputsInSubscaleLens,
  subscaleIdLens,
} from '../../../lib/calculation_variants/api/subscale/lenses'
import { is_numeric } from '../../shared_functions'
import { NOT_RELEVANT_ANSWER, YES_ANSWER } from '../definition/dlqi_subscales'

/**
 * Amount of inputs = 10 but one missing answer is allowed
 */
const EXPECTED_AMOUNT_OF_ANSWERS_WHEN_Q7_IS_ANSWERED_YES_OR_NOT_RELEVANT = 9

/**
 * Amount of inputs = 11 but one missing answer is allowed
 */
const EXPECTED_AMOUNT_OF_ANSWERS_WHEN_Q7_IS_ANSWERED_NO = 10

export const are_sufficient_answers_provided = (
  subscales: Array<SubscaleType>
): boolean => {
  const inputs_with_answers = R.compose(
    R.flatten,
    R.map(s => R.view(inputsInSubscaleLens, s))
  )(subscales)

  /**
   * Input 7 has a visibility condition so the amount
   * of expected answers can vary based on the answer of the main input.
   */
  const Q7_MAIN_INPUT_ID = 'DLQI_Q07'

  const DLQI_WORK_AND_SCHOOL_MAIN_QUESTION_ANSWER = R.compose(
    R.view(rawInputValueLens),
    R.find(s => R.view(inputIdLens, s) === Q7_MAIN_INPUT_ID)
  )(inputs_with_answers)

  const valid_answers = R.compose(
    R.filter(is_numeric),
    R.map(val => Number(val)),
    R.map(input => R.view(rawInputValueLens, input))
  )(inputs_with_answers)

  if (
    DLQI_WORK_AND_SCHOOL_MAIN_QUESTION_ANSWER === YES_ANSWER ||
    DLQI_WORK_AND_SCHOOL_MAIN_QUESTION_ANSWER === NOT_RELEVANT_ANSWER
  ) {
    if (
      valid_answers.length >=
      EXPECTED_AMOUNT_OF_ANSWERS_WHEN_Q7_IS_ANSWERED_YES_OR_NOT_RELEVANT
    )
      return true

    return false
  }

  if (valid_answers.length >= EXPECTED_AMOUNT_OF_ANSWERS_WHEN_Q7_IS_ANSWERED_NO)
    return true

  return false
}

export const are_sufficient_answers_provided_for_subscale = (
  subscale: SubscaleType
): boolean => {
  const subscale_inputs_with_answers = R.view(inputsInSubscaleLens, subscale)
  const subscale_id = R.view(subscaleIdLens, subscale)

  const valid_answers_in_subscale = R.compose(
    R.filter(is_numeric),
    R.map(val => Number(val)),
    R.map(input => R.view(rawInputValueLens, input))
  )(subscale_inputs_with_answers)

  /**
   * WORK_AND_SCHOOL subscale has a visibility condition so the amount
   * of expected answers can vary based on the answer of the main input.
   */
  if (subscale_id === 'WORK_AND_SCHOOL') {
    const Q7_MAIN_INPUT_ID = 'DLQI_Q07'

    const DLQI_WORK_AND_SCHOOL_MAIN_QUESTION_ANSWER = R.compose(
      R.view(rawInputValueLens),
      R.find(s => R.view(inputIdLens, s) === Q7_MAIN_INPUT_ID)
    )(subscale_inputs_with_answers)

    if (
      DLQI_WORK_AND_SCHOOL_MAIN_QUESTION_ANSWER === YES_ANSWER ||
      DLQI_WORK_AND_SCHOOL_MAIN_QUESTION_ANSWER === NOT_RELEVANT_ANSWER
    ) {
      /** One input should be answered */
      if (valid_answers_in_subscale.length === 1) return true

      return false
    }

    /** Two inputs should be answered */
    if (valid_answers_in_subscale.length === 2) return true

    return false
  }

  if (valid_answers_in_subscale.length < subscale_inputs_with_answers.length)
    return false

  return true
}
