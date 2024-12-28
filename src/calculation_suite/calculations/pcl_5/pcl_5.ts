import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { add_raw_values_to_inputs } from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import { PCL5_INPUTS, PCL5_OUTPUT } from './definition'
import {
  calculate_cluster_scores,
  calculate_total_symptom_severity_score,
  determine_ptss_indication,
} from './helpers'

const calculate_pcl5_scores = (
  pcl5_inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const total_symptom_severity_score = calculate_total_symptom_severity_score(
    pcl5_inputs_with_answers
  )
  const cluster_B_score = calculate_cluster_scores(
    pcl5_inputs_with_answers,
    'B'
  )
  const cluster_C_score = calculate_cluster_scores(
    pcl5_inputs_with_answers,
    'C'
  )
  const cluster_D_score = calculate_cluster_scores(
    pcl5_inputs_with_answers,
    'D'
  )
  const cluster_E_score = calculate_cluster_scores(
    pcl5_inputs_with_answers,
    'E'
  )
  const ptss_indication = determine_ptss_indication(pcl5_inputs_with_answers)

  return [
    {
      id: 'PCL5_TOTAL_SYMPTOM_SEVERITY_SCORE',
      score: total_symptom_severity_score,
    },
    {
      id: 'PCL5_DSM_5_SYMPTOM_CLUSTER_B',
      score: cluster_B_score,
    },
    {
      id: 'PCL5_DSM_5_SYMPTOM_CLUSTER_C',
      score: cluster_C_score,
    },
    {
      id: 'PCL5_DSM_5_SYMPTOM_CLUSTER_D',
      score: cluster_D_score,
    },
    {
      id: 'PCL5_DSM_5_SYMPTOM_CLUSTER_E',
      score: cluster_E_score,
    },
    {
      id: 'PCL5_PTSS_INDICATION',
      score: ptss_indication,
    },
  ]
}

export const specific_steps_pcl5_calc = [
  calculate_pcl5_scores,
  add_raw_values_to_inputs(PCL5_INPUTS),
]

export const pcl_5: CalculationType = create_calculation({
  calculation_name: 'PTSD Checklist for DSM-5 (PCL-5)',
  readme_location: __dirname,
  calculation_steps: specific_steps_pcl5_calc,
  calculation_definition: {
    input_definition: PCL5_INPUTS,
    output_definition: PCL5_OUTPUT,
  },
})
