import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const DN4_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'PATIENT_INTERVIEW_SCORE',
    label: { en: "Patient's interview score" },
    type: 'number',
  },
  {
    subresult_id: 'PATIENT_EXAMINIATION_SCORE',
    label: { en: "Patient's examiniation score" },
    type: 'number',
  },
  {
    subresult_id: 'PATIENT_TOTAL_SCORE',
    label: { en: "Patient's total score" },
    type: 'number',
  },
]
