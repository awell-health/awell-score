import R from 'ramda'

import { type InputType } from '../../../../types/calculations.types'
import {
  inputIdLens,
  rawInputValueLens,
  stdInputValueLens,
} from '../../../helper_functions/calculation_variants/api/input/lenses'
import { MISSING_MESSAGE } from '../../../PARAMETERS'

const REVERSE_SCORED_ITEMS = ['PSS4_Q02', 'PSS4_Q03']

type FunctionType = (inputs: Array<InputType>) => Array<InputType>

export const standardize_answer_values: FunctionType = inputs => {
  const add_standardized_value_to_input = (input: InputType) => {
    const input_id = R.view(inputIdLens, input)
    const raw_value = R.view(rawInputValueLens, input)

    if (R.isNil(raw_value) || R.isEmpty(raw_value))
      return R.set(stdInputValueLens, MISSING_MESSAGE, input)

    const getStdValue = (): number => {
      if (REVERSE_SCORED_ITEMS.includes(input_id)) {
        const MAX_SCORE = 4
        return MAX_SCORE - raw_value
      }

      return raw_value
    }

    return R.set(stdInputValueLens, getStdValue(), input)
  }

  return inputs.map(add_standardized_value_to_input)
}
