import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const FND_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'FAGERSTROM_TOTAL_SCORE',
    label: { en: 'Fagerstrom Total Score' },
    type: 'number',
  },
  {
    subresult_id: 'FAGERSTROM_DEPENDENCE_LEVEL',
    label: { en: 'Fagerstrom Dependence Level' },
    type: 'string',
  },
]
