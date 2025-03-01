import { z } from 'zod'
import { type ScoreInputSchemaType } from '../../../types'

const type = {
  type: z
    .union([
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
    ])
    .optional(),
}

export const QUICKDASH_INPUTS = {
  QUICKDASH_Q01: { ...type },
  QUICKDASH_Q02: { ...type },
  QUICKDASH_Q03: { ...type },
  QUICKDASH_Q04: { ...type },
  QUICKDASH_Q05: { ...type },
  QUICKDASH_Q06: { ...type },
  QUICKDASH_Q07: { ...type },
  QUICKDASH_Q08: { ...type },
  QUICKDASH_Q09: { ...type },
  QUICKDASH_Q10: { ...type },
  QUICKDASH_Q11: { ...type },
  QUICKDASH_WORK_MODULE_Q01: { ...type },
  QUICKDASH_WORK_MODULE_Q02: { ...type },
  QUICKDASH_WORK_MODULE_Q03: { ...type },
  QUICKDASH_WORK_MODULE_Q04: { ...type },
  QUICKDASH_SPORTS_PERFORMING_ARTS_MODULE_Q01: { ...type },
  QUICKDASH_SPORTS_PERFORMING_ARTS_MODULE_Q02: { ...type },
  QUICKDASH_SPORTS_PERFORMING_ARTS_MODULE_Q03: { ...type },
  QUICKDASH_SPORTS_PERFORMING_ARTS_MODULE_Q04: { ...type },
} satisfies ScoreInputSchemaType
