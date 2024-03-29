import R from 'ramda'

import type { InputType } from '../../../../types/calculations.types'
import {
  inputIdLens,
  stdInputValueLens,
} from '../../../helper_functions/calculation_variants/api/input/lenses'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { is_numeric } from '../../shared_functions'

export const calculate_total_score =
  (calculation_input: Array<InputType>) =>
  (input_ids: string[]): number | string => {
    const valid_inputs = R.compose(
      R.filter(is_numeric),
      R.map(input => R.view(stdInputValueLens, input)),
      R.filter(input => input_ids.includes(R.view(inputIdLens, input)))
    )(calculation_input)

    if (valid_inputs.length === 0) return MISSING_MESSAGE

    return R.sum(valid_inputs)
  }
