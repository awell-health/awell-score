import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const PCL5_OUTPUT = {
  PCL5_PTSS_INDICATION: {
    label: { en: 'PTSS Indication (based on DSM-5 diagnostic rule)' },
    type: z.number(),
  },
  PCL5_TOTAL_SYMPTOM_SEVERITY_SCORE: {
    label: { en: 'Total Symptom Severity Score' },
    type: z.number(),
  },
  PCL5_DSM_5_SYMPTOM_CLUSTER_B: {
    label: { en: 'DSM-5 Symptom Cluster B (items 1-5)' },
    type: z.number(),
  },
  PCL5_DSM_5_SYMPTOM_CLUSTER_C: {
    label: { en: 'DSM-5 Symptom Cluster C (items 6-7)' },
    type: z.number(),
  },
  PCL5_DSM_5_SYMPTOM_CLUSTER_D: {
    label: { en: 'DSM-5 Symptom Cluster D (items 8-14)' },
    type: z.number(),
  },
  PCL5_DSM_5_SYMPTOM_CLUSTER_E: {
    label: { en: 'DSM-5 Symptom Cluster E (items 15-20)' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
