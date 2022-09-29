import R from 'ramda'

import type { CalculationInputValue } from '../../../../../../types/calculations.types'
import type { StringInputType } from '../../../../../../types/calculations/inputs/calculation-inputs.types'
import type { LabelType } from '../../../../../../types/localization.types'
import { is_answer_one_of_the_allowed_answers } from './helpers/is_answer_one_of_the_allowed_answers'

export const string_validation = (
  input_value: CalculationInputValue,
  input_type: StringInputType
): {
  valid: boolean
  reason?: LabelType
} => {
  if (typeof input_value !== 'string')
    return {
      valid: false,
      reason: {
        en: 'Passed value is not a string.',
        nl: 'Ingegeven waarde is geen string.',
      },
    }

  /**
   * Is there a list of discrete allowed answers?
   * If yes: check if the string that is passed matches
   * one of the allowed answers
   */
  const { allowed_answers } = input_type

  if (!R.isNil(allowed_answers)) {
    if (!is_answer_one_of_the_allowed_answers(input_value, allowed_answers))
      return {
        valid: false,
        reason: {
          en: `${input_value} is not one of the allowed strings (${allowed_answers.join(
            ', '
          )})`,

          nl: `${input_value} is niet één van de mogelijke antwoorden, de mogelijke antwoorden zijn: (${allowed_answers.join(
            ', '
          )})`,
        },
      }
  }

  return { valid: true }
}
