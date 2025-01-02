import type { InputType } from '../../../src/types/calculations.types'
import { NumberInputType } from '../../../src/types/calculations/inputs/calculation-inputs.types'

const input_type: NumberInputType = {
  type: 'number',
  allowed_answers: [
    {
      label: { en: 'No' },
      value: 0,
    },
    {
      label: { en: 'Yes' },
      value: 1,
    },
  ],
}

const input_type_inverse: NumberInputType = {
  type: 'number',
  allowed_answers: [
    {
      label: { en: 'No' },
      value: 1,
    },
    {
      label: { en: 'Yes' },
      value: 0,
    },
  ],
}

export const DAST10_INPUTS: Array<InputType> = [
  {
    input_id: 'DAST10_Q01',
    input_label: {
      en: 'Have you used drugs other than those required for medical reasons?',
    },
    input_type,
  },
  {
    input_id: 'DAST10_Q02',
    input_label: {
      en: 'Do you abuse more than one drug at a time?',
    },
    input_type,
  },
  {
    input_id: 'DAST10_Q03',
    input_label: {
      en: 'Are you always able to stop using drugs when you want to? (If never use drugs, answer “Yes.”)',
    },
    input_type: input_type_inverse,
  },
  {
    input_id: 'DAST10_Q04',
    input_label: {
      en: 'Have you had "blackouts" or "flashbacks" as a result of drug use?',
    },
    input_type,
  },
  {
    input_id: 'DAST10_Q05',
    input_label: {
      en: 'Do you ever feel bad or guilty about your drug use? If never use drugs, choose “No.”',
    },
    input_type,
  },
  {
    input_id: 'DAST10_Q06',
    input_label: {
      en: 'Does your spouse (or parents) ever complain about your involvement with drugs?',
    },
    input_type,
  },
  {
    input_id: 'DAST10_Q07',
    input_label: {
      en: 'Have you neglected your family because of your use of drugs?',
    },
    input_type,
  },
  {
    input_id: 'DAST10_Q08',
    input_label: {
      en: 'Have you engaged in illegal activities in order to obtain drugs?',
    },
    input_type,
  },
  {
    input_id: 'DAST10_Q09',
    input_label: {
      en: 'Have you ever experienced withdrawal symptoms (felt sick) when you stopped taking drugs?',
    },
    input_type,
  },
  {
    input_id: 'DAST10_Q10',
    input_label: {
      en: 'Have you had medical problems as a result of your drug use (e.g., memory loss, hepatitis, convulsions, bleeding, etc.)?',
    },
    input_type,
  },
]
