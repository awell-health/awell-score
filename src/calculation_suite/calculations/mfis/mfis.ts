import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { add_raw_values_to_inputs } from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../shared_functions'
import { MFIS_INPUTS, MFIS_OUTPUT } from './definition'
import { calculate_subscale_scores } from './helpers'

const calculate_scores = (
  inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const PHYSICAL_SUBSCALE_SCORE = calculate_subscale_scores(
    inputs_with_answers,
    'PHYSICAL_SUBSCALE'
  )
  const COGNITIVE_SUBSCALE_SCORE = calculate_subscale_scores(
    inputs_with_answers,
    'COGNITIVE_SUBSCALE'
  )
  const PSYCHOSOCIAL_SUBSCALE_SCORE = calculate_subscale_scores(
    inputs_with_answers,
    'PSYCHOSOCIAL_SUBSCALE'
  )

  const valid_subscale_scores = R.compose(
    R.filter(is_numeric),
    R.map(score => Number(score)),
    R.filter(score => score !== MISSING_MESSAGE)
  )([
    PHYSICAL_SUBSCALE_SCORE,
    COGNITIVE_SUBSCALE_SCORE,
    PSYCHOSOCIAL_SUBSCALE_SCORE,
  ])

  const TOTAL_SCORE =
    valid_subscale_scores.length === 0
      ? MISSING_MESSAGE
      : R.sum(valid_subscale_scores)

  return [
    {
      id: 'MFIS_TOTAL_SCORE',
      score: TOTAL_SCORE,
    },
    {
      id: 'MFIS_PHYSICAL_SUBSCALE_SCORE',
      score: PHYSICAL_SUBSCALE_SCORE,
    },
    {
      id: 'MFIS_COGNITIVE_SUBSCALE_SCORE',
      score: COGNITIVE_SUBSCALE_SCORE,
    },
    {
      id: 'MFIS_PSYCHOSOCIAL_SUBSCALE_SCORE',
      score: PSYCHOSOCIAL_SUBSCALE_SCORE,
    },
  ]
}

const specific_steps_mfis_calc = [
  calculate_scores,
  add_raw_values_to_inputs(MFIS_INPUTS),
]

export const mfis: CalculationType = create_calculation({
  calculation_name: 'Modified Fatigue Impact Scale (MFIS)',
  readme_location: __dirname,
  calculation_steps: specific_steps_mfis_calc,
  calculation_definition: {
    input_definition: MFIS_INPUTS,
    output_definition: MFIS_OUTPUT,
  },
})
