import { z } from 'zod'
import { EnumNumberInputType, ScoreInputSchemaType } from '../../../types'

export const inputType = {
  type: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
  ]),
} satisfies EnumNumberInputType

export const PDQ_8_INPUTS = {
  PDQ_8_MOBILITY: {
    ...inputType,
  },
  PDQ_8_ADL: {
    ...inputType,
  },
  PDQ_8_EMOTIONAL_WELLBEING: {
    ...inputType,
  },
  PDQ_8_STIGMA: {
    ...inputType,
  },
  PDQ_8_SOCIAL_SUPPORT: {
    ...inputType,
  },
  PDQ_8_COGNITIONS: {
    ...inputType,
  },
  PDQ_8_COMMUNICATIONS: {
    ...inputType,
  },
  PDQ_8_BODILY_DISCOMFORT: {
    ...inputType,
  },
} satisfies ScoreInputSchemaType
