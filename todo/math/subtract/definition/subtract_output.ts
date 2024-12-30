import type { CalculationOutputDefinition } from '../../../../src/types/calculations.types'

export const SUBTRACT_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'DIFFERENCE',
    label: { en: 'Difference' },
    type: 'number',
  },
  {
    subresult_id: 'ABSOLUTE_DIFFERENCE',
    label: { en: 'Absolute difference' },
    type: 'number',
  },
]
