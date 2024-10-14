import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const AQ10_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'AQ10_SCORE',
    label: { en: 'AQ-10 Score' },
    type: 'number',
  },
  {
    subresult_id: 'AQ10_INTERPRETATION',
    label: { en: 'AQ-10 Interpretation' },
    type: 'string',
  },
]
