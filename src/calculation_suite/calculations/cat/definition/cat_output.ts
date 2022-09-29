import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const CAT_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'CAT_POINTS',
    label: { en: 'CAT points' },
    type: 'number',
  },
  {
    subresult_id: 'CAT_HEALTH_IMPACT',
    label: { en: 'Health impact' },
    type: 'string',
  },
]
