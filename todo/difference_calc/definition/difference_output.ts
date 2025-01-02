import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const DIFFERENCE_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'ABSOLUTE_DIFFERENCE',
    label: { en: 'Absolute difference' },
    type: 'number',
  },
  {
    subresult_id: 'PERCENTAGE_INCREASE',
    label: { en: 'Percentage increase' },
    type: 'number',
  },
]
