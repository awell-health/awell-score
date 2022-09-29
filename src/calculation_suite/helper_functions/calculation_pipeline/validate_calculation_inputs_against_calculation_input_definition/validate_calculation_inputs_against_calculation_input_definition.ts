import R from 'ramda'

import type {
  CalculationParameter,
  IncomingCalculationInputType,
} from '../../../../types/calculations.types'
import type { InvalidInputsType } from '../../../errors/InvalidInputsError'
import type { UnexpectedInputsType } from '../../../errors/UnexpectedInputsError'
import { is_valid_input } from './validation/is_valid_input'

export const validate_calculation_inputs_against_calculation_input_definition =
  ({
    calculation_input,
    calculation_input_definition,
  }: {
    calculation_input: IncomingCalculationInputType
    calculation_input_definition: CalculationParameter[]
  }): {
    invalid_inputs: InvalidInputsType
    unexpected_inputs: UnexpectedInputsType
  } => {
    const invalid_inputs: InvalidInputsType = []
    const unexpected_inputs: UnexpectedInputsType = []

    const validate_single_calculation_input = (
      calculation_input_value: unknown,
      calculation_input_key: string
    ) => {
      const input_definition = R.find(
        R.propEq('id', calculation_input_key),
        calculation_input_definition
      )

      /**
       * When input definition cannot be found for a calculation input.
       * This means that the input is not in the definition and it therefore
       * is an unexpected input.
       */
      if (R.isNil(input_definition))
        return unexpected_inputs.push(calculation_input_key)

      const { valid, invalid_input } = is_valid_input(
        calculation_input_value,
        input_definition
      )

      if (!valid && invalid_input)
        return invalid_inputs.push({
          ...invalid_input,
        })

      return 'Valid'
    }

    R.forEachObjIndexed(validate_single_calculation_input, calculation_input)

    return { invalid_inputs, unexpected_inputs }
  }
