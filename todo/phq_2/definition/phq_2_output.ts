import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const PHQ2_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'PHQ2_SCORE',
    label: { en: 'PHQ-2 Score' },
    type: 'number',
  },
]
