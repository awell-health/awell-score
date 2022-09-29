import R from 'ramda'

import type { NumbersArrayInputType } from '../../../../../types/calculations/inputs/calculation-inputs.types'
import { get_random_answers_from_an_array_of_allowed_answers } from './helpers'

export const simulate_numbers_array_answer = (
  input_type: NumbersArrayInputType
): number[] => {
  const { allowed_answers } = input_type

  /**
   * Is there a list of discrete allowed answers?
   * If yes: get an answer from that list
   */
  if (!R.isNil(allowed_answers)) {
    return get_random_answers_from_an_array_of_allowed_answers(
      allowed_answers
    ).map(a => Number(a))
  }

  const DEFAULT_SIMULATION = [1, 2, 3, 4, 5]

  return DEFAULT_SIMULATION
}
