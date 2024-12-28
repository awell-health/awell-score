import type { CalculationType } from '../../../../types/calculations.types'
import { add_raw_values_to_inputs } from '../../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../../lib/create_calculation'
import { calculate_visa_score } from '../common/calculate_visa_score'
import { VISA_P_INPUTS, VISA_P_OUTPUT } from './definition'

export const CALCULATION_NAME = 'VISA_P'

export const specific_steps_visa_p_calc = [
  calculate_visa_score(CALCULATION_NAME),
  add_raw_values_to_inputs(VISA_P_INPUTS),
]

export const visa_p: CalculationType = create_calculation({
  calculation_name:
    'Victorian Institute of Sport Assessment – Patella score (VISA-P)',

  readme_location: __dirname,
  calculation_steps: specific_steps_visa_p_calc,
  calculation_definition: {
    input_definition: VISA_P_INPUTS,
    output_definition: VISA_P_OUTPUT,
  },
})
