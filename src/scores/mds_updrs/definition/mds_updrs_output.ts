import { z } from 'zod'
import type { ScoreOutputSchemaType } from '../../../types'

export const MDS_UPDRS_OUTPUT = {
  MDS_UPDRS_TOTAL: {
    label: { en: 'Total score' },
    type: z.number(),
  },
  PART_1_NON_MOTOR_EXPERIENCES_OF_DAILY_LIVING: {
    label: { en: 'Part I: non-motor experiences of daily living (nM-EDL)' },
    type: z.number(),
  },
  PART_2_MOTOR_EXPERIENCES_OF_DAILY_LIVING: {
    label: { en: 'Part II: motor experiences of daily living (M-EDL)' },
    type: z.number(),
  },
  PART_3_MOTOR_EXAMINATION: {
    label: { en: 'Part III: motor examination' },
    type: z.number(),
  },
  PART_4_MOTOR_COMPLICATIONS: {
    label: { en: 'Part IV: motor complications' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
