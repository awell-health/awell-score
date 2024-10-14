import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const PHQ8_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'PHQ8_SCORE',
    label: { en: 'PHQ-8 Score' },
    type: 'number',
  },
  {
    subresult_id: 'PHQ8_INTERPRETATION',
    label: { en: 'PHQ-8 Interpretation' },
    type: 'string',
  },
]
