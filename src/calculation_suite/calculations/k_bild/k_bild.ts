import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { add_raw_values_to_inputs } from '../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../helper_functions/create_calculation'
import { KBILD_INPUTS, KBILD_OUTPUT } from './definition'
import { calculate_domain_scores, calculate_kbild_total_score } from './helpers'

const calculate_pcl5_scores = (
  kbild_inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const total_score = calculate_kbild_total_score(kbild_inputs_with_answers)
  const BREATHLESSNESS_AND_ACTIVITIES_SCORE = calculate_domain_scores(
    kbild_inputs_with_answers,
    'BREATHLESSNESS_AND_ACTIVITIES'
  )
  const PSYCHOLOGICAL_SCORE = calculate_domain_scores(
    kbild_inputs_with_answers,
    'PSYCHOLOGICAL'
  )
  const CHEST_SYMPTOMS_SCORE = calculate_domain_scores(
    kbild_inputs_with_answers,
    'CHEST_SYMPTOMS'
  )

  return [
    {
      id: 'KBILD_RAW_TOTAL_SCORE',
      score: total_score.raw,
    },
    {
      id: 'KBILD_RAW_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE',
      score: BREATHLESSNESS_AND_ACTIVITIES_SCORE.raw,
    },
    {
      id: 'KBILD_RAW_PSYCHOLOGICAL_DOMAIN_SCORE',
      score: PSYCHOLOGICAL_SCORE.raw,
    },
    {
      id: 'KBILD_RAW_CHEST_SYMPTOMS_DOMAIN_SCORE',
      score: CHEST_SYMPTOMS_SCORE.raw,
    },
    {
      id: 'KBILD_TRANSFORMED_TOTAL_SCORE',
      score: total_score.transformed,
    },
    {
      id: 'KBILD_TRANSFORMED_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE',
      score: BREATHLESSNESS_AND_ACTIVITIES_SCORE.transformed,
    },
    {
      id: 'KBILD_TRANSFORMED_PSYCHOLOGICAL_DOMAIN_SCORE',
      score: PSYCHOLOGICAL_SCORE.transformed,
    },
    {
      id: 'KBILD_TRANSFORMED_CHEST_SYMPTOMS_DOMAIN_SCORE',
      score: CHEST_SYMPTOMS_SCORE.transformed,
    },
  ]
}

export const specific_steps_kbild_calc = [
  calculate_pcl5_scores,
  add_raw_values_to_inputs(KBILD_INPUTS),
]

export const k_bild: CalculationType = create_calculation({
  calculation_name:
    'King’s Brief Interstitial Lung Disease (K-BILD) health status questionnaire',
  readme_location: __dirname,
  calculation_steps: specific_steps_kbild_calc,
  calculation_definition: {
    input_definition: KBILD_INPUTS,
    output_definition: KBILD_OUTPUT,
  },
})
