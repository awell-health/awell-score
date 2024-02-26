import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const GAD2_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'GAD2_SCORE',
    label: { en: 'GAD-2 Score' },
    type: 'number',
  },
  {
    subresult_id: 'GAD2_INTERPRETATION',
    label: { en: 'GAD-2 Interpretation' },
    type: 'string',
  },
]
