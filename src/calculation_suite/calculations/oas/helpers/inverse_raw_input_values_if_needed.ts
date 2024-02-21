import R from 'ramda'

import type { InputType } from '../../../../types/calculations.types'
import { stdInputValueLens } from '../../../helper_functions/calculation_variants/api/input/lenses'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { is_numeric } from '../../shared_functions'

export const inverse_raw_input_values_if_needed = (
  calculation_input: Array<InputType>
): Array<InputType> =>
  R.map(input => {
    const answer = Number(input.raw_input_value)

    if (!is_numeric(answer))
      return R.set(stdInputValueLens, MISSING_MESSAGE, input)

    if (input.inverse) {
      const MAX_SCORE = 6
      const inversed_value = MAX_SCORE + 1 - answer

      return R.set(stdInputValueLens, inversed_value, input)
    }

    return R.set(stdInputValueLens, answer, input)
  }, calculation_input)
