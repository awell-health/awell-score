import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const CFWS_SCORE_CATEGORY = {
  AVERAGE: 'Average',
  LITTLE_LOWER: 'Little lower',
  LOT_LOWER: 'Lot lower',
}

export const CFWS_OUTPUT = {
  CFWS_SCORE: {
    label: { en: 'CFWS Score' },
    type: z.number(),
    // CFWS has no terminology in Snomed or LOINC
    terminology: undefined,
  },
  CFWS_INTERPRETATION: {
    label: { en: 'CFWS Interpretation' },
    type: z.string(),
    // CFWS has no terminology in Snomed or LOINC
    terminology: undefined,
  },
} satisfies ScoreOutputSchemaType
