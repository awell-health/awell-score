import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { add_raw_values_to_inputs } from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import { OAS_INPUTS, OAS_OUTPUT, OAS_SUBSCALE_ITEMS } from './definition'
import {
  calculate_mean_score,
  calculate_total_score,
  inverse_raw_input_values_if_needed,
} from './helpers'

const calculate_scores = (
  calculation_input: Array<InputType>
): WIPCalculationResultType => {
  const standardized_calculation_input =
    inverse_raw_input_values_if_needed(calculation_input)

  return [
    {
      id: 'OAS_DAILY_ACTIVITIES_SUM_SCORE',
      score: calculate_total_score(standardized_calculation_input)(
        OAS_SUBSCALE_ITEMS.DAILY_ACTIVITIES
      ),
    },
    {
      id: 'OAS_DAILY_ACTIVITIES_MEAN_SCORE',
      score: calculate_mean_score(standardized_calculation_input)(
        OAS_SUBSCALE_ITEMS.DAILY_ACTIVITIES
      ),
    },
    {
      id: 'OAS_KNOWLEDGE_AND_SKILLS_SUM_SCORE',
      score: calculate_total_score(standardized_calculation_input)(
        OAS_SUBSCALE_ITEMS.KNOWLEDGE_AND_SKILLS
      ),
    },
    {
      id: 'OAS_KNOWLEDGE_AND_SKILLS_MEAN_SCORE',
      score: calculate_mean_score(standardized_calculation_input)(
        OAS_SUBSCALE_ITEMS.KNOWLEDGE_AND_SKILLS
      ),
    },
    {
      id: 'OAS_SELF_ESTEEM_SUM_SCORE',
      score: calculate_total_score(standardized_calculation_input)(
        OAS_SUBSCALE_ITEMS.SELF_ESTEEM
      ),
    },
    {
      id: 'OAS_SELF_ESTEEM_MEAN_SCORE',
      score: calculate_mean_score(standardized_calculation_input)(
        OAS_SUBSCALE_ITEMS.SELF_ESTEEM
      ),
    },
    {
      id: 'OAS_PSYCHOLOGICAL_EXISTENTIAL_SUM_SCORE',
      score: calculate_total_score(standardized_calculation_input)(
        OAS_SUBSCALE_ITEMS.PSYCHOLOGICAL_EXISTENTIAL
      ),
    },
    {
      id: 'OAS_PSYCHOLOGICAL_EXISTENTIAL_MEAN_SCORE',
      score: calculate_mean_score(standardized_calculation_input)(
        OAS_SUBSCALE_ITEMS.PSYCHOLOGICAL_EXISTENTIAL
      ),
    },
    {
      id: 'OAS_HEALTH_SUM_SCORE',
      score: calculate_total_score(standardized_calculation_input)(
        OAS_SUBSCALE_ITEMS.HEALTH
      ),
    },
    {
      id: 'OAS_HEALTH_MEAN_SCORE',
      score: calculate_mean_score(standardized_calculation_input)(
        OAS_SUBSCALE_ITEMS.HEALTH
      ),
    },
    {
      id: 'OAS_HEALTH_PROFESSIONALS_SUM_SCORE',
      score: calculate_total_score(standardized_calculation_input)(
        OAS_SUBSCALE_ITEMS.HEALTH_PROFESSIONALS
      ),
    },
    {
      id: 'OAS_HEALTH_PROFESSIONALS_MEAN_SCORE',
      score: calculate_mean_score(standardized_calculation_input)(
        OAS_SUBSCALE_ITEMS.HEALTH_PROFESSIONALS
      ),
    },
    {
      id: 'OAS_SEXUALITY_SUM_SCORE',
      score: calculate_total_score(standardized_calculation_input)(
        OAS_SUBSCALE_ITEMS.SEXUALITY
      ),
    },
    {
      id: 'OAS_SEXUALITY_MEAN_SCORE',
      score: calculate_mean_score(standardized_calculation_input)(
        OAS_SUBSCALE_ITEMS.SEXUALITY
      ),
    },
    {
      id: 'OAS_TOTAL_SUM_SCORE',
      score: calculate_total_score(standardized_calculation_input)(
        OAS_SUBSCALE_ITEMS.TOTAL
      ),
    },
    {
      id: 'OAS_MEAN_SCORE',
      score: calculate_mean_score(standardized_calculation_input)(
        OAS_SUBSCALE_ITEMS.TOTAL
      ),
    },
  ]
}

export const specific_steps_oas_calc = [
  calculate_scores,
  add_raw_values_to_inputs(OAS_INPUTS),
]

export const oas: CalculationType = create_calculation({
  calculation_name: 'Ostomy Adjustment Scale (OAS)',
  readme_location: __dirname,
  calculation_steps: specific_steps_oas_calc,
  calculation_definition: {
    input_definition: OAS_INPUTS,
    output_definition: OAS_OUTPUT,
  },
})
