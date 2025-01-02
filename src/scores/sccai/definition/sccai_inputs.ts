import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../types'

export const SCCAI_INPUTS = {
  number_of_stools_during_day: {
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    uiOptions: {
      options: [
        { value: 0, label: { en: '0-3' } },
        { value: 1, label: { en: '4-6' } },
        { value: 2, label: { en: '7-9' } },
        { value: 3, label: { en: '>9' } },
      ],
    },
  },
  nbr_stools_during_night: {
    type: z.union([z.literal(0), z.literal(1), z.literal(2)]),
    uiOptions: {
      options: [
        { value: 0, label: { en: '0' } },
        { value: 1, label: { en: '1-3' } },
        { value: 2, label: { en: '4-6' } },
      ],
    },
  },
  urgency_of_going_to_toilet: {
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'No urgency' } },
        { value: 1, label: { en: 'Hurry' } },
        { value: 2, label: { en: 'Immediately' } },
        { value: 3, label: { en: 'Incontinence' } },
      ],
    },
  },
  blood_in_stool: {
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'No blood' } },
        { value: 1, label: { en: 'Trace' } },
        { value: 2, label: { en: 'Occasionaly frank' } },
        { value: 3, label: { en: 'Usually frank' } },
      ],
    },
  },
  general_wellness: {
    type: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
    ]),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Very well' } },
        { value: 1, label: { en: 'Slightly below par' } },
        { value: 2, label: { en: 'Poor' } },
        { value: 3, label: { en: 'Very poor' } },
        { value: 4, label: { en: 'Terrible' } },
      ],
    },
  },
  joint_pain: {
    type: z.union([z.literal(0), z.literal(1)]),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'No' } },
        { value: 1, label: { en: 'Yes' } },
      ],
    },
  },
  eye_problems: {
    type: z.union([z.literal(0), z.literal(1)]),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'No' } },
        { value: 1, label: { en: 'Yes' } },
      ],
    },
  },
  deep_skin_problems: {
    type: z.union([z.literal(0), z.literal(1)]),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'No' } },
        { value: 1, label: { en: 'Yes' } },
      ],
    },
  },
  surface_skin_problems: {
    type: z.union([z.literal(0), z.literal(1)]),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'No' } },
        { value: 1, label: { en: 'Yes' } },
      ],
    },
  },
} satisfies ScoreInputSchemaType
