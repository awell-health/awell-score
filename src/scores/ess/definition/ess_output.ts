import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const ESS_OUTPUT = {
  ess: {
    label: { en: 'Total ESS score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
