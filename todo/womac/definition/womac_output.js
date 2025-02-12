// @flow

import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const WOMAC_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'WOMAC_TOTAL_SCORE',
    label: { en: 'Total score' },
    type: 'number'
  },
  {
    subresult_id: 'WOMAC_PAIN_SCORE',
    label: { en: 'Pain score' },
    type: 'number'
  },
  {
    subresult_id: 'WOMAC_STIFFNESS_SCORE',
    label: { en: 'Stiffness score' },
    type: 'number'
  },
  {
    subresult_id: 'WOMAC_DIFFICULTY_SCORE',
    label: { en: 'Difficulty score' },
    type: 'number'
  }
]
