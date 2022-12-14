import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const CPDI_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'CPDI',
    label: { en: 'Total CPDI score' },
    type: 'number',
  },
]
