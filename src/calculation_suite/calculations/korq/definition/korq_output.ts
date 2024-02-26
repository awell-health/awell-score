import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const KORQ_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'KORQ_TOTAL_SCORE',
    label: { en: 'Total score' },
    type: 'number',
  },
  {
    subresult_id: 'KORQ_SYMPTOMS',
    label: { en: 'Symptoms' },
    type: 'number',
  },
  {
    subresult_id: 'KORQ_ACTIVITY_LIMITATIONS',
    label: { en: 'Activity Limitation' },
    type: 'number',
  },
]
