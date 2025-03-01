import { z } from 'zod'
import {
  type ScoreInputSchemaType,
  type SimpleNumberInputType,
} from '../../../types'

const type = {
  type: z.number().min(0).max(10).optional(),
} satisfies SimpleNumberInputType

export const PSK_INPUTS = {
  SCORE_FOR_ACTIVITY_01: {
    ...type,
  },
  SCORE_FOR_ACTIVITY_02: {
    ...type,
  },
  SCORE_FOR_ACTIVITY_03: {
    ...type,
  },
  SCORE_FOR_ACTIVITY_04: {
    ...type,
  },
  SCORE_FOR_ACTIVITY_05: {
    ...type,
  },
} satisfies ScoreInputSchemaType
