import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const ISI_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'ISI_TOTAL_SCORE',
    label: { en: 'ISI Total Score' },
    type: 'number',
  },
  {
    subresult_id: 'ISI_INTERPRETATION',
    label: { en: 'ISI Interpretation' },
    type: 'string',
  },
]
