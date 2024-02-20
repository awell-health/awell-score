// @flow
import R from 'ramda'

import { type InputType } from '../../../../types/calculations.types'
import {
  inputIdLens,
  rawInputValueLens,
  stdInputValueLens
} from '../../../helper_functions/calculation_variants/api/input/lenses'
import { MISSING_MESSAGE } from '../../../PARAMETERS'

type FunctionType = (inputs: Array<InputType>) => Array<InputType>

export const standardize_answer_values: FunctionType = (inputs) => {
  const add_standardized_value_to_input = (input: InputType) => {
    const input_id = R.view(inputIdLens, input)
    const raw_value = R.view(rawInputValueLens, input)

    if (R.isNil(raw_value) || R.isEmpty(raw_value))
      return R.set(stdInputValueLens, MISSING_MESSAGE, input)

    const getStdValue = (): number => {
      if (input_id === 'STOP_BANG_Q05') {
        // if BMI is > 35 then add 1 point
        const BMI_threshold = 35
        const val = raw_value > BMI_threshold ? 1 : 0
        return val
      }

      if (input_id === 'STOP_BANG_Q06') {
        // if age is > 50 then add 1 point
        const age_threshold = 50
        const val = raw_value > age_threshold ? 1 : 0

        return val
      }

      if (input_id === 'STOP_BANG_Q07') {
        // if neck circumference is > 40 then add 1 point
        const neck_circumference_threshold = 40
        const val = raw_value > neck_circumference_threshold ? 1 : 0

        return val
      }

      if (input_id === 'STOP_BANG_Q08') {
        // if gender is 1 (male) then add 1 point, if gender is 2 (female) then add 0 points
        const isMale = 1
        const val = raw_value === isMale ? 1 : 0

        return val
      }

      return raw_value
    }

    return R.set(stdInputValueLens, getStdValue(), input)
  }

  return inputs.map(add_standardized_value_to_input)
}
