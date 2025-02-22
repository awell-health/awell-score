import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const HARRIS_HIP_SCORE_OUTPUT = {
  HARRIS_HIP_SCORE: {
    label: { en: 'Harris Hip Score' },
    type: z.number(),
    terminology: {
      code: {
        coding: [
          {
            system: 'http://loinc.org',
            code: '100291-4',
            display: 'Total score [Harris Hip Score]',
          },
          {
            system: 'http://snomed.info/sct',
            code: '445021002',
            display: 'Harris hip score (observable entity)',
          },
        ],
        text: 'Harris Hip Score',
      },
    },
  },
  RANGE_OF_MOTION_SCORE: {
    label: { en: 'Range of motion score' },
    type: z.number(),
    terminology: {
      code: {
        coding: [
          {
            system: 'http://loinc.org',
            code: '100290-6',
            display: 'Range of motion score [Harris Hip Score]',
          },
          // No Snomed code available
        ],
        text: 'ROM score [Harris Hip Score]',
      },
    },
  },
} satisfies ScoreOutputSchemaType
