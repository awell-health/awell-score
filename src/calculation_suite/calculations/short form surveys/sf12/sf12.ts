import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../../types/calculations.types'
import { add_raw_values_to_inputs } from '../../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../../helper_functions/create_calculation'
import { SF12_INPUT, SF12_OUTPUT } from './definition'
import { calculate_sf12_scores } from './helpers'

const calculate_scores = (
  inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const SCORES = calculate_sf12_scores(inputs_with_answers)
  return SCORES
}

const specific_steps_sf12_calc = [
  calculate_scores,
  add_raw_values_to_inputs(SF12_INPUT),
]

export const sf12: CalculationType = create_calculation({
  calculation_name: '12-Item Short Form Survey (SF12)',
  readme_location: __dirname,
  calculation_steps: specific_steps_sf12_calc,
  calculation_definition: {
    input_definition: SF12_INPUT,
    output_definition: SF12_OUTPUT,
  },
})
