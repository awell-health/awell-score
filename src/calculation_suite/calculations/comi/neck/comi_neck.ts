import type { CalculationType } from '../../../../types/calculations.types'
import { create_calculation } from '../../../helper_functions/create_calculation'
import { comi_common_calculation } from '../common/comi_common_calculation'
import { COMI_NECK_DOMAINS, COMI_NECK_OUTPUT } from './definition'

export const specific_steps_comi_neck_calc = [
  comi_common_calculation(COMI_NECK_DOMAINS),
]

export const comi_neck: CalculationType = create_calculation({
  calculation_name: 'COMI Neck',
  readme_location: __dirname,
  calculation_steps: specific_steps_comi_neck_calc,
  calculation_definition: {
    input_definition: COMI_NECK_DOMAINS,
    output_definition: COMI_NECK_OUTPUT,
  },
})
