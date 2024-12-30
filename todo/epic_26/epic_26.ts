import R from 'ramda'

import type {
  CalculationType,
  IncomingCalculationInputType,
  WIPCalculationResultType,
} from '../../src/types/calculations.types'
import {
  add_response_values_to_subscale_inputs,
  add_standardized_values_to_subscale_inputs,
} from '../../lib/calculation_variants/calculation_with_subscales'
import { create_calculation } from '../../lib/create_calculation'
import { EPIC_26_HRQOL_DOMAINS, EPIC_26_OUTPUT } from './definition'
import { EPIC_26_standardization } from './epic_26_conversion_table'
import { add_score_to_domains_and_handle_missing_data } from './helpers/add_score_to_domains_and_handle_missing_data'

export const calculate_epic_26_scores = (
  calculation_input: IncomingCalculationInputType,
): WIPCalculationResultType => {
  const readable_calculation_name = 'EPIC-26'

  //@ts-expect-error to do
  const subscales_with_scores = R.compose(
    add_score_to_domains_and_handle_missing_data,
    add_standardized_values_to_subscale_inputs({
      standardization_table: EPIC_26_standardization,
      readable_calculation_name,
    }),
    add_response_values_to_subscale_inputs(calculation_input),
  )(EPIC_26_HRQOL_DOMAINS)

  return [
    ...subscales_with_scores.map(({ id, score }) => ({
      id,
      score,
    })),
  ]
}

export const specific_steps_epic_26_calc = [calculate_epic_26_scores]

export const epic_26: CalculationType = create_calculation({
  calculation_name: `Expanded Prostate Cancer Index Composite-26 (EPIC-26)`,
  readme_location: __dirname,
  calculation_steps: specific_steps_epic_26_calc,
  calculation_definition: {
    input_definition: EPIC_26_HRQOL_DOMAINS,
    output_definition: EPIC_26_OUTPUT,
  },
})
