import { z } from 'zod'
import { EnumNumberInputType, ScoreInputSchemaType } from '../../../types'

export const type = {
  type: z
    .union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
      z.literal(6),
      z.literal(7),
      z.literal(8),
      z.literal(9),
      z.literal(10),
    ])
    .optional(),
} satisfies EnumNumberInputType

export const SPADI_INPUTS = {
  Q01: { ...type },
  Q02: { ...type },
  Q03: { ...type },
  Q04: { ...type },
  Q05: { ...type },
  Q06: { ...type },
  Q07: { ...type },
  Q08: { ...type },
  Q09: { ...type },
  Q10: { ...type },
  Q11: { ...type },
  Q12: { ...type },
  Q13: { ...type },
} satisfies ScoreInputSchemaType
