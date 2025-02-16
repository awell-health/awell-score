import { z } from 'zod'
import {
  type ScoreInputSchemaType,
  type SimpleNumberInputType,
} from '../../../types'

const type = {
  type: z.number().min(0).max(100).optional(),
  uiOptions: {
    component: 'slider',
    range: {
      min: {
        label: { nl: 'Geen enkele moeite', en: 'Without difficulty' },
      },
      max: { label: { nl: 'Onmogelijk', en: 'Not at all' } },
    },
  },
} satisfies SimpleNumberInputType

export const DRI_INPUTS = {
  DRI_01: {
    ...type,
    label: {
      nl: 'Aankleden (zonder hulp)',
      en: 'Dressing (without help)',
    },
  },
  DRI_02: {
    ...type,
    label: { nl: 'Buitenshuis lopen', en: 'Outdoor walks' },
  },
  DRI_03: {
    ...type,
    label: { nl: 'Traplopen', en: 'Climbing stairs' },
  },
  DRI_04: {
    ...type,
    label: { nl: 'Langere tijd zitten', en: 'Sitting longer time' },
  },
  DRI_05: {
    ...type,
    label: {
      nl: 'Voorovergebogen staan',
      en: 'Standing bent over a sink',
    },
  },
  DRI_06: {
    ...type,
    label: { nl: 'Het dragen van een tas', en: 'Carrying a bag' },
  },
  DRI_07: {
    ...type,
    label: { nl: 'Bedden opmaken', en: 'Making a bed' },
  },
  DRI_08: {
    ...type,
    label: { nl: 'Hardlopen', en: 'Running' },
  },
  DRI_09: {
    ...type,
    label: { nl: 'Lichte werkzaamheden', en: 'Light work' },
  },
  DRI_10: {
    ...type,
    label: { nl: 'Zware werkzaamheden', en: 'Heavy work' },
  },
  DRI_11: {
    ...type,
    label: {
      nl: 'Tillen van zware voorwerpen',
      en: 'Lifting heavy objects',
    },
  },
  DRI_12: {
    ...type,
    label: {
      nl: 'Sport of gymnastiek',
      en: 'Participating in exercise/sports',
    },
  },
} satisfies ScoreInputSchemaType
