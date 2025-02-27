import { z } from 'zod'
import {
  type ScoreInputSchemaType,
  type EnumNumberInputType,
} from '../../../types'

export const type = {
  type: z
    .union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
    ])
    .optional(),
} satisfies EnumNumberInputType

export const NDI_INPUTS = {
  NDI_Q01: {
    ...type,
    label: {
      en: 'Pain Intensity',
      nl: '',
    },
  },
  NDI_Q02: {
    ...type,
    label: {
      en: 'Personal Care (Washing, Dressing, etc.)',
      nl: '',
    },
  },
  NDI_Q03: {
    ...type,
    label: {
      en: 'Lifting',
      nl: '',
    },
  },
  NDI_Q04: {
    ...type,
    label: {
      en: 'Reading',
      nl: '',
    },
  },
  NDI_Q05: {
    ...type,
    label: {
      en: 'Headaches',
      nl: '',
    },
  },
  NDI_Q06: {
    ...type,
    label: {
      en: 'Concentration',
      nl: '',
    },
  },
  NDI_Q07: {
    ...type,
    label: {
      en: 'Work',
      nl: '',
    },
  },
  NDI_Q08: {
    ...type,
    label: {
      en: 'Driving',
      nl: '',
    },
  },
  NDI_Q09: {
    ...type,
    label: {
      en: 'Sleeping',
      nl: '',
    },
  },
  NDI_Q10: {
    ...type,
    label: {
      en: 'Recreation',
      nl: '',
    },
  },
} satisfies ScoreInputSchemaType
