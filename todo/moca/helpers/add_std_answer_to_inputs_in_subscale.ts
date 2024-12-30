import R from 'ramda'

import type {
  InputType,
  SubscaleType,
} from '../../../src/types/calculations.types'
import {
  inputTypeLens,
  rawInputValueLens,
  stdInputValueLens,
} from '../../../lib/calculation_variants/api/input/lenses'
import { inputsInSubscaleLens } from '../../../lib/calculation_variants/api/subscale/lenses'
import { MISSING_MESSAGE } from '../../../PARAMETERS'

export const add_std_answer_to_inputs_in_subscale = (
  subscale: SubscaleType,
): SubscaleType => {
  const add_std_answer_to_input = (input: InputType) => {
    const input_type = R.view(inputTypeLens, input)
    const raw_answer = R.view(rawInputValueLens, input)

    if (input_type.type === 'numbers_array') {
      if (Array.isArray(raw_answer))
        return R.set(stdInputValueLens, raw_answer.length, subscale)

      return R.set(stdInputValueLens, MISSING_MESSAGE, subscale)
    }

    return R.set(stdInputValueLens, raw_answer, subscale)
  }

  const inputs_with_std_answers = R.compose(
    R.map(add_std_answer_to_input),
    R.defaultTo([]),
    R.view(inputsInSubscaleLens),
  )(subscale)

  return R.set(inputsInSubscaleLens, inputs_with_std_answers, subscale)
}
