import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { add_raw_values_to_inputs } from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import { PAQ_C_OUTPUT, PAQ_Q_INPUTS } from './definition'
import {
  calculate_activity_summary_score,
  calculate_item_1_spare_time_activity_score,
  calculate_item_9_activity_score,
  calculate_items_2_to_8_activity_score,
} from './helpers'

export const calculate_paq_c_scores = (
  paq_c_questions_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const COMPOSITE_ACTIVITY_SCORE_ITEM_1 =
    calculate_item_1_spare_time_activity_score(paq_c_questions_with_answers)

  const COMPOSITE_ACTIVITY_SCORE_ITEMS_2_TO_8 =
    calculate_items_2_to_8_activity_score(paq_c_questions_with_answers)

  const COMPOSITE_ACTIVITY_SCORE_ITEM_9 = calculate_item_9_activity_score(
    paq_c_questions_with_answers
  )

  const ACTIVITY_SUMMARY_SCORE = calculate_activity_summary_score([
    COMPOSITE_ACTIVITY_SCORE_ITEM_1,
    COMPOSITE_ACTIVITY_SCORE_ITEMS_2_TO_8,
    COMPOSITE_ACTIVITY_SCORE_ITEM_9,
  ])

  return [
    {
      id: 'ITEM_1_SPARE_TIME_ACTIVITY_SCORE',
      score: COMPOSITE_ACTIVITY_SCORE_ITEM_1,
    },
    {
      id: 'ITEMS_2_TO_8_ACTIVITY_SCORE',
      score: COMPOSITE_ACTIVITY_SCORE_ITEMS_2_TO_8,
    },
    {
      id: 'ITEM_9_ACTIVITY_SCORE',
      score: COMPOSITE_ACTIVITY_SCORE_ITEM_9,
    },
    {
      id: 'ACTIVITY_SUMMARY_SCORE',
      score: ACTIVITY_SUMMARY_SCORE,
    },
  ]
}

export const specific_steps_paq_c_calc = [
  calculate_paq_c_scores,
  add_raw_values_to_inputs(PAQ_Q_INPUTS),
]

export const paq_c: CalculationType = create_calculation({
  calculation_name:
    'The Physical Activity Questionnaire for Older Children (PAQ-C)',
  readme_location: __dirname,
  calculation_steps: specific_steps_paq_c_calc,
  calculation_definition: {
    input_definition: PAQ_Q_INPUTS,
    output_definition: PAQ_C_OUTPUT,
  },
})
