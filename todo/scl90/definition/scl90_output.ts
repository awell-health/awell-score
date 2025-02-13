import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const SCL90_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'PSNEUR',
    label: { en: 'Total score' },
    type: 'number',
  },
  {
    subresult_id: 'AGO',
    label: { en: 'Agoraphobia' },
    type: 'number',
  },
  {
    subresult_id: 'ANG',
    label: { en: 'Anxiety' },
    type: 'number',
  },
  {
    subresult_id: 'DEP',
    label: { en: 'Depression' },
    type: 'number',
  },
  {
    subresult_id: 'SOM',
    label: { en: 'Somatization' },
    type: 'number',
  },
  {
    subresult_id: 'IN',
    label: { en: 'Cognitive-Performance Deficits' },
    type: 'number',
  },
  {
    subresult_id: 'SEN',
    label: { en: 'Interpersonal Sensitivity' },
    type: 'number',
  },
  {
    subresult_id: 'HOS',
    label: { en: 'Hostility' },
    type: 'number',
  },
  {
    subresult_id: 'SLA',
    label: { en: 'Sleep difficulties' },
    type: 'number',
  },
  {
    subresult_id: 'ADD',
    label: { en: 'Additional items' },
    type: 'number',
  },
]
