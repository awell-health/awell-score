import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../../types'

export const VISA_G_OUTPUT = {
  VISA_G: {
    label: { en: 'VISA-G Score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
