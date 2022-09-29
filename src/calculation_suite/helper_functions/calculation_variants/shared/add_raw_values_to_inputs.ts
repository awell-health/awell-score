import R from 'ramda'

import type {
  IncomingCalculationInputType,
  InputType,
} from '../../../../types/calculations.types'
import type { CustomInputsType } from '../../../../types/calculations/inputs/custom'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { inputIdLens, rawInputValueLens } from '../api/input/lenses'

export const add_raw_values_to_inputs =
  (inputs: InputType[] | CustomInputsType) =>
  (calculation_input: IncomingCalculationInputType): Array<InputType> => {
    const add_raw_value_to_input = (input: InputType): InputType => {
      const input_id = R.view(inputIdLens, input)
      const answer = R.compose(
        R.defaultTo(MISSING_MESSAGE),
        //@ts-expect-error add types
        R.prop(input_id)
      )(calculation_input)

      return R.set(rawInputValueLens, answer, input)
    }

    return R.map(add_raw_value_to_input, inputs)
  }
