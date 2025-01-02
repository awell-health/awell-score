import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const PANNS_6_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'PANNS_6_TOTAL_SCORE',
    label: { en: 'PANNS-6 Total Score' },
    type: 'number',
  },
  {
    subresult_id: 'PANNS_6_POSITIVE_SCALE_SCORE',
    label: { en: 'PANNS-6 Positive Scale Score' },
    type: 'number',
  },
  {
    subresult_id: 'PANNS_6_NEGATIVE_SCALE_SCORE',
    label: { en: 'PANNS-6 Negative Score' },
    type: 'number',
  },
]
