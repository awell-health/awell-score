import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const QUICKDASH_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'QUICKDASH_SCORE',
    label: { en: 'QuickDASH' },
    type: 'number',
  },
  {
    subresult_id: 'WORK_MODULE',
    label: { en: 'Work module' },
    type: 'number',
  },
  {
    subresult_id: 'SPORTS_PERFORMING_ARTS_MODULE',
    label: { en: 'Sports/Performing arts module' },
    type: 'number',
  },
]
