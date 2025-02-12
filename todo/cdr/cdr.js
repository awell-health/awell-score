// @flow
import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType
} from '../../../types/calculations.types'
import { rawInputValueLens } from '../../helper_functions/calculation_variants/api/input/lenses'
import { add_raw_values_to_inputs } from '../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../shared_functions'
import { cdr_score_algorithm } from './cdr_score_algorithm'
import { CDR_INPUTS, CDR_OUTPUT } from './definition'

const get_answer =
  (input_id: string) =>
  (calculation_input: Array<InputType>): number =>
    R.compose(
      (answer) => Number(answer),
      (input) => input?.raw_input_value,
      R.find((input) => input.input_id === input_id)
    )(calculation_input)

const calculate_cdr_score = (
  calculation_input: Array<InputType>
): WIPCalculationResultType => {
  const valid_inputs = R.compose(
    R.filter(is_numeric),
    R.map((input) => R.view(rawInputValueLens, input))
  )(calculation_input)

  if (valid_inputs.length !== calculation_input.length) {
    return [
      {
        id: 'CDR_SCORE',
        score: MISSING_MESSAGE
      }
    ]
  }

  const MEMORY = get_answer('MEMORY')(calculation_input)
  const ORIENTATION = get_answer('ORIENTATION')(calculation_input)
  const JUDGEMENT_AND_PROBLEM_SOLVING = get_answer(
    'JUDGEMENT_AND_PROBLEM_SOLVING'
  )(calculation_input)
  const COMMUNITY_AFFAIRS = get_answer('COMMUNITY_AFFAIRS')(calculation_input)
  const HOME_AND_HOBBIES = get_answer('HOME_AND_HOBBIES')(calculation_input)
  const PERSONAL_CARE = get_answer('PERSONAL_CARE')(calculation_input)

  return [
    {
      id: 'CDR_SCORE',
      score: cdr_score_algorithm({
        MEMORY,
        ORIENTATION,
        JUDGEMENT_AND_PROBLEM_SOLVING,
        COMMUNITY_AFFAIRS,
        HOME_AND_HOBBIES,
        PERSONAL_CARE
      })
    }
  ]
}

export const specific_steps_cdr_calc = [
  calculate_cdr_score,
  add_raw_values_to_inputs(CDR_INPUTS)
]

export const cdr: CalculationType = create_calculation({
  calculation_name: `Clinical Dementia Rating (CDR)`,
  readme_location: __dirname,
  calculation_steps: specific_steps_cdr_calc,
  calculation_definition: {
    input_definition: CDR_INPUTS,
    output_definition: CDR_OUTPUT
  }
})
