import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const BASFI_OUTPUT = {
  BASFI_SCORE: {
    label: { en: 'Total' },
    type: z.number(),
    terminology: {
      code: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '441680005',
            display:
              'Bath Ankylosing Spondylitis Functional Index score (observable entity)',
          },
          // BASFI has no LOINC code
        ],
        text: 'BASFI Score',
      },
    },
  },
} satisfies ScoreOutputSchemaType
