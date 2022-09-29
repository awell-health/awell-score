import type { CalculationOutputDefinition } from '../../../../../types/calculations.types'

export const EORTC_QLQ_BR23_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'BRBI',
    label: { en: 'Body image' },
    type: 'number',
  },
  {
    subresult_id: 'BRSEF',
    label: { en: 'Sexual functioning' },
    type: 'number',
  },
  {
    subresult_id: 'BRSEE',
    label: { en: 'Sexual enjoyment' },
    type: 'number',
  },
  {
    subresult_id: 'BRFU',
    label: { en: 'Future perspective' },
    type: 'number',
  },
  {
    subresult_id: 'BRST',
    label: { en: 'Systemic therapy side effects' },
    type: 'number',
  },
  {
    subresult_id: 'BRBS',
    label: { en: 'Breast symptoms' },
    type: 'number',
  },
  {
    subresult_id: 'BRAS',
    label: { en: 'Arm symptoms' },
    type: 'number',
  },
  {
    subresult_id: 'BRHL',
    label: { en: 'Upset by hair loss' },
    type: 'number',
  },
]
