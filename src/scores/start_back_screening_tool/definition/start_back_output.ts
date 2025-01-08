import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const START_BACK_OUTPUT = {
  START_BACK_TOTAL: {
    label: { en: 'Total score', nl: 'Totale score' },
    type: z.number(),
  },
  START_BACK_SUBSCALE: {
    label: { en: 'Subscale score', nl: 'Sub uitslag (Q5-9)' },
    type: z.number(),
  },
  START_BACK_RISK_CLASSIFICATION: {
    label: { en: 'Risk classification', nl: 'Risicoprofiel' },
    type: z.string(),
  },
} satisfies ScoreOutputSchemaType
