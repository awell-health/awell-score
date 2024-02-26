import type { InputType } from '../../../../types/calculations.types'
import { NumberInputType } from '../../../../types/calculations/inputs/calculation-inputs.types'

export const NEVER = 0
export const RARELY = 1
export const SOMETIMES = 2
export const OFTEN = 3
export const ALMOST_ALWAYS = 4

const input_type: NumberInputType = {
  type: 'number',
  allowed_answers: [
    {
      value: NEVER,
      label: { en: 'Never' },
    },
    {
      value: RARELY,
      label: {
        en: 'Rarely',
      },
    },
    {
      value: SOMETIMES,
      label: {
        en: 'Sometimes',
      },
    },
    {
      value: OFTEN,
      label: {
        en: 'Often',
      },
    },
    {
      value: ALMOST_ALWAYS,
      label: {
        en: 'Almost always',
      },
    },
  ],
}

export const MFIS_INPUTS: Array<InputType> = [
  {
    input_id: 'Q01',
    input_label: {
      en: 'I have been less alert.',
    },
    input_type,
  },
  {
    input_id: 'Q02',
    input_label: {
      en: 'I have had difficulty paying attention.',
    },
    input_type,
  },
  {
    input_id: 'Q03',
    input_label: {
      en: 'I have been unable to think clearly.',
    },
    input_type,
  },
  {
    input_id: 'Q04',
    input_label: {
      en: 'I have been clumsy and uncoordinated.',
    },
    input_type,
  },
  {
    input_id: 'Q05',
    input_label: {
      en: 'I have been forgetful.',
    },
    input_type,
  },
  {
    input_id: 'Q06',
    input_label: {
      en: 'I have had to pace myself in my physical activities.',
    },
    input_type,
  },
  {
    input_id: 'Q07',
    input_label: {
      en: 'I have been less motivated to do anything that requires physical effort.',
    },
    input_type,
  },
  {
    input_id: 'Q08',
    input_label: {
      en: 'I have been less motivated to participate in social activities.',
    },
    input_type,
  },
  {
    input_id: 'Q09',
    input_label: {
      en: 'I have been limited in my ability to do things away from home.',
    },
    input_type,
  },
  {
    input_id: 'Q10',
    input_label: {
      en: ' I have had trouble maintaining physical effort for long periods.',
    },
    input_type,
  },
  {
    input_id: 'Q11',
    input_label: {
      en: 'I have had difficulty making decisions',
    },
    input_type,
  },
  {
    input_id: 'Q12',
    input_label: {
      en: 'I have been less motivated to do anything that requires thinking.',
    },
    input_type,
  },
  {
    input_id: 'Q13',
    input_label: {
      en: 'My muscles have felt weak.',
    },
    input_type,
  },
  {
    input_id: 'Q14',
    input_label: {
      en: 'I have been physically uncomfortable.',
    },
    input_type,
  },
  {
    input_id: 'Q15',
    input_label: {
      en: 'I have had trouble finishing tasks that require thinking.',
    },
    input_type,
  },
  {
    input_id: 'Q16',
    input_label: {
      en: 'I have had difficulty organizing things.',
    },
    input_type,
  },
  {
    input_id: 'Q17',
    input_label: {
      en: 'I have been less able to complete tasks that require physical effort.',
    },
    input_type,
  },
  {
    input_id: 'Q18',
    input_label: {
      en: 'My thinking has been slowed down.',
    },
    input_type,
  },
  {
    input_id: 'Q19',
    input_label: {
      en: 'I have had trouble concentrating.',
    },
    input_type,
  },
  {
    input_id: 'Q20',
    input_label: {
      en: 'I have limited my physical activities.',
    },
    input_type,
  },
  {
    input_id: 'Q21',
    input_label: {
      en: 'I have needed to rest more often or for longer periods of time.',
    },
    input_type,
  },
]
