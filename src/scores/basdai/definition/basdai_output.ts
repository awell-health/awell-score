import { type ScoreOutputSchemaType } from '../../../types'
import { z } from 'zod'

export const BASDAI_OUTPUT = {
  BASDAI_TOTAL_SCORE: {
    label: { en: 'Total' },
    type: z.number(),
    terminology: {
      code: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '441562009',
            display:
              'Bath Ankylosing Spondylitis Disease Activity Index score (observable entity)',
          },
          // BASDAI has no LOINC code
        ],
        text: 'BASDAI Index Score',
      },
    },
  },
} satisfies ScoreOutputSchemaType
