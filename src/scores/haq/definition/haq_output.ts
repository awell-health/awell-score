import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const HAQ_OUTPUT = {
  DI: {
    label: { en: 'Disability Index' },
    type: z.number(),
    terminology: {
      code: {
        coding: [
          {
            system: 'http://loinc.org',
            code: '75874-8',
            display: 'Total score [HAQ-DI]',
          },
          // HAQ has no Snomed code
        ],
        text: 'HAQ score (Disability Index)',
      },
    },
  },
} satisfies ScoreOutputSchemaType
