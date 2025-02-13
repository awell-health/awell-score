import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const SCL90R_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'TOTAL',
    label: { en: 'Total score' },
    type: 'number',
  },
  {
    subresult_id: 'SOMATIZATION',
    label: { en: 'Somatization' },
    type: 'number',
  },
  {
    subresult_id: 'OBSESSIVE_COMPULSIVE',
    label: { en: 'Obsessive compulsive' },
    type: 'number',
  },
  {
    subresult_id: 'INTERPERSONAL_SENSITIVITY',
    label: { en: 'Interpersonal Sensitivity' },
    type: 'number',
  },
  {
    subresult_id: 'DEPRESSION',
    label: { en: 'Depression' },
    type: 'number',
  },
  {
    subresult_id: 'ANXIETY',
    label: { en: 'Anxiety' },
    type: 'number',
  },
  {
    subresult_id: 'HOSTILITY',
    label: { en: 'Hostility' },
    type: 'number',
  },
  {
    subresult_id: 'PHOBIC_ANXIETY',
    label: { en: 'Phobic anxiety' },
    type: 'number',
  },
  {
    subresult_id: 'PARANOID_IDEATION',
    label: { en: 'Paranoid ideation' },
    type: 'number',
  },
  {
    subresult_id: 'PSYCHOTICISM',
    label: { en: 'Psychoticism' },
    type: 'number',
  },
  {
    subresult_id: 'ADDITIONAL_ITEMS',
    label: { en: 'Additional items' },
    type: 'number',
  },
]
