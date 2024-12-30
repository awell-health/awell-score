import type { CalculationOutputDefinition } from '../../../../../types/calculations.types'

export const EORTC_QLQ_CR29_OUTPUT: CalculationOutputDefinition[] = [
  { subresult_id: 'BI', label: { en: 'Body image' }, type: 'number' },
  { subresult_id: 'ANX', label: { en: 'Anxiety' }, type: 'number' },
  { subresult_id: 'WEI', label: { en: 'Weight' }, type: 'number' },
  {
    subresult_id: 'SEXM',
    label: { en: 'Sexual interest (men)' },
    type: 'number',
  },
  {
    subresult_id: 'SEXW',
    label: { en: 'Sexual interest (women)' },
    type: 'number',
  },
  { subresult_id: 'UF', label: { en: 'Urinary frequency' }, type: 'number' },
  {
    subresult_id: 'BMS',
    label: { en: 'Blood and mucus in stool' },
    type: 'number',
  },
  {
    subresult_id: 'SF_STOMA',
    label: { en: 'Stool frequency (stoma)' },
    type: 'number',
  },
  {
    subresult_id: 'SF_NO_STOMA',
    label: { en: 'Stool frequency (no stoma)' },
    type: 'number',
  },
  { subresult_id: 'UI', label: { en: 'Urinary incontinence' }, type: 'number' },
  { subresult_id: 'DY', label: { en: 'Dysuria' }, type: 'number' },
  { subresult_id: 'AP', label: { en: 'Abdominal pain' }, type: 'number' },
  { subresult_id: 'BP', label: { en: 'Buttock pain' }, type: 'number' },
  { subresult_id: 'BF', label: { en: 'Bloating' }, type: 'number' },
  { subresult_id: 'DM', label: { en: 'Dry mouth' }, type: 'number' },
  { subresult_id: 'HL', label: { en: 'Hair loss' }, type: 'number' },
  { subresult_id: 'TA', label: { en: 'Taste' }, type: 'number' },
  {
    subresult_id: 'FL_STOMA',
    label: { en: 'Flatulence (stoma)' },
    type: 'number',
  },
  {
    subresult_id: 'FL_NO_STOMA',
    label: { en: 'Flatulence (no stoma)' },
    type: 'number',
  },
  {
    subresult_id: 'FI_STOMA',
    label: { en: 'Faecal incontinence (stoma)' },
    type: 'number',
  },
  {
    subresult_id: 'FI_NO_STOMA',
    label: { en: 'Faecal incontinence (no stoma)' },
    type: 'number',
  },
  {
    subresult_id: 'SS_STOMA',
    label: { en: 'Sore skin (stoma)' },
    type: 'number',
  },
  {
    subresult_id: 'SS_NO_STOMA',
    label: { en: 'Sore skin (no stoma)' },
    type: 'number',
  },
  {
    subresult_id: 'EMB_STOMA',
    label: { en: 'Embarrassment (stoma)' },
    type: 'number',
  },
  {
    subresult_id: 'EMB_NO_STOMA',
    label: { en: 'Embarrassment (no stoma)' },
    type: 'number',
  },
  { subresult_id: 'STO', label: { en: 'Stoma care problems' }, type: 'number' },
  { subresult_id: 'IMP', label: { en: 'Impotence' }, type: 'number' },
  { subresult_id: 'DYS', label: { en: 'Dyspareunia' }, type: 'number' },
]
