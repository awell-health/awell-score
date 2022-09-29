import R from 'ramda'

import type { CalculationInputValue } from '../../../../../../types/calculations.types'
import type { NumberInputType } from '../../../../../../types/calculations/inputs/calculation-inputs.types'
import type { LabelType } from '../../../../../../types/localization.types'
import { is_answer_between_given_range } from './helpers/is_answer_between_given_range'
import { is_answer_one_of_the_allowed_answers } from './helpers/is_answer_one_of_the_allowed_answers'

export const number_validation = (
  input_value: CalculationInputValue,
  input_type: NumberInputType
): {
  valid: boolean
  reason?: LabelType
} => {
  if (typeof input_value !== 'number')
    return {
      valid: false,
      reason: {
        en: 'Passed value is not a number.',
        nl: 'Ingegeven waarde is geen getal.',
      },
    }

  const { allowed_answers, range } = input_type

  /**
   * Is there a list of discrete allowed answers?
   * If yes: check if the number that is passed matches
   * one of the allowed answers
   */
  if (!R.isNil(allowed_answers)) {
    if (!is_answer_one_of_the_allowed_answers(input_value, allowed_answers))
      return {
        valid: false,
        reason: {
          en: `${input_value} is not one of the allowed answers, the allowed answers are: ${allowed_answers.join(
            ', '
          )}.`,

          nl: `${input_value} is niet één van de mogelijke antwoorden, de mogelijke antwoorden zijn: ${allowed_answers.join(
            ', '
          )}.`,
        },
      }
  }

  /**
   * Is there a range (min, max) defined?
   * If yes: check if the number that is passed is between
   * the range
   */
  if (!R.isNil(range)) {
    const { min, max } = range

    if (!is_answer_between_given_range(input_value, min.value, max.value))
      return {
        valid: false,
        reason: {
          en: `${input_value} does not fall in the expected [${min.value}, ${max.value}] range.`,
          nl: `${input_value} valt niet tussen de verwachte [${min.value}, ${max.value}] grens.`,
        },
      }
  }

  return { valid: true }
}
