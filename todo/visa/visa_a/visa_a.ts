import type { CalculationType } from '../../../src/types/calculations.types'
import { add_raw_values_to_inputs } from '../../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../../lib/create_calculation'
import { calculate_visa_score } from '../common/calculate_visa_score'
import { VISA_A_INPUTS, VISA_A_OUTPUT } from './definition'

const CALCULATION_NAME = 'VISA_A'

export const specific_steps_visa_a_calc = [
  calculate_visa_score(CALCULATION_NAME),
  add_raw_values_to_inputs(VISA_A_INPUTS),
]

export const visa_a: CalculationType = create_calculation({
  calculation_name:
    'Victorian Institute of Sports Assessment – Achilles score (VISA-A)',
  readme_location: __dirname,
  calculation_steps: specific_steps_visa_a_calc,
  calculation_definition: {
    input_definition: VISA_A_INPUTS,
    output_definition: VISA_A_OUTPUT,
  },
})
