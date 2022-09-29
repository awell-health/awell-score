import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const PRO2_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'STOOL_FREQUENCY_AND_ABDOMINAL_PAIN_SUBSCORE',
    label: { en: 'Subscore (SF & AP)' },
    type: 'number',
  },
  {
    subresult_id: 'TOTAL_SCORE',
    label: { en: 'Total score' },
    type: 'number',
  },
  {
    subresult_id: 'REMISSION',
    label: { en: 'Remission' },
    type: 'boolean',
  },
]
