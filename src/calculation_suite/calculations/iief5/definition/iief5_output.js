// @flow

import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const IIEF5_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'IIEF5_TOTAL_SCORE',
    label: { en: 'IIEF-5 Total Score' },
    type: 'number'
  },
  {
    subresult_id: 'IIEF5_INTERPRETATION',
    label: { en: 'IIEF-5 Interpretation' },
    type: 'string'
  }
]
