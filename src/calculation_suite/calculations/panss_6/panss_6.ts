import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { add_raw_values_to_inputs } from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import { PANNS_6_OUTPUT, PANSS_6_INPUTS } from './definition'
import { calculate_scale_scores, calculate_total_score } from './helpers'

const calculate_scores = (
  inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const total_score = calculate_total_score(inputs_with_answers)
  const POSITIVE_SCALE_SCORE = calculate_scale_scores(
    inputs_with_answers,
    'POSITIVE_SCALE'
  )
  const NEGATIVE_SCALE_SCORE = calculate_scale_scores(
    inputs_with_answers,
    'NEGATIVE_SCALE'
  )

  return [
    {
      id: 'PANNS_6_TOTAL_SCORE',
      score: total_score,
    },
    {
      id: 'PANNS_6_POSITIVE_SCALE_SCORE',
      score: POSITIVE_SCALE_SCORE,
    },
    {
      id: 'PANNS_6_NEGATIVE_SCALE_SCORE',
      score: NEGATIVE_SCALE_SCORE,
    },
  ]
}

export const specific_steps_panss_6_calc = [
  calculate_scores,
  add_raw_values_to_inputs(PANSS_6_INPUTS),
]

export const panss_6: CalculationType = create_calculation({
  calculation_name: 'Positive and Negative Syndrome Scale (PANSS-6)',
  readme_location: __dirname,
  calculation_steps: specific_steps_panss_6_calc,
  calculation_definition: {
    input_definition: PANSS_6_INPUTS,
    output_definition: PANNS_6_OUTPUT,
  },
})
