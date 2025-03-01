import { z } from 'zod'
import { EnumNumberInputType, ScoreInputSchemaType } from '../../../types'

const INPUT_TYPES = {
  serie_1: {
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
      ])
      .optional(),
  },
  serie_2: {
    type: z.union([z.literal(1), z.literal(2), z.literal(3)]).optional(),
  },
  serie_3: { type: z.union([z.literal(1), z.literal(2)]).optional() },
  serie_4: {
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
      ])
      .optional(),
  },
} satisfies Record<string, EnumNumberInputType>

export const SF36_INPUTS = {
  SF36_Q01: { ...INPUT_TYPES.serie_1 },
  SF36_Q03: { ...INPUT_TYPES.serie_2 },
  SF36_Q04: { ...INPUT_TYPES.serie_2 },
  SF36_Q05: { ...INPUT_TYPES.serie_2 },
  SF36_Q06: { ...INPUT_TYPES.serie_2 },
  SF36_Q07: { ...INPUT_TYPES.serie_2 },
  SF36_Q08: { ...INPUT_TYPES.serie_2 },
  SF36_Q09: { ...INPUT_TYPES.serie_2 },
  SF36_Q10: { ...INPUT_TYPES.serie_2 },
  SF36_Q11: { ...INPUT_TYPES.serie_2 },
  SF36_Q12: { ...INPUT_TYPES.serie_2 },
  SF36_Q13: { ...INPUT_TYPES.serie_3 },
  SF36_Q14: { ...INPUT_TYPES.serie_3 },
  SF36_Q15: { ...INPUT_TYPES.serie_3 },
  SF36_Q16: { ...INPUT_TYPES.serie_3 },
  SF36_Q17: { ...INPUT_TYPES.serie_3 },
  SF36_Q18: { ...INPUT_TYPES.serie_3 },
  SF36_Q19: { ...INPUT_TYPES.serie_3 },
  SF36_Q20: { ...INPUT_TYPES.serie_1 },
  SF36_Q21: { ...INPUT_TYPES.serie_4 },
  SF36_Q22: { ...INPUT_TYPES.serie_1 },
  SF36_Q23: { ...INPUT_TYPES.serie_4 },
  SF36_Q24: { ...INPUT_TYPES.serie_4 },
  SF36_Q25: { ...INPUT_TYPES.serie_4 },
  SF36_Q26: { ...INPUT_TYPES.serie_4 },
  SF36_Q27: { ...INPUT_TYPES.serie_4 },
  SF36_Q28: { ...INPUT_TYPES.serie_4 },
  SF36_Q29: { ...INPUT_TYPES.serie_4 },
  SF36_Q30: { ...INPUT_TYPES.serie_4 },
  SF36_Q31: { ...INPUT_TYPES.serie_4 },
  SF36_Q32: { ...INPUT_TYPES.serie_1 },
  SF36_Q33: { ...INPUT_TYPES.serie_1 },
  SF36_Q34: { ...INPUT_TYPES.serie_1 },
  SF36_Q35: { ...INPUT_TYPES.serie_1 },
  SF36_Q36: { ...INPUT_TYPES.serie_1 },
} satisfies ScoreInputSchemaType
