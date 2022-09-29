import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const PCI_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'PAIN_TRANSFORM',
    label: { en: 'Pain Transformation' },
    type: 'number',
  },
  {
    subresult_id: 'DISTRACTION',
    label: { en: 'Distraction' },
    type: 'number',
  },
  {
    subresult_id: 'REDUCING_DEMANDS',
    label: { en: 'Reducing Demands' },
    type: 'number',
  },
  {
    subresult_id: 'RETREATING',
    label: { en: 'Retreating' },
    type: 'number',
  },
  {
    subresult_id: 'WORRYING',
    label: { en: 'Worrying' },
    type: 'number',
  },
  {
    subresult_id: 'RESTING',
    label: { en: 'Resting' },
    type: 'number',
  },
  {
    subresult_id: 'ACTIVE_COPING',
    label: { en: 'Active coping' },
    type: 'number',
  },
  {
    subresult_id: 'ACTIVE_COPING_PERCENTAGE',
    label: { en: 'Active coping (%)' },
    type: 'number',
  },
  {
    subresult_id: 'PASSIVE_COPING',
    label: { en: 'Passive coping' },
    type: 'number',
  },
  {
    subresult_id: 'PASSIVE_COPING_PERCENTAGE',
    label: { en: 'Passive coping (%)' },
    type: 'number',
  },
]
