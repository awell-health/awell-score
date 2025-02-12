// @flow
import type {
  CalculationType,
  InputType,
  WIPCalculationResultType
} from '../../../types/calculations.types'
import { add_raw_values_to_inputs } from '../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import {
  SNAP_INPUTS,
  SNAP_INTERPRETATION_TABLE,
  SNAP_OPPOSITION_DEFIANCE_INTERPRETATION_TABLE,
  SNAP_PARENT_OUTPUT
} from './definition'
import { calculate_subscale_scores } from './helpers'

const calculate_scores = (
  inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const INATTENTION_SUBSET_SCORE = calculate_subscale_scores(
    inputs_with_answers,
    'INATTENTION_SUBSET'
  )
  const HYPERACTIVITY_IMPULSIVITY_SUBSET_SCORE = calculate_subscale_scores(
    inputs_with_answers,
    'HYPERACTIVITY_IMPULSIVITY_SUBSET'
  )
  const OPPOSITION_DEFIANCE_SUBSET_SCORE = calculate_subscale_scores(
    inputs_with_answers,
    'OPPOSITION_DEFIANCE_SUBSET'
  )

  return [
    {
      id: 'SNAP_PARENT_INATTENTION_SCORE',
      score: INATTENTION_SUBSET_SCORE
    },
    {
      id: 'SNAP_PARENT_INATTENTION_SCORE_INTERPRETATION',
      score:
        SNAP_INTERPRETATION_TABLE[INATTENTION_SUBSET_SCORE.toString()] ??
        MISSING_MESSAGE
    },
    {
      id: 'SNAP_PARENT_HYPERACTIVITY_IMPULSIVITY_SCORE',
      score: HYPERACTIVITY_IMPULSIVITY_SUBSET_SCORE
    },
    {
      id: 'SNAP_PARENT_HYPERACTIVITY_IMPULSIVITY_SCORE_INTERPRETATION',
      score:
        SNAP_INTERPRETATION_TABLE[
          HYPERACTIVITY_IMPULSIVITY_SUBSET_SCORE.toString()
        ] ?? MISSING_MESSAGE
    },
    {
      id: 'SNAP_PARENT_OPPOSITION_DEFIANCE_SCORE',
      score: OPPOSITION_DEFIANCE_SUBSET_SCORE
    },
    {
      id: 'SNAP_PARENT_OPPOSITION_DEFIANCE_SCORE_INTERPRETATION',
      score:
        SNAP_OPPOSITION_DEFIANCE_INTERPRETATION_TABLE[
          OPPOSITION_DEFIANCE_SUBSET_SCORE.toString()
        ] ?? MISSING_MESSAGE
    }
  ]
}

const specific_steps_snap_calc = [
  calculate_scores,
  add_raw_values_to_inputs(SNAP_INPUTS)
]

export const snap_parent: CalculationType = create_calculation({
  calculation_name: 'SNAP-IV 26-Item Parent Rating Scale (SNAP)',
  readme_location: __dirname,
  calculation_steps: specific_steps_snap_calc,
  calculation_definition: {
    input_definition: SNAP_INPUTS,
    output_definition: SNAP_PARENT_OUTPUT
  }
})
