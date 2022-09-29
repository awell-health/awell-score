import type { CalculationInputValue } from '../../../../../../../types/calculations.types'
import { LabelType } from '../../../../../../../types/localization.types'

export const is_answer_one_of_the_allowed_answers = (
  answer: CalculationInputValue,
  allowed_answers: Array<{
    value: number | string
    label?: LabelType | undefined
  }>
): boolean => {
  const allowed_answers_values = allowed_answers.map(a => a.value)

  const is_one_of_allowed_answers = (given_answer: number | string) =>
    allowed_answers_values.includes(Number(given_answer)) ||
    allowed_answers_values.includes(given_answer)

  //@ts-expect-error add types
  if (is_one_of_allowed_answers(answer)) return true

  return false
}
