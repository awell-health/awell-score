import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const CORE_OM_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'SUBJECTIVE_WELL_BEING_DEFICITS_RAW',
    label: { en: 'Subjective well-being deficits - Raw Score' },
    type: 'number',
  },
  {
    subresult_id: 'SUBJECTIVE_WELL_BEING_DEFICITS_MEAN',
    label: { en: 'Subjective well-being deficits - Mean Score' },
    type: 'number',
  },
  {
    subresult_id: 'PROBLEMS_SYMPTOMS_RAW',
    label: { en: 'Problems/symptoms - Raw Score' },
    type: 'number',
  },
  {
    subresult_id: 'PROBLEMS_SYMPTOMS_MEAN',
    label: { en: 'Problems/symptoms - Mean Score' },
    type: 'number',
  },
  {
    subresult_id: 'LIFE_FUNCTIONING_DIFFICULTIES_RAW',
    label: { en: 'Life functioning difficulties - Raw Score' },
    type: 'number',
  },
  {
    subresult_id: 'LIFE_FUNCTIONING_DIFFICULTIES_MEAN',
    label: { en: 'Life functioning difficulties - Mean Score' },
    type: 'number',
  },
  {
    subresult_id: 'RISK_HARM_RAW',
    label: { en: 'Risk/harm - Raw Score' },
    type: 'number',
  },
  {
    subresult_id: 'RISK_HARM_MEAN',
    label: { en: 'Risk/harm - Mean Score' },
    type: 'number',
  },
  {
    subresult_id: 'TOTAL_RAW',
    label: { en: 'Total - Raw Score' },
    type: 'number',
  },
  {
    subresult_id: 'TOTAL_MEAN',
    label: { en: 'Total - Mean Score' },
    type: 'number',
  },
]
