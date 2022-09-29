import type { CalculationOutputDefinition } from '../../../../../types/calculations.types'

export const EORTC_QLQ_C30_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'QL2',
    label: { en: 'Global health status/QoL' },
    type: 'number',
  },
  {
    subresult_id: 'PF2',
    label: { en: 'Physical functioning' },
    type: 'number',
  },
  { subresult_id: 'RF2', label: { en: 'Role functioning' }, type: 'number' },
  {
    subresult_id: 'EF',
    label: { en: 'Emotional functioning' },
    type: 'number',
  },
  {
    subresult_id: 'CF',
    label: { en: 'Cognitive functioning' },
    type: 'number',
  },
  { subresult_id: 'SF', label: { en: 'Social functioning' }, type: 'number' },
  { subresult_id: 'FA', label: { en: 'Fatigue' }, type: 'number' },
  { subresult_id: 'NV', label: { en: 'Nausea and vomiting' }, type: 'number' },
  { subresult_id: 'PA', label: { en: 'Pain' }, type: 'number' },
  { subresult_id: 'DY', label: { en: 'Dyspnoea' }, type: 'number' },
  { subresult_id: 'SL', label: { en: 'Insomnia' }, type: 'number' },
  { subresult_id: 'AP', label: { en: 'Appetite loss' }, type: 'number' },
  { subresult_id: 'CO', label: { en: 'Constipation' }, type: 'number' },
  { subresult_id: 'DI', label: { en: 'Diarrhoea' }, type: 'number' },
  {
    subresult_id: 'FI',
    label: { en: 'Financial difficulties' },
    type: 'number',
  },
]
