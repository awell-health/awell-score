import R from 'ramda'

import { get_random_answer_from_an_array_of_allowed_answers } from './get_random_answer_from_an_array_of_allowed_answers'

export const get_random_answers_from_an_array_of_allowed_answers = (
  allowed_answers: Array<{ value: unknown }>
): unknown[] => {
  // Generate random number between 1 and length of the array
  const MIN_AMOUNT_OF_ANSWERS = 1

  const random_answers = []

  const amount_of_answers_to_simulate = Math.floor(
    Math.random() * (allowed_answers.length - MIN_AMOUNT_OF_ANSWERS) +
      MIN_AMOUNT_OF_ANSWERS
  )

  let i

  for (i = 0; i < amount_of_answers_to_simulate; i += 1) {
    random_answers.push(
      get_random_answer_from_an_array_of_allowed_answers(allowed_answers)
    )
  }

  // Only unique answers
  return R.uniq(random_answers)
}
