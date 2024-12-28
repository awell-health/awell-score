import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { add_raw_values_to_inputs } from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import { PDI_INPUTS, PDI_OUTPUT } from './definition'
import { calculate_total_score } from './helpers'

const calculate_scores = (
  inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const TOTAL_SCORE = calculate_total_score(inputs_with_answers)

  return [
    {
      id: 'PDI_INDEX',
      score: TOTAL_SCORE,
    },
  ]
}

const pdi_calc = [calculate_scores, add_raw_values_to_inputs(PDI_INPUTS)]

export const pdi: CalculationType = create_calculation({
  calculation_name: 'The Pain Disability Index (PDI)',
  readme_location: __dirname,
  calculation_steps: pdi_calc,
  calculation_definition: {
    input_definition: PDI_INPUTS,
    output_definition: PDI_OUTPUT,
  },
})
