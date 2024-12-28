import type { CalculationType } from '../../../../types/calculations.types'
import { create_calculation } from '../../../lib/create_calculation'
import { comi_common_calculation } from '../common/comi_common_calculation'
import { COMI_BACK_DOMAINS, COMI_BACK_OUTPUT } from './definition'

export const specific_steps_comi_back_calc = [
  comi_common_calculation(COMI_BACK_DOMAINS),
]

export const comi_back: CalculationType = create_calculation({
  calculation_name: 'COMI Back',
  readme_location: __dirname,
  calculation_steps: specific_steps_comi_back_calc,
  calculation_definition: {
    input_definition: COMI_BACK_DOMAINS,
    output_definition: COMI_BACK_OUTPUT,
  },
})
