import type { InputType } from '../../../src/types/calculations.types'
import { NumberInputType } from '../../../src/types/calculations/inputs/calculation-inputs.types'

const type: NumberInputType = {
  type: 'number',
  allowed_answers: [
    {
      value: 1,
      label: { en: 'Absent' },
    },
    {
      value: 2,
      label: {
        en: 'Minimal',
      },
    },
    {
      value: 3,
      label: {
        en: 'Mild',
      },
    },
    {
      value: 4,
      label: {
        en: 'Moderate',
      },
    },
    {
      value: 5,
      label: {
        en: 'Moderate severe',
      },
    },
    {
      value: 6,
      label: {
        en: 'Severe',
      },
    },
    {
      value: 7,
      label: {
        en: 'Extreme',
      },
    },
  ],
}

export const PANSS_6_INPUTS: Array<InputType> = [
  {
    input_id: 'PANSS_6_Q01_DELUSIONS',
    label: {
      en: 'Delusions',
    },
    input_type,
  },
  {
    input_id: 'PANSS_6_Q02_CONCEPTUAL_DISORGANIZATIONS',
    label: {
      en: 'Conceptual disorganization',
    },
    input_type,
  },
  {
    input_id: 'PANSS_6_Q03_HALLUCINATORY_BEHAVIOR',
    label: {
      en: 'Hallucinatory behavior',
    },
    input_type,
  },
  {
    input_id: 'PANSS_6_Q04_BLUNTED_AFFECT',
    label: {
      en: 'Blunted affect',
    },
    input_type,
  },
  {
    input_id: 'PANSS_6_Q05_PASSIVE_SOCIAL_WITHDRAWAL',
    label: {
      en: 'Passive/apathetic social withdrawal',
    },
    input_type,
  },
  {
    input_id: 'PANSS_6_Q06_LACK_OF_SPONTANEITY',
    label: {
      en: 'Lack of spontaneity and flow of conversation',
    },
    input_type,
  },
]
