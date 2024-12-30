import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../src/types/calculations.types'
import { add_raw_values_to_inputs } from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../../src/calculation_suite/calculations/shared_functions'
import { KORQ_INPUTS, KORQ_OUTPUT } from './definition'
import { calculate_subscale_scores } from './helpers'

const calculate_scores = (
  inputs_with_answers: Array<InputType>,
): WIPCalculationResultType => {
  const KORQ_ACTIVITY_LIMITATIONS = calculate_subscale_scores(
    inputs_with_answers,
    'KORQ_ACTIVITY_LIMITATIONS',
  )
  const KORQ_SYMPTOMS = calculate_subscale_scores(
    inputs_with_answers,
    'KORQ_SYMPTOMS',
  )

  const valid_subscale_scores = R.compose(
    R.filter(is_numeric),
    R.map(score => Number(score)),
    R.filter(score => score !== MISSING_MESSAGE),
  )([KORQ_ACTIVITY_LIMITATIONS, KORQ_SYMPTOMS])

  const TOTAL_SCORE =
    valid_subscale_scores.length === 0
      ? MISSING_MESSAGE
      : R.sum(valid_subscale_scores)

  return [
    {
      id: 'KORQ_TOTAL_SCORE',
      score: TOTAL_SCORE,
    },
    {
      id: 'KORQ_ACTIVITY_LIMITATIONS',
      score: KORQ_ACTIVITY_LIMITATIONS,
    },
    {
      id: 'KORQ_SYMPTOMS',
      score: KORQ_SYMPTOMS,
    },
  ]
}

const korq_calc = [calculate_scores, add_raw_values_to_inputs(KORQ_INPUTS)]

export const korq: CalculationType = create_calculation({
  calculation_name: 'Keratoconus Outcomes Research Questionnaire (KORQ)',
  readme_location: __dirname,
  calculation_steps: korq_calc,
  calculation_definition: {
    input_definition: KORQ_INPUTS,
    output_definition: KORQ_OUTPUT,
  },
})
