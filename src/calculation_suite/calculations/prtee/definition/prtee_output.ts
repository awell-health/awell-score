import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const PRTEE_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'PAIN',
    label: { en: 'Pain' },
    type: 'number',
  },
  {
    subresult_id: 'FUNCTION',
    label: { en: 'Function' },
    type: 'number',
  },
  {
    subresult_id: 'TOTAL',
    label: { en: 'Total score' },
    type: 'number',
  },
]
