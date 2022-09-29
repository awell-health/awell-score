import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const PSK_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'PSK_SUM_OF_ACTIVITY_SCORES',
    label: { en: 'Sum of activity scores' },
    type: 'number',
  },
  {
    subresult_id: 'PSK_NBR_OF_ACTIVITIES',
    label: { en: 'Number of activity that were scored' },
    type: 'number',
  },
  {
    subresult_id: 'PSK_SCORE',
    label: { en: 'PSK Score' },
    type: 'number',
  },
]
