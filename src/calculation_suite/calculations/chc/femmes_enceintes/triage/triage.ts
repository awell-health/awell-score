import { round } from 'lodash'
import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../../../types/calculations.types'
import {
  inputIdLens,
  rawInputValueLens,
  stdInputValueLens,
} from '../../../../helper_functions/calculation_variants/api/input/lenses'
import { add_raw_values_to_inputs } from '../../../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../../../helper_functions/create_calculation'
import { is_numeric } from '../../../shared_functions'
import { TRIAGE_INPUTS, TRIAGE_OUTPUT, TRIAGE_WEIGHTS } from './definition'

const calculate = (
  inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const inputs_with_weighted_scores = R.map(input => {
    const rawAnswer = R.view(rawInputValueLens, input)
    const inputId = R.view(inputIdLens, input)

    const weight = TRIAGE_WEIGHTS[inputId] || 0
    const weightedAnswer = rawAnswer * weight

    return R.set(stdInputValueLens, weightedAnswer, input)
  }, inputs_with_answers)

  const sum_score_of_weighted_answers = R.compose(
    R.sum,
    R.filter(is_numeric),
    R.map(answer => Number(answer)),
    R.map(input => R.view(stdInputValueLens, input))
  )(inputs_with_weighted_scores)

  const ROUND_TO = 2

  return [
    {
      id: 'FEMMES_ENCEINTES_TRIAGE',
      score: round(sum_score_of_weighted_answers, ROUND_TO),
    },
  ]
}

export const specific_steps_calc = [
  calculate,
  add_raw_values_to_inputs(TRIAGE_INPUTS),
]

export const femmes_enceintes_triage: CalculationType = create_calculation({
  calculation_name: 'Femmes enceintes triage',
  readme_location: __dirname,
  calculation_steps: specific_steps_calc,
  calculation_definition: {
    input_definition: TRIAGE_INPUTS,
    output_definition: TRIAGE_OUTPUT,
  },
})
