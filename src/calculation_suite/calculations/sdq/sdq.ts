import R from 'ramda'

import type {
  CalculationType,
  IncomingCalculationInputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { add_response_values_to_subscale_inputs } from '../../lib/calculation_variants/calculation_with_subscales'
import { create_calculation } from '../../lib/create_calculation'
import { SDQ_OUTPUT, SDQ_SUBSCALES } from './definition'
import {
  add_externalising_and_internalising_scores,
  add_interpretation_categories_for_impact_scales,
  add_interpretation_categories_for_problem_scales,
  add_total_score,
  calculate_subscale_scores,
} from './helpers'

const calculate_sdq_subscale_scores = (
  calculation_input: IncomingCalculationInputType
): WIPCalculationResultType =>
  //@ts-expect-error to do
  R.compose(
    R.map(({ id, score }) => ({
      id,
      score,
    })),
    R.map(calculate_subscale_scores),
    add_response_values_to_subscale_inputs(calculation_input)
  )(SDQ_SUBSCALES)

export const specific_steps_sdq_calc = [
  add_interpretation_categories_for_impact_scales,
  add_interpretation_categories_for_problem_scales,
  add_externalising_and_internalising_scores,
  add_total_score,
  calculate_sdq_subscale_scores,
]

export const sdq: CalculationType = create_calculation({
  calculation_name: `Strengths & Difficulties Questionnaire (SDQ)`,
  readme_location: __dirname,
  calculation_steps: specific_steps_sdq_calc,
  calculation_definition: {
    input_definition: SDQ_SUBSCALES,
    output_definition: SDQ_OUTPUT,
  },
})
