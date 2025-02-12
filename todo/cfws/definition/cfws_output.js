// @flow
import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const CFWS_SCORE_CATEGORY = {
  AVERAGE: 'Average',
  LITTLE_LOWER: 'Little lower',
  LOT_LOWER: 'Lot lower'
}

export const CFWS_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'CFWS_SCORE',
    label: { en: 'CFWS Score' },
    type: 'number',
    // CFWS has no terminology in Snomed or LOINC
    terminology: undefined
  },
  {
    subresult_id: 'CFWS_INTERPRETATION',
    label: { en: 'CFWS Interpretation' },
    type: 'string',
    // CFWS has no terminology in Snomed or LOINC
    terminology: undefined
  }
]
