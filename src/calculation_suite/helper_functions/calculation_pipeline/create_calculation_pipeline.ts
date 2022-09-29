import R from 'ramda'

import type {
  CalculationInputType,
  CalculationOutputType,
  SpecificStepsType,
} from '../../../types/calculations.types'
import { InvalidInputsError, UnexpectedInputsError } from '../../errors'
import { map_calculation_output_to_wip_calculation_results } from './map_calculation_output_to_wip_calculation_results'
import { validate_calculation_inputs_against_calculation_input_definition } from './validate_calculation_inputs_against_calculation_input_definition'

export const create_calculation_pipeline =
  (specific_calculation_steps: SpecificStepsType) =>
  ({
    calculation_blueprint,
    calculation_id,
    calculation_input,
  }: CalculationInputType): CalculationOutputType[] => {
    const { input_definition } = calculation_blueprint
    const { invalid_inputs, unexpected_inputs } =
      validate_calculation_inputs_against_calculation_input_definition({
        calculation_input,
        calculation_input_definition: input_definition,
      })

    if (unexpected_inputs.length > 0) {
      throw new UnexpectedInputsError({
        unexpected_inputs,
        calculation_name: calculation_id,
        calculation_blueprint,
      })
    }

    /**
     * If incoming calculation input is invalid, throw an error
     * and do not proceed with actual calculation.
     */
    if (invalid_inputs.length > 0) {
      throw new InvalidInputsError({
        invalid_inputs,
        calculation_name: calculation_id,
      })
    }

    const { output_definition } = calculation_blueprint

    /**
     * When incoming calculation input is valid we
     * can execute the actual calculation.
     */
    return R.compose(
      map_calculation_output_to_wip_calculation_results(output_definition),
      //@ts-expect-error fix types
      ...specific_calculation_steps
    )(calculation_input)
  }
