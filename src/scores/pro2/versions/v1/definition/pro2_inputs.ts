import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../../../types'

export const STOOL_FREQUENCY_FACTOR = 2
export const ABDOMINAL_PAIN_FACTOR = 5
export const GENERAL_WELL_BEING_FACTOR = 7

export const SUBSCORE_QUESTIONS = ['STOOL_FREQUENCY', 'ABDOMINAL_PAIN']

export const PRO2_INPUTS = {
  STOOL_FREQUENCY: {
    type: z.number().min(0).max(20),
    info: {
      en: `Stool frequency will be multiplied with a factor ${STOOL_FREQUENCY_FACTOR}`,
    },
  },
  ABDOMINAL_PAIN: {
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'None' } },
        { value: 1, label: { en: 'Mild' } },
        { value: 2, label: { en: 'Moderate' } },
        { value: 3, label: { en: 'Severe' } },
      ],
    },
    info: {
      en: `Abdominal pain will be multiplied with a factor ${ABDOMINAL_PAIN_FACTOR}`,
    },
  },
  GENERAL_WELL_BEING: {
    type: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
    ]),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Generally well' } },
        { value: 1, label: { en: 'Slightly under par' } },
        { value: 2, label: { en: 'Poor' } },
        { value: 3, label: { en: 'Very poor' } },
        { value: 4, label: { en: 'Terrible' } },
      ],
    },
    info: {
      en: `General well-being will be multiplied with a factor ${GENERAL_WELL_BEING_FACTOR}`,
    },
  },
  JOINT_PROBLEMS: {
    type: z.union([z.literal(0), z.literal(1)]),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'No' } },
        { value: 1, label: { en: 'Yes' } },
      ],
    },
  },
  SKIN_PROBLEMS: {
    type: z.union([z.literal(0), z.literal(1)]),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'No' } },
        { value: 1, label: { en: 'Yes' } },
      ],
    },
  },
  EYE_PROBLEMS: {
    type: z.union([z.literal(0), z.literal(1)]),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'No' } },
        { value: 1, label: { en: 'Yes' } },
      ],
    },
  },
  MOUTH_SORES: {
    type: z.union([z.literal(0), z.literal(1)]),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'No' } },
        { value: 1, label: { en: 'Yes' } },
      ],
    },
  },
} satisfies ScoreInputSchemaType
