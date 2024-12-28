import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import {
  add_raw_values_to_inputs,
  do_all_required_inputs_have_a_valid_value,
  get_valid_values,
} from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { ESS_INPUTS, ESS_OUTPUT } from './definition'

export const ESSCalculationName = 'ess'

const calculate_ess_score = (
  cpdi_inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  if (do_all_required_inputs_have_a_valid_value(cpdi_inputs_with_answers)) {
    const total_score = R.sum(get_valid_values(cpdi_inputs_with_answers))

    return [
      {
        id: ESSCalculationName,
        score: total_score,
      },
    ]
  }

  return [
    {
      id: ESSCalculationName,
      score: MISSING_MESSAGE,
    },
  ]
}

export const specific_steps_ess_calc = [
  calculate_ess_score,
  add_raw_values_to_inputs(ESS_INPUTS),
]

export const ess: CalculationType = create_calculation({
  calculation_name: `Epworth Sleepiness Scale (ESS)`,
  readme_location: __dirname,
  calculation_steps: specific_steps_ess_calc,
  calculation_definition: {
    input_definition: ESS_INPUTS,
    output_definition: ESS_OUTPUT,
  },
})
