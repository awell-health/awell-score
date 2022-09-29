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
} from '../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import {
  CAREGIVER_STRAIN_INDEX_INPUTS,
  CAREGIVER_STRAIN_INDEX_OUTPUT,
} from './definition'

export const CAREGIVER_STRAIN_INDEX_ID = 'CAREGIVER_STRAIN_INDEX'

const calculate_score = (
  csi_inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  if (do_all_required_inputs_have_a_valid_value(csi_inputs_with_answers)) {
    const total_score = R.sum(get_valid_values(csi_inputs_with_answers))

    return [
      {
        id: CAREGIVER_STRAIN_INDEX_ID,
        score: total_score,
      },
    ]
  }

  return [
    {
      id: CAREGIVER_STRAIN_INDEX_ID,
      score: MISSING_MESSAGE,
    },
  ]
}

export const specific_steps_caregiver_strain_index_calc = [
  calculate_score,
  add_raw_values_to_inputs(CAREGIVER_STRAIN_INDEX_INPUTS),
]

export const caregiver_strain_index: CalculationType = create_calculation({
  calculation_name: 'Caregiver Strain Index (CSI)',
  readme_location: __dirname,
  calculation_steps: specific_steps_caregiver_strain_index_calc,
  calculation_definition: {
    input_definition: CAREGIVER_STRAIN_INDEX_INPUTS,
    output_definition: CAREGIVER_STRAIN_INDEX_OUTPUT,
  },
})
