import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../../types'

export const CMS_OUTPUT = {
  PAIN: {
    label: { en: 'Pain', nl: 'Pijn' },
    type: z.number(),
  },
  ADL: {
    label: {
      en: 'Activities Daily living',
      nl: 'Activiteiten dagelijks leven',
    },
    type: z.number(),
  },
  MOBILITY: {
    label: {
      en: 'Mobility',
      nl: 'Mobiliteit',
    },
    type: z.number(),
  },
  STRENGTH: {
    label: {
      en: 'Strength',
      nl: 'Kracht',
    },
    type: z.number(),
  },
  TS: {
    label: { en: 'Total score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
