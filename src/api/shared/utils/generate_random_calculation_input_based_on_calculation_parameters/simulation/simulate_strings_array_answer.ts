import R from 'ramda'

import type { StringsArrayInputType } from '../../../../../types/calculations/inputs/calculation-inputs.types'
import { get_random_answers_from_an_array_of_allowed_answers } from './helpers'

export const simulate_strings_array_answer = (
  input_type: StringsArrayInputType
): string[] => {
  const { allowed_answers } = input_type

  /**
   * Is there a list of discrete allowed answers?
   * If yes: get an answer from that list
   */
  if (!R.isNil(allowed_answers)) {
    return get_random_answers_from_an_array_of_allowed_answers(
      allowed_answers
    ).map(a => {
      if (typeof a === 'string') {
        return a
      }

      return ''
    })
  }

  const DEFAULT_SIMULATION = ['hello', 'chair', 'house', 'camel', 'rhino']

  return DEFAULT_SIMULATION
}
