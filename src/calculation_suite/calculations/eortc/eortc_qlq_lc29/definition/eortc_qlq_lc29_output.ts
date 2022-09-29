import type { CalculationOutputDefinition } from '../../../../../types/calculations.types'

export const EORTC_QLQ_LC29_OUTPUT: CalculationOutputDefinition[] = [
  { subresult_id: 'COU', label: { en: 'Coughing' }, type: 'number' },
  { subresult_id: 'DY', label: { en: 'Shortness of Breath' }, type: 'number' },
  {
    subresult_id: 'SE',
    label: { en: 'Side effects of treatment' },
    type: 'number',
  },
  { subresult_id: 'FP', label: { en: 'Fear of progression' }, type: 'number' },
  {
    subresult_id: 'SU',
    label: { en: 'Surgery-related problems' },
    type: 'number',
  },
  {
    subresult_id: 'HA',
    label: { en: 'Coughing blood / Haemoptysis' },
    type: 'number',
  },
  { subresult_id: 'PC', label: { en: 'Pain in chest' }, type: 'number' },
  {
    subresult_id: 'PA',
    label: { en: 'Pain in arm or shoulder' },
    type: 'number',
  },
  {
    subresult_id: 'PO',
    label: { en: 'Pain in other parts of body' },
    type: 'number',
  },
  { subresult_id: 'WL', label: { en: 'Weight loss' }, type: 'number' },
]
