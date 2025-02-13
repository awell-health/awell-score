import { ScoreOutputSchemaType } from '../../../types'
import { z } from 'zod'

export const PHQ8_OUTPUT = {
  PHQ8_SCORE: {
    label: { en: 'PHQ-8 Score' },
    type: z.number(),
    terminology: {
      code: {
        coding: [
          {
            system: 'http://loinc.org',
            code: '44261-6',
            display:
              'Patient Health Questionnaire 9 item (PHQ-8) total score [Reported]',
          },
          {
            system: 'http://snomed.info/sct',
            code: '720433000',
            display:
              'Patient Health Questionnaire Nine Item score (observable entity)',
          },
        ],
        text: 'PHQ-8',
      },
    },
  },
  PHQ8_INTERPRETATION: {
    label: { en: 'PHQ-8 Interpretation' },
    type: z.string(),
  },
} satisfies ScoreOutputSchemaType
