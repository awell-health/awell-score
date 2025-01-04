import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const CAREGIVER_STRAIN_INDEX_OUTPUT = {
  CAREGIVER_STRAIN_INDEX: {
    label: { en: 'CSI score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
