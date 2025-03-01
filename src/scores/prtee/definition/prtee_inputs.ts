import { z } from 'zod'
import {
  type EnumNumberInputType,
  type ScoreInputSchemaType,
} from '../../../types'

const type = {
  type: z.union([
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
  ]),
} satisfies EnumNumberInputType

export const PRTEE_INPUTS = {
  PAIN_Q01: {
    ...type,
  },
  PAIN_Q02: {
    ...type,
  },
  PAIN_Q03: {
    ...type,
  },
  PAIN_Q04: {
    ...type,
  },
  PAIN_Q05: {
    ...type,
  },
  FUNCTION_Q01: {
    ...type,
  },
  FUNCTION_Q02: {
    ...type,
  },
  FUNCTION_Q03: {
    ...type,
  },
  FUNCTION_Q04: {
    ...type,
  },
  FUNCTION_Q05: {
    ...type,
  },
  FUNCTION_Q06: {
    ...type,
  },
  FUNCTION_Q07: {
    ...type,
  },
  FUNCTION_Q08: {
    ...type,
  },
  FUNCTION_Q09: {
    ...type,
  },
  FUNCTION_Q10: {
    ...type,
  },
} satisfies ScoreInputSchemaType
