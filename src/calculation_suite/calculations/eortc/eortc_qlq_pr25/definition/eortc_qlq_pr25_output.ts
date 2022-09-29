import type { CalculationOutputDefinition } from '../../../../../types/calculations.types'

export const EORTC_QLQ_PR25_OUTPUT: CalculationOutputDefinition[] = [
  { subresult_id: 'URI', label: { en: 'Urinary symptoms' }, type: 'number' },
  { subresult_id: 'AID', label: { en: 'Incontinence aid' }, type: 'number' },
  { subresult_id: 'BOW', label: { en: 'Bowel symptoms' }, type: 'number' },
  {
    subresult_id: 'HTR',
    label: { en: 'Hormonal treatment-related symptoms' },
    type: 'number',
  },
  { subresult_id: 'SAC', label: { en: 'Sexual activity' }, type: 'number' },
  { subresult_id: 'SFU', label: { en: 'Sexual functioning' }, type: 'number' },
]
