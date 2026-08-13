import { z } from 'zod'
import {
  type EnumNumberInputType,
  type ScoreInputSchemaType,
} from '../../../types'

/**
 * All five items share one frequency scale. Higher numbers mean better
 * well-being, so no item is reverse scored. Options are listed in the order
 * used by the WHO-5 form.
 */
const type = {
  type: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
  ]),
  uiOptions: {
    options: [
      {
        label: { en: 'All of the time' },
        value: 5,
      },
      {
        label: { en: 'Most of the time' },
        value: 4,
      },
      {
        label: { en: 'More than half of the time' },
        value: 3,
      },
      {
        label: { en: 'Less than half of the time' },
        value: 2,
      },
      {
        label: { en: 'Some of the time' },
        value: 1,
      },
      {
        label: { en: 'At no time' },
        value: 0,
      },
    ],
  },
} satisfies EnumNumberInputType

export const WHO5_INPUTS = {
  WHO5_Q01: {
    label: { en: 'I have felt cheerful and in good spirits' },
    ...type,
  },
  WHO5_Q02: {
    label: { en: 'I have felt calm and relaxed' },
    ...type,
  },
  WHO5_Q03: {
    label: { en: 'I have felt active and vigorous' },
    ...type,
  },
  WHO5_Q04: {
    label: { en: 'I woke up feeling fresh and rested' },
    ...type,
  },
  WHO5_Q05: {
    label: {
      en: 'My daily life has been filled with things that interest me',
    },
    ...type,
  },
} satisfies ScoreInputSchemaType
