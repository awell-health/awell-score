import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const ESS_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'ess',
    label: { en: 'Total ESS score' },
    type: 'number',
  },
]
