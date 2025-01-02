import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const AUDIT_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'CONSUMPTION',
    label: { en: 'Consumption score' },
    type: 'number',
  },
  {
    subresult_id: 'DEPENDENCE',
    label: { en: 'Dependence score' },
    type: 'number',
  },
  {
    subresult_id: 'ALCOHOL_RELATED_PROBLEMS',
    label: { en: 'Alcohol-related problems score' },
    type: 'number',
  },
  {
    subresult_id: 'TOTAL',
    label: { en: 'Total AUDIT score' },
    type: 'number',
  },
]
