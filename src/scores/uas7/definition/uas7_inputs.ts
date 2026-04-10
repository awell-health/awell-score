import { z } from 'zod'
import {
  type ScoreInputSchemaType,
  type EnumNumberInputType,
} from '../../../types'

const WHEALS_INPUT_TYPE = {
  type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
  uiOptions: {
    options: [
      { label: { en: 'None' }, value: 0 },
      { label: { en: 'Mild (fewer than 20 wheals)' }, value: 1 },
      { label: { en: 'Moderate (20-50 wheals)' }, value: 2 },
      {
        label: { en: 'Intense (more than 50 wheals or large confluent areas)' },
        value: 3,
      },
    ],
  },
} satisfies EnumNumberInputType

const ITCH_INPUT_TYPE = {
  type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
  uiOptions: {
    options: [
      { label: { en: 'None' }, value: 0 },
      {
        label: { en: 'Mild (present but not annoying or troublesome)' },
        value: 1,
      },
      {
        label: {
          en: 'Moderate (troublesome but does not interfere with normal daily activity or sleep)',
        },
        value: 2,
      },
      {
        label: {
          en: 'Intense (severe itch, sufficiently troublesome to interfere with normal daily activity or sleep)',
        },
        value: 3,
      },
    ],
  },
} satisfies EnumNumberInputType

const DAYS = [1, 2, 3, 4, 5, 6, 7] as const

type DayInputs = {
  [K in `DAY_${(typeof DAYS)[number]}_${'WHEALS' | 'ITCH'}`]: EnumNumberInputType & {
    label: { en: string }
  }
}

const dayInputs = DAYS.reduce((acc, day) => {
  acc[`DAY_${day}_WHEALS`] = {
    label: { en: `Day ${day} - Wheals (hives) Score 24h` },
    ...WHEALS_INPUT_TYPE,
  }
  acc[`DAY_${day}_ITCH`] = {
    label: { en: `Day ${day} - Itching Score 24h` },
    ...ITCH_INPUT_TYPE,
  }
  return acc
}, {} as Record<string, EnumNumberInputType & { label: { en: string } }>) as DayInputs

export const UAS7_INPUTS = {
  ...dayInputs,
} satisfies ScoreInputSchemaType
