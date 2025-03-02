import { z } from 'zod'
import {
  type ScoreInputSchemaType,
  type EnumNumberInputType,
} from '../../../types'

const type = {
  type: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
  ]),
} satisfies EnumNumberInputType

export const PCS_INPUTS = {
  question_1: { ...type },
  question_2: { ...type },
  question_3: { ...type },
  question_4: { ...type },
  question_5: { ...type },
  question_6: { ...type },
  question_7: { ...type },
  question_8: { ...type },
  question_9: { ...type },
  question_10: { ...type },
  question_11: { ...type },
  question_12: { ...type },
  question_13: { ...type },
} satisfies ScoreInputSchemaType
