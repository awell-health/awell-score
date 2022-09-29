import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const CSI_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'csi',
    label: { en: 'Total CSI Score' },
    type: 'number',
  },
]
