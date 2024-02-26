import type { CalculationOutputDefinition } from '../../../../../types/calculations.types'

export const SF12_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'PHYSICAL_COMPONENT_SCORE',
    label: { en: 'Physical Component Score (PCS)' },
    type: 'number',
  },
  {
    subresult_id: 'MENTAL_COMPONENT_SCORE',
    label: { en: 'Mental Component Score (MCS)' },
    type: 'number',
  },
]
