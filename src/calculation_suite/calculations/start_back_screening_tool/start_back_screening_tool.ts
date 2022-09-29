import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import {
  scoreLens,
  subscaleIdLens,
} from '../../helper_functions/calculation_variants/api/subscale/lenses'
import { add_raw_values_to_inputs } from '../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../helper_functions/create_calculation'
import { START_BACK_INPUTS, START_BACK_OUTPUT } from './definition'
import { calculate_total_and_subscale_score } from './helpers/calculate_total_and_subscale_score'
import { classify_risk } from './helpers/classify_risk/classify_risk'

const calculate_start_back_screening_tool_scores = (
  calculation_input: Array<InputType>
): WIPCalculationResultType => {
  const calculated_scores =
    calculate_total_and_subscale_score(calculation_input)

  const start_back_total_score = R.compose(
    R.view(scoreLens),
    R.find(score => R.view(subscaleIdLens, score) === 'START_BACK_TOTAL')
  )(calculated_scores)

  const start_back_subscale_score = R.compose(
    R.view(scoreLens),
    R.find(score => R.view(subscaleIdLens, score) === 'START_BACK_SUBSCALE')
  )(calculated_scores)

  const risk_classification = classify_risk({
    total_score: start_back_total_score,
    subscale_score: start_back_subscale_score,
  })

  return [
    ...calculated_scores,
    {
      id: 'START_BACK_RISK_CLASSIFICATION',
      score: risk_classification.score,
      interpretation: risk_classification.interpretation,
    },
  ]
}

export const specific_steps_start_back_calc = [
  calculate_start_back_screening_tool_scores,
  add_raw_values_to_inputs(START_BACK_INPUTS),
]

export const start_back_screening_tool: CalculationType = create_calculation({
  calculation_name: 'Start Back Screening Tool',
  readme_location: __dirname,
  calculation_steps: specific_steps_start_back_calc,
  calculation_definition: {
    input_definition: START_BACK_INPUTS,
    output_definition: START_BACK_OUTPUT,
  },
})
