import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const PHQ9_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'PHQ9_SCORE',
    label: { en: 'PHQ-9 Score' },
    type: 'number',
  },
  {
    subresult_id: 'PHQ9_INTERPRETATION',
    label: { en: 'PHQ-9 Interpretation' },
    type: 'string',
  },
]
