import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import {
  add_raw_values_to_inputs,
  do_all_required_inputs_have_a_valid_value,
  get_valid_values,
} from '../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { PACKYEARS_INPUTS, PACKYEARS_OUTPUT } from './definition'

export const calculate_packyears = (
  calculation_input: Array<InputType>
): WIPCalculationResultType => {
  const CIGARETTES_IN_A_PACK = 20

  if (do_all_required_inputs_have_a_valid_value(calculation_input)) {
    return [
      {
        id: 'PACKYEARS',
        score:
          get_valid_values(calculation_input).reduce(
            (product, value) => product * value
          ) / CIGARETTES_IN_A_PACK,
      },
    ]
  }

  return [
    {
      id: 'PACKYEARS',
      score: MISSING_MESSAGE,
    },
  ]
}

export const specific_steps_packyears_calc = [
  calculate_packyears,
  add_raw_values_to_inputs(PACKYEARS_INPUTS),
]

export const packyears: CalculationType = create_calculation({
  calculation_name: `Packyears`,
  readme_location: __dirname,
  calculation_steps: specific_steps_packyears_calc,
  calculation_definition: {
    input_definition: PACKYEARS_INPUTS,
    output_definition: PACKYEARS_OUTPUT,
  },
})
