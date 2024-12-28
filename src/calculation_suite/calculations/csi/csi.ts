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
import { CSI_INPUTS, CSI_OUTPUT } from './definition'

export const CSICalculationID = 'csi'

const CUT_OFF_SCORE = 40

const calculate_csi_score = (
  CSI_INPUTS_with_answers: Array<InputType>
): WIPCalculationResultType => {
  if (do_all_required_inputs_have_a_valid_value(CSI_INPUTS_with_answers)) {
    const result = R.sum(get_valid_values(CSI_INPUTS_with_answers))
    const sensitivation_is_present = result >= CUT_OFF_SCORE

    const readable_result = sensitivation_is_present
      ? `Central sensitisation present (score >= ${CUT_OFF_SCORE})`
      : `Central sensitisation not present (Score <${CUT_OFF_SCORE})`

    return [
      {
        id: CSICalculationID,
        score: result,
        interpretation: { en: `${readable_result}` },
      },
    ]
  }

  return [
    {
      id: CSICalculationID,
      score: MISSING_MESSAGE,
    },
  ]
}

export const specific_steps_csi_calc = [
  calculate_csi_score,
  add_raw_values_to_inputs(CSI_INPUTS),
]

export const csi: CalculationType = create_calculation({
  calculation_name: `Central Sensitization Inventory (CSI)`,
  readme_location: __dirname,
  calculation_steps: specific_steps_csi_calc,
  calculation_definition: {
    input_definition: CSI_INPUTS,
    output_definition: CSI_OUTPUT,
  },
})
