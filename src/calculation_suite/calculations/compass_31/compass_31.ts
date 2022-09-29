import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { add_raw_values_to_inputs } from '../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../helper_functions/create_calculation'
import { COMPASS_13_OUTPUT, COMPASS_31_INPUTS } from './definition'
import { calculate_domain_scores } from './helpers'

const calculate_scores = (
  inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const ORTHOSTATIC_INTOLERANCE_SCORE = calculate_domain_scores(
    inputs_with_answers,
    'ORTHOSTATIC_INTOLERANCE'
  )
  const VASOMOTOR_SCORE = calculate_domain_scores(
    inputs_with_answers,
    'VASOMOTOR'
  )
  const SECRETOMOTOR_SCORE = calculate_domain_scores(
    inputs_with_answers,
    'SECRETOMOTOR'
  )
  const GASTROINTESTINAL_SCORE = calculate_domain_scores(
    inputs_with_answers,
    'GASTROINTESTINAL'
  )
  const BLADDER_SCORE = calculate_domain_scores(inputs_with_answers, 'BLADDER')
  const PUPILLOMOTOR_SCORE = calculate_domain_scores(
    inputs_with_answers,
    'PUPILLOMOTOR'
  )

  return [
    {
      id: 'COMPASS_13_ORTHOSTATIC_INTOLERANCE',
      score: ORTHOSTATIC_INTOLERANCE_SCORE.weighted,
    },
    {
      id: 'COMPASS_13_VASOMOTOR',
      score: VASOMOTOR_SCORE.weighted,
    },
    {
      id: 'COMPASS_13_SECRETOMOTOR',
      score: SECRETOMOTOR_SCORE.weighted,
    },
    {
      id: 'COMPASS_13_GASTROINTESTINAL',
      score: GASTROINTESTINAL_SCORE.weighted,
    },
    {
      id: 'COMPASS_13_BLADDER',
      score: BLADDER_SCORE.weighted,
    },
    {
      id: 'COMPASS_13_PUPILLOMOTOR',
      score: PUPILLOMOTOR_SCORE.weighted,
    },
    {
      id: 'COMPASS_13_TOTAL_SCORE',
      score: R.sum([
        ORTHOSTATIC_INTOLERANCE_SCORE.weighted,
        VASOMOTOR_SCORE.weighted,
        SECRETOMOTOR_SCORE.weighted,
        GASTROINTESTINAL_SCORE.weighted,
        BLADDER_SCORE.weighted,
        PUPILLOMOTOR_SCORE.weighted,
      ]),
    },
  ]
}

export const specific_stepscompass_calc = [
  calculate_scores,
  add_raw_values_to_inputs(COMPASS_31_INPUTS),
]

export const compass_31: CalculationType = create_calculation({
  calculation_name: 'COMPASS 31 (Composite Autonomic Symptom Score)',
  readme_location: __dirname,
  calculation_steps: specific_stepscompass_calc,
  calculation_definition: {
    input_definition: COMPASS_31_INPUTS,
    output_definition: COMPASS_13_OUTPUT,
  },
})
