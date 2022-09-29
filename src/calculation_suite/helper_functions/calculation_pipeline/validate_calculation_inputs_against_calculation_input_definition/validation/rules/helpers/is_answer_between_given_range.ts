export const is_answer_between_given_range = (
  answer: number | string,
  min: number,
  max: number
): boolean => Number(answer) >= min && Number(answer) <= max
