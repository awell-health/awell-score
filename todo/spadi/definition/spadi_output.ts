import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const SPADI_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'PAIN',
    label: { en: 'Pain dimension' },
    type: 'number',
  },
  {
    subresult_id: 'DISABILITY',
    label: { en: 'Disability dimension' },
    type: 'number',
  },
  {
    subresult_id: 'TOTAL',
    label: { en: 'Total score' },
    type: 'number',
  },
]
