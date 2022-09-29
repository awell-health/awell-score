import R from 'ramda'

import type { CalculationInputValue } from '../../../../../../types/calculations.types'
import type { StringsArrayInputType } from '../../../../../../types/calculations/inputs/calculation-inputs.types'
import type { LabelType } from '../../../../../../types/localization.types'
import { is_answer_one_of_the_allowed_answers } from './helpers/is_answer_one_of_the_allowed_answers'

export const strings_array_validation = (
  input_value: CalculationInputValue,
  input_type: StringsArrayInputType
): {
  valid: boolean
  reason?: LabelType
} => {
  if (!Array.isArray(input_value)) {
    return {
      valid: false,
      reason: { en: 'Passed value is not an array.' },
    }
  }

  if (input_value.length === 0) {
    return { valid: true }
  }

  if (input_value.every(val => typeof val !== 'string'))
    return {
      valid: false,
      reason: { en: 'Not all values in the array are strings.' },
    }

  /**
   * Is there a list of discrete allowed answers?
   * If yes: check if all the strings in the array match
   * the allowed answers.
   */
  const { allowed_answers } = input_type

  if (!R.isNil(allowed_answers)) {
    if (
      !input_value.every(val =>
        is_answer_one_of_the_allowed_answers(val, allowed_answers)
      )
    )
      return {
        valid: false,
        reason: {
          en: 'Not all strings in the array are one of the allowed strings.',
        },
      }
  }

  return {
    valid: true,
  }
}
