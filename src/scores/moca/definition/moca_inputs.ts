import { z } from 'zod'
import { type ScoreInputSchemaType } from '../../../types'
export const MOCA_INPUTS = {
  ALTERNATING_TRAIL_MARKING: {
    type: z.union([z.literal(0), z.literal(1)]).optional(),
  },
  VISUOCONSTRUCTIONAL_SKILLS_CUBE: {
    type: z.union([z.literal(0), z.literal(1)]).optional(),
  },
  VISUOCONSTRUCTIONAL_SKILLS_CLOCK: {
    type: z
      .array(z.union([z.literal(0), z.literal(1), z.literal(2)]))
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Contour' } },
        { value: 1, label: { en: 'Numbers' } },
        { value: 2, label: { en: 'Hands' } },
      ],
    },
  },
  NAMING: {
    type: z
      .array(z.union([z.literal(0), z.literal(1), z.literal(2)]))
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Lion' } },
        { value: 1, label: { en: 'Rhino' } },
        { value: 2, label: { en: 'Camel' } },
      ],
    },
  },
  FORWARD_DIGIT_SPAN: {
    type: z.union([z.literal(0), z.literal(1)]).optional(),
  },
  BACKWARD_DIGIT_SPAN: {
    type: z.union([z.literal(0), z.literal(1)]).optional(),
  },
  VIGILANCE: {
    type: z.union([z.literal(0), z.literal(1)]).optional(),
  },
  SERIAL_7S: {
    type: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .optional(),
  },
  SENTENCE_REPETITION: {
    type: z.union([z.literal(0), z.literal(1), z.literal(2)]).optional(),
  },
  VERBAL_FLUENCY: {
    type: z.union([z.literal(0), z.literal(1)]).optional(),
  },
  ABSTRACTION: {
    type: z.union([z.literal(0), z.literal(1), z.literal(2)]).optional(),
  },
  DELAYED_RECALL: {
    type: z
      .array(
        z.union([
          z.literal(0),
          z.literal(1),
          z.literal(2),
          z.literal(3),
          z.literal(4),
        ]),
      )
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Face' } },
        { value: 1, label: { en: 'Velvet' } },
        { value: 2, label: { en: 'Church' } },
        { value: 3, label: { en: 'Daisy' } },
        { value: 4, label: { en: 'Red' } },
      ],
    },
  },
  ORIENTATION: {
    type: z
      .array(
        z.union([
          z.literal(0),
          z.literal(1),
          z.literal(2),
          z.literal(3),
          z.literal(4),
          z.literal(5),
        ]),
      )
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Date' } },
        { value: 1, label: { en: 'Month' } },
        { value: 2, label: { en: 'Year' } },
        { value: 3, label: { en: 'Day' } },
        { value: 4, label: { en: 'Location' } },
        { value: 5, label: { en: 'Place' } },
      ],
    },
  },
} satisfies ScoreInputSchemaType
