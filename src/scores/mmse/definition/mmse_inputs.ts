import { z } from 'zod'
import { type ScoreInputSchemaType } from '../../../types'

export const MMSE_INPUTS = {
  ORIENTATION_TO_TIME: {
    type: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
    ]),
  },
  ORIENTATION_TO_PLACE: {
    type: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
    ]),
  },
  REGISTRATION: {
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
  },
  ATTENTION_AND_CALCULATION: {
    type: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
    ]),
  },
  RECALL: {
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
  },
  LANGUAGE: {
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
    ]),
  },
  CONSTRUCT: {
    type: z.union([z.literal(0), z.literal(1)]),
  },
} satisfies ScoreInputSchemaType
