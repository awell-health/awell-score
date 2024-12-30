import type { CalculationOutputDefinition } from '../../../../../types/calculations.types'

export const EORTC_QLQ_BR45_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'BI',
    label: { en: 'Body image' },
    type: 'number',
  },
  {
    subresult_id: 'FU',
    label: { en: 'Future perspective' },
    type: 'number',
  },
  {
    subresult_id: 'SX',
    label: { en: 'Sexual functioning' },
    type: 'number',
  },
  {
    subresult_id: 'SE',
    label: { en: 'Sexual enjoyment' },
    type: 'number',
  },
  {
    subresult_id: 'BS',
    label: { en: 'Breast Satisfaction' },
    type: 'number',
  },
  {
    subresult_id: 'SYS',
    label: { en: 'Systemic Therapy Side Effects' },
    type: 'number',
  },
  {
    subresult_id: 'HU',
    label: { en: 'Upset by Hair Loss' },
    type: 'number',
  },
  {
    subresult_id: 'ARM',
    label: { en: 'Arm Symptoms' },
    type: 'number',
  },
  {
    subresult_id: 'BR',
    label: { en: 'Breast Symptoms' },
    type: 'number',
  },
  {
    subresult_id: 'ET',
    label: { en: 'Endocrine Therapy Symptoms' },
    type: 'number',
  },
  {
    subresult_id: 'SM',
    label: { en: 'Skin Mucosis Symptoms' },
    type: 'number',
  },
  {
    subresult_id: 'ES',
    label: { en: 'Endocrine Sexual Symptoms' },
    type: 'number',
  },
]
