import type { CalculationOutputDefinition } from '../../../../../types/calculations.types'

export const COMI_NECK_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'PAIN',
    label: { en: 'Pain' },
    type: 'number',
  },
  {
    subresult_id: 'NECK_RELATED_FUNCTION',
    label: { en: 'Neck related function' },
    type: 'number',
  },
  {
    subresult_id: 'SYMPTOM_SPECIFIC_WELLBEING',
    label: { en: 'Symptom specific wellbeing' },
    type: 'number',
  },
  {
    subresult_id: 'GENERAL_QOL',
    label: { en: 'General Quality of Life' },
    type: 'number',
  },
  {
    subresult_id: 'DISABILITY',
    label: { en: 'Disability' },
    type: 'number',
  },
  {
    subresult_id: 'TOTAL',
    label: { en: 'COMI Neck total score' },
    type: 'number',
  },
]
