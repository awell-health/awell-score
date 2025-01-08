import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../../types'

export const VISA_P_OUTPUT = {
  VISA_P: {
    label: { en: 'VISA-P Score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
