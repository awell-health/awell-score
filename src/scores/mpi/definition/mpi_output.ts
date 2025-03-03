import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const MPI_OUTPUT = {
  MPI_TOTAL: {
    label: { en: 'Total score' },
    type: z.number(),
  },
  MPI_PSYCHOSOCIAL: {
    label: { en: 'Psychological/Psychosocial aspects of pain' },
    type: z.number(),
  },
  MPI_BEHAVIOUR: {
    label: { en: 'Interactional aspects/reactions on pain' },
    type: z.number(),
  },
  MPI_ADL: {
    label: { en: 'Participation in daily activities' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
