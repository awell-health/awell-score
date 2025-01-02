import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const HADS_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'FEAR',
    label: { en: 'Fear' },
    type: 'number',
  },
  {
    subresult_id: 'DEPRESSION',
    label: { en: 'Depression' },
    type: 'number',
  },
]
