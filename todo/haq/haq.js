// @flow
import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType
} from '../../../types/calculations.types'
import { add_raw_values_to_inputs } from '../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { HAQ_INPUTS, HAQ_OUTPUT } from './definition'
import { calculate_section_score } from './helpers'

const calculate_basdai = (
  calculation_input: Array<InputType>
): WIPCalculationResultType => {
  const section_scores = [
    calculate_section_score(calculation_input, 'dressing'),
    calculate_section_score(calculation_input, 'arising'),
    calculate_section_score(calculation_input, 'eating'),
    calculate_section_score(calculation_input, 'walking'),
    calculate_section_score(calculation_input, 'hygiene'),
    calculate_section_score(calculation_input, 'reach'),
    calculate_section_score(calculation_input, 'grip'),
    calculate_section_score(calculation_input, 'activities')
  ]

  const non_missing_section_scores = section_scores.filter(
    (score) => score !== MISSING_MESSAGE
  )

  const MIN_SECTIONDS_NEEDED = 7
  if (non_missing_section_scores.length < MIN_SECTIONDS_NEEDED)
    return [
      {
        id: 'DI',
        score: MISSING_MESSAGE
      }
    ]

  const score =
    // $FlowFixMe
    R.sum(non_missing_section_scores) / non_missing_section_scores.length

  return [
    {
      id: 'DI',
      score
    }
  ]
}

export const specific_steps_haq_calc = [
  calculate_basdai,
  add_raw_values_to_inputs(HAQ_INPUTS)
]

export const haq: CalculationType = create_calculation({
  calculation_name: `The Health Assessment Questionnaire (HAQ)`,
  readme_location: __dirname,
  calculation_steps: specific_steps_haq_calc,
  calculation_definition: {
    input_definition: HAQ_INPUTS,
    output_definition: HAQ_OUTPUT
  }
})
