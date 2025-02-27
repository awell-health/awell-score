import { z } from 'zod'
import {
  type EnumNumberInputType,
  type ScoreInputSchemaType,
} from '../../../types'

const type = {
  type: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
} satisfies EnumNumberInputType

export const QOL_STOMA_INPUTS = {
  QOL_STOMA_Q01: {
    ...type,
  },
  QOL_STOMA_Q02: {
    ...type,
  },
  QOL_STOMA_Q03: {
    ...type,
  },
  QOL_STOMA_Q04: {
    ...type,
  },
  QOL_STOMA_Q05: {
    ...type,
  },
  QOL_STOMA_Q06: {
    ...type,
  },
  QOL_STOMA_Q07: {
    ...type,
  },
  QOL_STOMA_Q08: {
    ...type,
  },
  QOL_STOMA_Q09: {
    ...type,
  },
  QOL_STOMA_Q10: {
    ...type,
  },
  QOL_STOMA_Q11: {
    ...type,
  },
  QOL_STOMA_Q12: {
    ...type,
  },
  QOL_STOMA_Q13: {
    ...type,
  },
  QOL_STOMA_Q14: {
    ...type,
  },
  QOL_STOMA_Q15: {
    ...type,
  },
  QOL_STOMA_Q16: {
    ...type,
  },
  QOL_STOMA_Q17: {
    ...type,
  },
  QOL_STOMA_Q18: {
    ...type,
  },
  QOL_STOMA_Q19: {
    ...type,
  },
  QOL_STOMA_Q20: {
    ...type,
  },
} satisfies ScoreInputSchemaType
