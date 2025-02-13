import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const PHQ2_OUTPUT = {
  PHQ2_SCORE: {
    label: { en: 'PHQ-2 Score' },
    type: z.number(),
    terminology: {
      code: {
        coding: [
          {
            system: 'http://loinc.org',
            code: '55758-7',
            display:
              'Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]',
          },
        ],
        text: 'PHQ-2',
      },
    },
  },
} satisfies ScoreOutputSchemaType
