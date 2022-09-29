import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const GAD7_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'GAD7_SCORE',
    label: { en: 'GAD-7 Score' },
    type: 'number',
  },
  {
    subresult_id: 'GAD7_INTERPRETATION',
    label: { en: 'GAD-7 Interpretation' },
    type: 'string',
  },
]
