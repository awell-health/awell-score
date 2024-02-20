// @flow
import type {
  CalculationType,
  InputType,
  WIPCalculationResultType
} from '../../../types/calculations.types'
import { add_raw_values_to_inputs } from '../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../helper_functions/create_calculation'
import { ACRO_INPUTS, ACRO_OUTPUT } from './definition'
import { calculate_scores } from './helpers'

const calculate_all_scores = (
  inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const PHYSICAL_SUBSCALE_SCORE = calculate_scores(
    inputs_with_answers,
    'PHYSICAL_SUBSCALE'
  )
  const PSYCHOLOGICAL_APPEARANCE_SUBSCALE = calculate_scores(
    inputs_with_answers,
    'PSYCHOLOGICAL_APPEARANCE_SUBSCALE'
  )
  const PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE = calculate_scores(
    inputs_with_answers,
    'PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE'
  )
  const TOTAL_SCORE = calculate_scores(inputs_with_answers, 'TOTAL_SCORE')

  return [
    {
      id: 'ACRO_GLOBAL_SCORE',
      score: TOTAL_SCORE
    },
    {
      id: 'ACRO_PHYSICAL_SUBSCALE_SCORE',
      score: PHYSICAL_SUBSCALE_SCORE
    },
    {
      id: 'ACRO_PSYCHOLOGICAL_APPEARANCE_SUBSCALE',
      score: PSYCHOLOGICAL_APPEARANCE_SUBSCALE
    },
    {
      id: 'ACRO_PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE',
      score: PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE
    }
  ]
}

const specific_steps_acro_calc = [
  calculate_all_scores,
  add_raw_values_to_inputs(ACRO_INPUTS)
]

export const acro: CalculationType = create_calculation({
  calculation_name: 'Acromegaly Quality of Life Questionnaire (AcroQoL)',
  readme_location: __dirname,
  calculation_steps: specific_steps_acro_calc,
  calculation_definition: {
    input_definition: ACRO_INPUTS,
    output_definition: ACRO_OUTPUT
  }
})
