import { round } from 'mathjs'
import R from 'ramda'

import type { InputType } from '../../../src/types/calculations.types'
import {
  inputIdLens,
  stdInputValueLens,
} from '../../../lib/calculation_variants/api/input/lenses'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { is_numeric } from '../../../src/calculation_suite/calculations/shared_functions'

export const calculate_mean_score =
  (calculation_input: Array<InputType>) =>
  (input_ids: string[]): number | string => {
    const valid_inputs = R.compose(
      R.filter(is_numeric),
      R.map(input => R.view(stdInputValueLens, input)),
      R.filter(input => input_ids.includes(R.view(inputIdLens, input))),
    )(calculation_input)

    if (valid_inputs.length === 0) return MISSING_MESSAGE

    const ROUND_TO = 2

    return round(R.sum(valid_inputs) / valid_inputs.length, ROUND_TO)
  }
