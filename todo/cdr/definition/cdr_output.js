// @flow

import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const CDR_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'CDR_SCORE',
    label: { en: 'CDR score' },
    type: 'number'
  }
]
