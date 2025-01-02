import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const YP_CORE_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'YP_CORE_TOTAL_SCORE',
    label: { en: 'YP-CORE Total Score' },
    type: 'number',
  },
  {
    subresult_id: 'YP_CORE_INTERPRETATION',
    label: { en: 'YP-CORE Interpretation' },
    type: 'string',
  },
]
