import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { add_raw_values_to_inputs } from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import { PROMIS_10_INPUTS, PROMIS_10_OUTPUT } from './definition'
import {
  GLOBAL_MENTAL_HEALTH_T_TABLE,
  GLOBAL_PHYSICAL_HEALTH_T_TABLE,
} from './definition/t_score_tables'
import {
  calculate_raw_score,
  calculate_t_score,
  recode_question_7r,
} from './helpers'

const calculate_promis_10_scores = (
  calculation_input: Array<InputType>
): WIPCalculationResultType => {
  const INPUT_IDS_GLOBAL_PHYSICAL_HEALTH = [
    'PROMIS_10_Q03',
    'PROMIS_10_Q06',
    'PROMIS_10_Q07RC',
    'PROMIS_10_Q08R',
  ]

  const INPUT_IDS_GLOBAL_MENTAL_HEALTH = [
    'PROMIS_10_Q02',
    'PROMIS_10_Q04',
    'PROMIS_10_Q05',
    'PROMIS_10_Q10R',
  ]

  const global_physical_health_raw_score = calculate_raw_score(
    calculation_input
  )(INPUT_IDS_GLOBAL_PHYSICAL_HEALTH)
  const global_mental_health_raw_score = calculate_raw_score(calculation_input)(
    INPUT_IDS_GLOBAL_MENTAL_HEALTH
  )

  return [
    {
      id: 'GLOBAL_PHYSICAL_HEALTH_RAW_SCORE',
      score: global_physical_health_raw_score,
    },
    {
      id: 'GLOBAL_MENTAL_HEALTH_RAW_SCORE',
      score: global_mental_health_raw_score,
    },
    {
      id: 'GLOBAL_PHYSICAL_HEALTH_T_SCORE',
      score: calculate_t_score(global_physical_health_raw_score)(
        GLOBAL_PHYSICAL_HEALTH_T_TABLE
      ),
    },
    {
      id: 'GLOBAL_MENTAL_HEALTH_T_SCORE',
      score: calculate_t_score(global_mental_health_raw_score)(
        GLOBAL_MENTAL_HEALTH_T_TABLE
      ),
    },
  ]
}

export const specific_steps_promis_10_calc = [
  calculate_promis_10_scores,
  recode_question_7r,
  add_raw_values_to_inputs(PROMIS_10_INPUTS),
]

export const promis_10: CalculationType = create_calculation({
  calculation_name: `PROMIS-10`,
  readme_location: __dirname,
  calculation_steps: specific_steps_promis_10_calc,
  calculation_definition: {
    input_definition: PROMIS_10_INPUTS,
    output_definition: PROMIS_10_OUTPUT,
  },
})
