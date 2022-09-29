import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const EPIC_26_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'UI',
    label: { en: 'Urinary Incontinence' },
    type: 'number',
  },
  {
    subresult_id: 'UIO',
    label: { en: 'Urinary Irritative/Obstructive' },
    type: 'number',
  },
  {
    subresult_id: 'BOW',
    label: { en: 'Bowel' },
    type: 'number',
  },
  {
    subresult_id: 'SEX',
    label: { en: 'Sexual' },
    type: 'number',
  },
  {
    subresult_id: 'HOR',
    label: { en: 'Hormonal' },
    type: 'number',
  },
]
