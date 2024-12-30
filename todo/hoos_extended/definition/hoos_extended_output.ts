import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const HOOS_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'S',
    label: { en: 'Symptoms' },
    type: 'number',
  },
  {
    subresult_id: 'P',
    label: { en: 'Pain' },
    type: 'number',
  },
  {
    subresult_id: 'ADL',
    label: { en: 'Activity limitations daily living' },
    type: 'number',
  },
  {
    subresult_id: 'SP',
    label: { en: 'Function in sport and recreation' },
    type: 'number',
  },
  {
    subresult_id: 'QOL',
    label: { en: 'Hip related quality of life' },
    type: 'number',
  },
  {
    subresult_id: 'TOTAL',
    label: { en: 'Total score' },
    type: 'number',
  },
]
