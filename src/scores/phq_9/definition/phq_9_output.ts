import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const PHQ9_OUTPUT = {
  PHQ9_SCORE: {
    label: { en: 'PHQ-9 Score' },
    type: z.number(),
    terminology: {
      code: {
        coding: [
          {
            system: 'http://loinc.org',
            code: '44261-6',
            display:
              'Patient Health Questionnaire 9 item (PHQ-9) total score [Reported]',
          },
          {
            system: 'http://snomed.info/sct',
            code: '720433000',
            display:
              'Patient Health Questionnaire Nine Item score (observable entity)',
          },
        ],
        text: 'PHQ-9',
      },
    },
  },
  PHQ9_INTERPRETATION: {
    label: { en: 'PHQ-9 Interpretation' },
    type: z.string(),
  },
} satisfies ScoreOutputSchemaType
