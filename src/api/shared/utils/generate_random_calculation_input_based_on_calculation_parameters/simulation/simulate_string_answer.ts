import R from 'ramda'

import type { StringInputType } from '../../../../../types/calculations/inputs/calculation-inputs.types'
import { get_random_answer_from_an_array_of_allowed_answers } from './helpers'

export const simulate_string_answer = (input_type: StringInputType): string => {
  const { allowed_answers } = input_type

  /**
   * Is there a list of discrete allowed answers?
   * If yes: get an answer from that list
   */
  if (!R.isNil(allowed_answers)) {
    const random_answer =
      get_random_answer_from_an_array_of_allowed_answers(allowed_answers)

    if (typeof random_answer === 'string') {
      return random_answer
    }

    return ''
  }

  const DEFAULT_SIMULATION = [
    { value: 'Nick is a beast' },
    { value: 'Etienne is a beast' },
    { value: 'Yann is a breast' },
    { value: 'Thomas is a beast' },
    { value: 'Olivier is a beast' },
  ]

  const random_answer =
    get_random_answer_from_an_array_of_allowed_answers(DEFAULT_SIMULATION)

  if (typeof random_answer === 'string') {
    return random_answer
  }

  return ''
}
