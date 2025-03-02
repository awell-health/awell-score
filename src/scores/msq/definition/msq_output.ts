import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const MSQ_OUTPUT = {
  MSQ_GRAND_TOTAL: {
    label: { en: 'MSQ - Grand total' },
    type: z.number(),
  },
  MSQ_HEAD_TOTAL: {
    label: { en: 'MSQ - Head total' },
    type: z.number(),
  },
  MSQ_EYES_TOTAL: {
    label: { en: 'MSQ - Eyes total' },
    type: z.number(),
  },
  MSQ_EARS_TOTAL: {
    label: { en: 'MSQ - Ears total' },
    type: z.number(),
  },
  MSQ_NOSE_TOTAL: {
    label: { en: 'MSQ - Nose total' },
    type: z.number(),
  },
  MSQ_MOUTH_THROAT_TOTAL: {
    label: { en: 'MSQ - Mouth/throat total' },
    type: z.number(),
  },
  MSQ_SKIN_TOTAL: {
    label: {
      en: 'MSQ - Skin total',
    },
    type: z.number(),
  },
  MSQ_HEART_TOTAL: {
    label: { en: 'MSQ - Heart total' },
    type: z.number(),
  },
  MSQ_LUNGS_TOTAL: {
    label: { en: 'MSQ - Lungs total' },
    type: z.number(),
  },
  MSQ_DIGESTIVE_TRACT_TOTAL: {
    label: { en: 'MSQ - Digestive tract total' },
    type: z.number(),
  },
  MSQ_JOINTS_MUSCLE_TOTAL: {
    label: { en: 'MSQ - Joints/muscle total' },
    type: z.number(),
  },
  MSQ_WEIGHT_TOTAL: {
    label: { en: 'MSQ - Weight total' },
    type: z.number(),
  },
  MSQ_ENERGY_ACTIVITY_TOTAL: {
    label: { en: 'MSQ - Energy/activity total' },
    type: z.number(),
  },
  MSQ_MIND_TOTAL: {
    label: { en: 'MSQ - Mind total' },
    type: z.number(),
  },
  MSQ_EMOTIONS_TOTAL: {
    label: { en: 'MSQ - Emotions total' },
    type: z.number(),
  },
  MSQ_OTHER_TOTAL: {
    label: { en: 'MSQ - Other total' },
    type: z.number(),
  },
  MSQ_INTERPRETATION: {
    label: { en: 'MSQ - Interpretation' },
    type: z.string(),
  },
} satisfies ScoreOutputSchemaType
