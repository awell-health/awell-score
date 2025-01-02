import { round } from 'mathjs'
import R from 'ramda'

import type { InputType } from '../../../src/types/calculations.types'
import { get_valid_values } from '../../../lib/calculation_variants/simple_calculation'
import { MISSING_MESSAGE } from '../../../PARAMETERS'

export const calculate_item_9_activity_score = (
  paq_c_inputs_with_answers: Array<InputType>,
): number | string => {
  const INPUT_IDS_NEEDED_FOR_SCORING = [
    'ITEM_9_MONDAY',
    'ITEM_9_TUESDAY',
    'ITEM_9_WEDNESDAY',
    'ITEM_9_THURSDAY',
    'ITEM_9_FRIDAY',
    'ITEM_9_SATURDAY',
    'ITEM_9_SUNDAY',
  ]

  const valid_answers_on_inputs_needed_for_scoring = R.compose(
    //@ts-expect-error to do
    inputs => get_valid_values(inputs),
    R.filter(({ input_id }: InputType) =>
      INPUT_IDS_NEEDED_FOR_SCORING.includes(input_id),
    ),
  )(paq_c_inputs_with_answers)

  if (valid_answers_on_inputs_needed_for_scoring.length === 0)
    return MISSING_MESSAGE

  return round(R.mean(valid_answers_on_inputs_needed_for_scoring), 2)
}
