import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const PCS_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'RUMINATION',
    label: { en: 'Rumination' },
    type: 'number',
  },
  {
    subresult_id: 'MAGNIFICATION',
    label: { en: 'Magnification' },
    type: 'number',
  },
  {
    subresult_id: 'HELPLESSNESS',
    label: { en: 'Helplessness' },
    type: 'number',
  },
  {
    subresult_id: 'TOTAL',
    label: { en: 'Total PCS score' },
    type: 'number',
  },
]
