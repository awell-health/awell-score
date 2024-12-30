import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const START_BACK_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'START_BACK_TOTAL',
    label: { en: 'Total score', nl: 'Totale score' },
    type: 'number',
  },
  {
    subresult_id: 'START_BACK_SUBSCALE',
    label: { en: 'Subscale score', nl: 'Sub uitslag (Q5-9)' },
    type: 'number',
  },
  {
    subresult_id: 'START_BACK_RISK_CLASSIFICATION',
    label: { en: 'Risk classification', nl: 'Risicoprofiel' },
    type: 'number',
  },
]
