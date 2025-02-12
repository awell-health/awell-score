// @flow
import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType
} from '../../../types/calculations.types'
import {
  inputIdLens,
  rawInputValueLens
} from '../../helper_functions/calculation_variants/api/input/lenses'
import { add_raw_values_to_inputs } from '../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../shared_functions'
import { WOMAC_INPUTS, WOMAC_OUTPUT } from './definition'
import { WOMAC_SECTIONS } from './definition/womac_sections'

export const calculate_section_score =
  (calculation_input: Array<InputType>) =>
  (input_ids: string[]): number | string => {
    const valid_inputs = R.compose(
      R.filter(is_numeric),
      R.map((input) => R.view(rawInputValueLens, input)),
      R.filter((input) => input_ids.includes(R.view(inputIdLens, input)))
    )(calculation_input)

    if (valid_inputs.length === 0) return MISSING_MESSAGE

    return R.sum(valid_inputs)
  }

const calculate_womac = (
  calculation_input: Array<InputType>
): WIPCalculationResultType => {
  const pain_score = calculate_section_score(calculation_input)(
    WOMAC_SECTIONS.PAIN
  )
  const stiffness_score = calculate_section_score(calculation_input)(
    WOMAC_SECTIONS.STIFFNESS
  )
  const difficulty_score = calculate_section_score(calculation_input)(
    WOMAC_SECTIONS.DIFFICULTY
  )

  const valid_section_scores = R.compose(
    R.filter(is_numeric),
    R.map((score) => Number(score)),
    R.filter((score) => score !== MISSING_MESSAGE)
  )([pain_score, stiffness_score, difficulty_score])

  const total_score =
    valid_section_scores.length === 0
      ? MISSING_MESSAGE
      : R.sum(valid_section_scores)

  return [
    {
      id: 'WOMAC_TOTAL_SCORE',
      score: total_score
    },
    {
      id: 'WOMAC_PAIN_SCORE',
      score: pain_score
    },
    {
      id: 'WOMAC_STIFFNESS_SCORE',
      score: stiffness_score
    },
    {
      id: 'WOMAC_DIFFICULTY_SCORE',
      score: difficulty_score
    }
  ]
}

export const specific_steps_womac_calc = [
  calculate_womac,
  add_raw_values_to_inputs(WOMAC_INPUTS)
]

export const womac: CalculationType = create_calculation({
  calculation_name: `The Western Ontario and McMaster Universities Osteoarthritis Index (WOMAC)`,
  readme_location: __dirname,
  calculation_steps: specific_steps_womac_calc,
  calculation_definition: {
    input_definition: WOMAC_INPUTS,
    output_definition: WOMAC_OUTPUT
  }
})
