import type { CalculationOutputDefinition } from '../../../../../types/calculations.types'

export const EORTC_QLQ_LC13_OUTPUT: CalculationOutputDefinition[] = [
  { subresult_id: 'LCDY', label: { en: 'Dyspnoea' }, type: 'number' },
  { subresult_id: 'LCCO', label: { en: 'Coughing' }, type: 'number' },
  { subresult_id: 'LCHA', label: { en: 'Haemoptysis' }, type: 'number' },
  { subresult_id: 'LCSM', label: { en: 'Sore mouth' }, type: 'number' },
  { subresult_id: 'LCDS', label: { en: 'Dysphagia' }, type: 'number' },
  {
    subresult_id: 'LCPN',
    label: { en: 'Peripheral neuropathy' },
    type: 'number',
  },
  { subresult_id: 'LCHR', label: { en: 'Alopecia' }, type: 'number' },
  { subresult_id: 'LCPC', label: { en: 'Pain in chest' }, type: 'number' },
  {
    subresult_id: 'LCPA',
    label: { en: 'Pain in arm or shoulder' },
    type: 'number',
  },
  {
    subresult_id: 'LCPO',
    label: { en: 'Pain in other parts' },
    type: 'number',
  },
]
