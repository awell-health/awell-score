import R from 'ramda'

import type {
  CalculationParameter,
  IncomingCalculationInputType,
} from '../types/calculations.types'

export const filter_out_non_applicable_inputs =
  (calculation_parameters: CalculationParameter[]) =>
  (
    simulated_calculation_input: IncomingCalculationInputType,
  ): IncomingCalculationInputType => {
    const filtered_simulation_input = R.mapObjIndexed(
      (simulated_input, simulated_input_id) => {
        const input_definition = R.find(
          calculation_parameter =>
            calculation_parameter.id === simulated_input_id,
          calculation_parameters,
        )

        const not_applicable_if_input_id = R.path(
          ['not_applicable_if', 'input_id'],
          input_definition,
        )

        const value_is_one_of = R.defaultTo(
          [],
          R.path(['not_applicable_if', 'value_is_one_of'], input_definition),
        )

        if (not_applicable_if_input_id) {
          const value_to_check =
            // @ts-expect-error - needs refactoring
            simulated_calculation_input[not_applicable_if_input_id]

          // @ts-expect-error - needs refactoring
          if (value_is_one_of.includes(value_to_check)) return undefined
        }

        return simulated_input
      },
      simulated_calculation_input,
    )

    return R.filter(
      simulated_input => !R.isNil(simulated_input),
      filtered_simulation_input,
    )
  }
