import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../../types/calculations.types'
import {
  inputIdLens,
  rawInputValueLens,
  stdInputValueLens,
} from '../../../lib/calculation_variants/api/input/lenses'
import {
  add_raw_values_to_inputs,
  get_valid_values,
} from '../../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import {
  CADE_Q_INPUTS,
  CADE_Q_OUTPUT,
  CORRECT_ANSWER_PER_ITEM,
} from './definition'

const is_given_answer_correct = (input: InputType): InputType => {
  const POINT_IF_CORRECT = 1
  const POINT_IF_NOT_CORRECT = 0

  const answer = R.view(rawInputValueLens, input)
  const input_id = R.view(inputIdLens, input)

  //@ts-expect-error to do
  const expected_answer = CORRECT_ANSWER_PER_ITEM[input_id]

  const is_correct = answer === expected_answer

  return R.set(
    stdInputValueLens,
    is_correct ? POINT_IF_CORRECT : POINT_IF_NOT_CORRECT,
    input
  )
}

const calculate_fjs_12_score = (
  inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  if (get_valid_values(inputs_with_answers).length === 0)
    return [
      {
        id: 'CADE_Q_SV_SCORE',
        score: MISSING_MESSAGE,
      },
    ]

  /**
   * We'll check if the given answer is the correct answer.
   * Every correct answer is worth 1 point.
   */
  const score = R.compose(
    R.sum,
    R.map(input => R.view(stdInputValueLens, input)),
    R.map(is_given_answer_correct)
  )(inputs_with_answers)

  return [
    {
      id: 'CADE_Q_SV_SCORE',
      score,
    },
  ]
}

export const specific_steps_cade_q_sv_calc = [
  calculate_fjs_12_score,
  add_raw_values_to_inputs(CADE_Q_INPUTS),
]

export const cade_q_sv: CalculationType = create_calculation({
  calculation_name:
    'Coronary Artery Disease Education Questionnaire – Short Version (CADE-Q SV)',
  readme_location: __dirname,
  calculation_steps: specific_steps_cade_q_sv_calc,
  calculation_definition: {
    input_definition: CADE_Q_INPUTS,
    output_definition: CADE_Q_OUTPUT,
  },
})
