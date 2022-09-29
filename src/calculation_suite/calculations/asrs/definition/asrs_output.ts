import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const ASRS_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'ASRS_PART_A_SCORE',
    label: { en: 'ASRS - Part A' },
    type: 'number',
  },
  {
    subresult_id: 'ASRS_PART_B_SCORE',
    label: { en: 'ASRS - Part B' },
    type: 'number',
  },
  {
    subresult_id: 'ASRS_TOTAL_SCORE',
    label: { en: 'ASRS - Total Score' },
    type: 'number',
  },
  {
    subresult_id: 'ASRS_INATTENTIVE_SUBSCALE_SCORE',
    label: { en: 'ASRS - Inattentive Subscale Score' },
    type: 'number',
  },
  {
    subresult_id: 'ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR_SCORE',
    label: { en: 'ASRS - Hyperactive/Impulsive Subscale (Motor)' },
    type: 'number',
  },
  {
    subresult_id: 'ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL_SCORE',
    label: { en: 'ASRS - Hyperactive/Impulsive Subscale (Verbal)' },
    type: 'number',
  },
]
