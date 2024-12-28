import type {
  CalculationType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { create_calculation } from '../../lib/create_calculation'
import { DEMO_INPUTS, DEMO_OUTPUT } from './definition'

const calculate_demo_score = (): WIPCalculationResultType => [
  {
    id: 'DEMO',
    score: 'Hello world',
  },
]

export const specific_steps_demo_calc = [calculate_demo_score]

export const demo_calculation: CalculationType = create_calculation({
  calculation_name: `Demo calculation`,
  readme_location: __dirname,
  calculation_steps: specific_steps_demo_calc,
  calculation_definition: {
    input_definition: DEMO_INPUTS,
    output_definition: DEMO_OUTPUT,
  },
})
