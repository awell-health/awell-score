import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const STOP_BANG_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'STOP_BANG',
    label: { en: 'STOP-BANG' },
    type: 'number',
  },
  {
    subresult_id: 'STOP_BANG_INTERPRETATION',
    label: { en: 'STOP-BANG Interpretation' },
    type: 'string',
  },
]
