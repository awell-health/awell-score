import type { CalculationOutputDefinition } from '../../../../../types/calculations.types'

export const SF12_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'GENERAL_HEALTH',
    label: { en: 'General health' },
    type: 'number',
  },
  {
    subresult_id: 'PHYSICAL_FUNCTIONING',
    label: { en: 'Physical functioning' },
    type: 'number',
  },
  {
    subresult_id: 'ROLE_PHYSICAL',
    label: { en: 'Role physical' },
    type: 'number',
  },
  {
    subresult_id: 'ROLE_EMOTIONAL',
    label: { en: 'Role emotional' },
    type: 'number',
  },
  {
    subresult_id: 'BODILY_PAIN',
    label: { en: 'Bodily pain' },
    type: 'number',
  },
  {
    subresult_id: 'MENTAL_HEALTH',
    label: { en: 'Mental health' },
    type: 'number',
  },
  {
    subresult_id: 'VITALITY',
    label: { en: 'Vitality' },
    type: 'number',
  },
  {
    subresult_id: 'SOCIAL_FUNCTIONING',
    label: { en: 'Social functioning' },
    type: 'number',
  },
]
