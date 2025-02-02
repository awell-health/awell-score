import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'
export const MODIFIED_CAREGIVER_STRAIN_INDEX_OUTPUT = {
  MODIFIED_CAREGIVER_STRAIN_INDEX: {
    label: { en: 'Modified Caregiver Strain Index Score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
