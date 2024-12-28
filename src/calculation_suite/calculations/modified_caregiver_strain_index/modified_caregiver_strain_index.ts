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
import {
  MODIFIED_CAREGIVER_STRAIN_INDEX_INPUTS,
  MODIFIED_CAREGIVER_STRAIN_INDEX_OUTPUT,
} from './definition'

export const MODIFIED_CAREGIVER_STRAIN_INDEX_ID =
  'MODIFIED_CAREGIVER_STRAIN_INDEX'

const calculate_score = (
  csi_inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  if (do_all_required_inputs_have_a_valid_value(csi_inputs_with_answers)) {
    const total_score = R.sum(get_valid_values(csi_inputs_with_answers))

    return [
      {
        id: MODIFIED_CAREGIVER_STRAIN_INDEX_ID,
        score: total_score,
      },
    ]
  }

  return [
    {
      id: MODIFIED_CAREGIVER_STRAIN_INDEX_ID,
      score: MISSING_MESSAGE,
    },
  ]
}

export const specific_steps_modified_caregiver_strain_index_calc = [
  calculate_score,
  add_raw_values_to_inputs(MODIFIED_CAREGIVER_STRAIN_INDEX_INPUTS),
]

export const modified_caregiver_strain_index: CalculationType =
  create_calculation({
    calculation_name: 'Modified Caregiver Strain Index (Modified CSI)',
    readme_location: __dirname,
    calculation_steps: specific_steps_modified_caregiver_strain_index_calc,
    calculation_definition: {
      input_definition: MODIFIED_CAREGIVER_STRAIN_INDEX_INPUTS,
      output_definition: MODIFIED_CAREGIVER_STRAIN_INDEX_OUTPUT,
    },
  })
