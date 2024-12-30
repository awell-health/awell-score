export const get_random_answer_from_an_array_of_allowed_answers = (
  allowed_answers: Array<{ value: unknown }>
) => allowed_answers[Math.floor(Math.random() * allowed_answers.length)].value
