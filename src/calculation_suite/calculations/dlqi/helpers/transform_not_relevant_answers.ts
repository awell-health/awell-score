import R from 'ramda'

import type {
  InputType,
  SubscaleType,
} from '../../../../types/calculations.types'
import {
  rawInputValueLens,
  stdInputValueLens,
} from '../../../lib/calculation_variants/api/input/lenses'
import { inputsInSubscaleLens } from '../../../lib/calculation_variants/api/subscale/lenses'
import { NOT_RELEVANT_ANSWER } from '../definition/dlqi_subscales'

export const transform_not_relevant_answers = (
  subscales: Array<SubscaleType>
): Array<SubscaleType> =>
  R.map(subscale => {
    const FRONT_END_VALUE_OF_A_NOT_RELEVANT_ANSWER = NOT_RELEVANT_ANSWER
    const BACK_END_VALUE_OF_A_NOT_RELEVANT_ANSWER = 0

    const inputs_in_subscale = R.view(inputsInSubscaleLens, subscale)

    const transform_not_relevant_answer_for_input = (input: InputType) => {
      const raw_value = R.view(rawInputValueLens, input)

      const new_value =
        raw_value === FRONT_END_VALUE_OF_A_NOT_RELEVANT_ANSWER
          ? BACK_END_VALUE_OF_A_NOT_RELEVANT_ANSWER
          : raw_value

      return R.set(stdInputValueLens, new_value, input)
    }

    const transformed_inputs = R.map(
      transform_not_relevant_answer_for_input,
      inputs_in_subscale
    )

    return R.set(inputsInSubscaleLens, transformed_inputs, subscale)
  }, subscales)
