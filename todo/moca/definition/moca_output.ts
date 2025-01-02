import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const MOCA_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'VISUOSPATIAL_EXECUTIVE',
    label: { en: 'Visuospatial / executive' },
    type: 'number',
  },
  {
    subresult_id: 'NAMING',
    label: { en: 'Naming' },
    type: 'number',
  },
  {
    subresult_id: 'ATTENTION',
    label: { en: 'Attention' },
    type: 'number',
  },
  {
    subresult_id: 'LANGUAGE',
    label: { en: 'Language' },
    type: 'number',
  },
  {
    subresult_id: 'ABSTRACTION',
    label: { en: 'Abstraction' },
    type: 'number',
  },
  {
    subresult_id: 'DELAYED_RECALL',
    label: { en: 'Delayed recall' },
    type: 'number',
  },
  {
    subresult_id: 'ORIENTATION',
    label: { en: 'Orientation' },
    type: 'number',
  },
  {
    subresult_id: 'TOTAL',
    label: { en: 'Total score' },
    type: 'number',
  },
]
