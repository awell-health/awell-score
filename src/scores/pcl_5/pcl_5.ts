import { ScoreType } from '../../types'
import { PCL5_INPUTS, PCL5_OUTPUT } from './definition'
import {
  calculateTotalSymptomSeverityScore,
  calculateClusterScores,
  determinePTSSIndication,
} from './helpers'

export const pcl_5: ScoreType<typeof PCL5_INPUTS, typeof PCL5_OUTPUT> = {
  name: 'The Post-Traumatic Stress Disorder Checklist for DSM-5 (PCL-5)',
  readmeLocation: __dirname,
  inputSchema: PCL5_INPUTS,
  outputSchema: PCL5_OUTPUT,
  calculate: ({ data }) => {
    return {
      PCL5_PTSS_INDICATION: determinePTSSIndication(data),
      PCL5_TOTAL_SYMPTOM_SEVERITY_SCORE:
        calculateTotalSymptomSeverityScore(data),
      PCL5_DSM_5_SYMPTOM_CLUSTER_B: calculateClusterScores(data, 'B'),
      PCL5_DSM_5_SYMPTOM_CLUSTER_C: calculateClusterScores(data, 'C'),
      PCL5_DSM_5_SYMPTOM_CLUSTER_D: calculateClusterScores(data, 'D'),
      PCL5_DSM_5_SYMPTOM_CLUSTER_E: calculateClusterScores(data, 'E'),
    }
  },
}
