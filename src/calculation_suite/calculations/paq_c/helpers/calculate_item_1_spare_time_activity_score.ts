import { round } from 'mathjs'
import R from 'ramda'

import type { InputType } from '../../../../types/calculations.types'
import { get_valid_values } from '../../../helper_functions/calculation_variants/simple_calculation'
import { MISSING_MESSAGE } from '../../../PARAMETERS'

export const calculate_item_1_spare_time_activity_score = (
  paq_c_inputs_with_answers: Array<InputType>
): number | string => {
  const INPUT_ID_PREFIX = 'ITEM_1_ACTIVITY_'

  const valid_answers_on_inputs_needed_for_scoring = R.compose(
    //@ts-expect-error to do
    inputs => get_valid_values(inputs),
    R.filter(({ input_id }: InputType) => input_id.includes(INPUT_ID_PREFIX))
  )(paq_c_inputs_with_answers)

  if (valid_answers_on_inputs_needed_for_scoring.length === 0)
    return MISSING_MESSAGE

  return round(R.mean(valid_answers_on_inputs_needed_for_scoring), 2)
}
