import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const CSI_OUTPUT = {
  csi: {
    label: { en: 'Total CSI Score' },
    type: z.number(),
  },
  interpretation: {
    label: { en: 'Sensitization is present' },
    type: z.boolean(),
  },
} satisfies ScoreOutputSchemaType
