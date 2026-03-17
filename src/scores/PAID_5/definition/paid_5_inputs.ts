import { z } from 'zod'
import {
  type ScoreInputSchemaType,
  type EnumNumberInputType,
} from '../../../types'

const PAID5_INPUT_TYPE = {
  type: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
  ]),
  uiOptions: {
    options: [
      {
        label: {
          en: 'Not a problem',
          pl: 'Nie jest to problem',
        },
        value: 0,
      },
      {
        label: {
          en: 'Minor problem',
          pl: 'Drobny problem',
        },
        value: 1,
      },
      {
        label: {
          en: 'Moderate problem',
          pl: 'Umiarkowany problem',
        },
        value: 2,
      },
      {
        label: {
          en: 'Somewhat serious problem',
          pl: 'Dość poważny problem',
        },
        value: 3,
      },
      {
        label: {
          en: 'Serious problem',
          pl: 'Poważny problem',
        },
        value: 4,
      },
    ],
  },
} satisfies EnumNumberInputType

export const PAID5_INPUTS = {
  PAID5_Q01: {
    label: {
      en: 'Feeling scared when you think about living with diabetes?',
      pl: 'Poczucie przerażenia na myśl o życiu z cukrzycą?',
    },
    ...PAID5_INPUT_TYPE,
  },
  PAID5_Q02: {
    label: {
      en: 'Feeling depressed when you think about living with diabetes?',
      pl: 'Poczucie przygnębienia na myśl o życiu z cukrzycą?',
    },
    ...PAID5_INPUT_TYPE,
  },
  PAID5_Q03: {
    label: {
      en: 'Worrying about the future and the possibility of serious complications?',
      pl: 'Martwienie się o przyszłość i możliwość poważnych powikłań?',
    },
    ...PAID5_INPUT_TYPE,
  },
  PAID5_Q04: {
    label: {
      en: 'Feeling that diabetes is taking up too much of your mental and physical energy every day?',
      pl: 'Poczucie, że cukrzyca zabiera Pani/Panu zbyt wiele sił psychicznych i fizycznych każdego dnia?',
    },
    ...PAID5_INPUT_TYPE,
  },
  PAID5_Q05: {
    label: {
      en: 'Coping with complications of diabetes?',
      pl: 'Radzenie sobie z powikłaniami cukrzycy?',
    },
    ...PAID5_INPUT_TYPE,
  },
} satisfies ScoreInputSchemaType
