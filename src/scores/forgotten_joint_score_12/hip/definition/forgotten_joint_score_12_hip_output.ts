import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../../types'

export const FJS_HIP_OUTPUT = {
  FORGOTTEN_JOINT_SCORE_HIP: {
    label: { en: 'Forgotten Joint Score - Hip' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
