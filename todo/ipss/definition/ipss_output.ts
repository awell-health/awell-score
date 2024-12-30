import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const IPSS_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'IPSS',
    label: { en: 'Total IPSS score' },
    type: 'number',
  },
]
