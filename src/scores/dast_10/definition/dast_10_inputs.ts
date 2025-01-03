import { z } from 'zod'
import { EnumNumberInputType, ScoreInputSchemaType } from '../../../types'

const type = {
  type: z.union([z.literal(0), z.literal(1)]).optional(),
  uiOptions: {
    options: [
      {
        label: { en: 'No' },
        value: 0,
      },
      {
        label: { en: 'Yes' },
        value: 1,
      },
    ],
  },
} satisfies EnumNumberInputType

const typeInverse = {
  type: z.union([z.literal(0), z.literal(1)]).optional(),
  uiOptions: {
    options: [
      {
        label: { en: 'No' },
        value: 1,
      },
      {
        label: { en: 'Yes' },
        value: 0,
      },
    ],
  },
} satisfies EnumNumberInputType

export const DAST10_INPUTS = {
  DAST10_Q01: {
    label: {
      en: 'Have you used drugs other than those required for medical reasons?',
    },
    ...type,
  },
  DAST10_Q02: {
    label: {
      en: 'Do you abuse more than one drug at a time?',
    },
    ...type,
  },
  DAST10_Q03: {
    label: {
      en: 'Are you always able to stop using drugs when you want to? (If never use drugs, answer “Yes.”)',
    },
    ...typeInverse,
  },
  DAST10_Q04: {
    label: {
      en: 'Have you had "blackouts" or "flashbacks" as a result of drug use?',
    },
    ...type,
  },
  DAST10_Q05: {
    label: {
      en: 'Do you ever feel bad or guilty about your drug use? If never use drugs, choose “No.”',
    },
    ...type,
  },
  DAST10_Q06: {
    label: {
      en: 'Does your spouse (or parents) ever complain about your involvement with drugs?',
    },
    ...type,
  },
  DAST10_Q07: {
    label: {
      en: 'Have you neglected your family because of your use of drugs?',
    },
    ...type,
  },
  DAST10_Q08: {
    label: {
      en: 'Have you engaged in illegal activities in order to obtain drugs?',
    },
    ...type,
  },
  DAST10_Q09: {
    label: {
      en: 'Have you ever experienced withdrawal symptoms (felt sick) when you stopped taking drugs?',
    },
    ...type,
  },
  DAST10_Q10: {
    label: {
      en: 'Have you had medical problems as a result of your drug use (e.g., memory loss, hepatitis, convulsions, bleeding, etc.)?',
    },
    ...type,
  },
} satisfies ScoreInputSchemaType
