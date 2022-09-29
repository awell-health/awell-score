import R from 'ramda'

import type { InputType } from '../../../../types/calculations.types'
import { get_valid_values } from '../../../helper_functions/calculation_variants/simple_calculation'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { PANNS_6_SCALES, type ScaleType } from '../definition/panss_6_scales'

export const calculate_scale_scores = (
  inputs_with_answers: Array<InputType>,
  scale: ScaleType
): number | string => {
  const INPUT_IDS_NEEDED_FOR_SCORING = PANNS_6_SCALES[scale]

  const valid_answers_on_inputs_needed_for_scoring = R.compose(
    //@ts-expect-error to do
    inputs => get_valid_values(inputs),
    R.filter(({ input_id }: InputType) =>
      INPUT_IDS_NEEDED_FOR_SCORING.includes(input_id)
    )
  )(inputs_with_answers)

  if (valid_answers_on_inputs_needed_for_scoring.length === 0)
    return MISSING_MESSAGE

  return R.sum(valid_answers_on_inputs_needed_for_scoring)
}
