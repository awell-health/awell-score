import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const FAAM_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'ADL',
    label: { en: 'ADL subscale' },
    type: 'number',
  },
  {
    subresult_id: 'SPORTS',
    label: { en: 'Sports subscale' },
    type: 'number',
  },
]
