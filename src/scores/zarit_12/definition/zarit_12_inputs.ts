import { z } from 'zod'
import { EnumNumberInputType, ScoreInputSchemaType } from '../../../types'

const type = {
  type: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
  ]),
  uiOptions: {
    options: [
      { value: 0 },
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
    ],
  },
} satisfies EnumNumberInputType

export const ZARRIT_INPUTS = {
  ZARIT_12_Q01: {
    ...type,
  },
  ZARIT_12_Q02: {
    ...type,
  },
  ZARIT_12_Q03: {
    ...type,
  },
  ZARIT_12_Q04: {
    ...type,
  },
  ZARIT_12_Q05: {
    ...type,
  },
  ZARIT_12_Q06: {
    ...type,
  },
  ZARIT_12_Q07: {
    ...type,
  },
  ZARIT_12_Q08: {
    ...type,
  },
  ZARIT_12_Q09: {
    ...type,
  },
  ZARIT_12_Q10: {
    ...type,
  },
  ZARIT_12_Q11: {
    ...type,
  },
  ZARIT_12_Q12: {
    ...type,
  },
} satisfies ScoreInputSchemaType
