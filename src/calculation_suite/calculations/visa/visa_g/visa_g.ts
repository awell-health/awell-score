import type { CalculationType } from '../../../../types/calculations.types'
import { add_raw_values_to_inputs } from '../../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../../helper_functions/create_calculation'
import { calculate_visa_score } from '../common/calculate_visa_score'
import { VISA_G_INPUTS, VISA_G_OUTPUT } from './definition'

const CALCULATION_NAME = 'VISA_G'

export const specific_steps_visa_g_calc = [
  calculate_visa_score(CALCULATION_NAME),
  add_raw_values_to_inputs(VISA_G_INPUTS),
]

export const visa_g: CalculationType = create_calculation({
  calculation_name:
    'Victorian Institute of Sports Assessment - Gluteal Tendinopathy score (VISA-G)',

  readme_location: __dirname,
  calculation_steps: specific_steps_visa_g_calc,
  calculation_definition: {
    input_definition: VISA_G_INPUTS,
    output_definition: VISA_G_OUTPUT,
  },
})
