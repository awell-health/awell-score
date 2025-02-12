// @flow
import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const PAID20_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'PAID20_SCORE',
    label: { en: 'PAID-20 Score' },
    type: 'number'
  },
  {
    subresult_id: 'PAID20_QUESTIONS_WITH_SCORE_3_OR_4',
    label: { en: 'PAID-20 Questions with score 3 or 4' },
    type: 'string'
  },
  {
    subresult_id: 'PAID20_INTERPRETATION',
    label: { en: 'PAID-20 Interpretation' },
    type: 'string'
  }
]
