import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../../types'

export const FJS_KNEE_OUTPUT = {
  FORGOTTEN_JOINT_SCORE_KNEE: {
    label: { en: 'Forgotten Joint Score - Knee' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
