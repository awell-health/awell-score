import type { CalculationOutputDefinition } from '../../../../src/types/calculations.types'

export const SF36_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'PHYSICAL_FUNCTIONING',
    label: { en: 'Physical functioning' },
    type: 'number',
  },
  {
    subresult_id: 'ROLE_LIMITATIONS_PHYSICAL_HEALTH',
    label: { en: 'Role limitations due to physical health' },
    type: 'number',
  },
  {
    subresult_id: 'ROLE_LIMITATIONS_EMOTIONAL_PROBLEMS',
    label: { en: 'Role limitations due to emotional problems' },
    type: 'number',
  },
  {
    subresult_id: 'ENERGY_FATIGUE',
    label: { en: 'Energy/fatigue' },
    type: 'number',
  },
  {
    subresult_id: 'EMOTIONAL_WELLBEING',
    label: { en: 'Emotional well-being' },
    type: 'number',
  },
  {
    subresult_id: 'SOCIAL_FUNCTIONING',
    label: { en: 'Social functioning' },
    type: 'number',
  },
  {
    subresult_id: 'PAIN',
    label: { en: 'Pain' },
    type: 'number',
  },
  {
    subresult_id: 'GENERAL_HEALTH',
    label: { en: 'General health' },
    type: 'number',
  },
]
