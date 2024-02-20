// @flow
import type { InputType } from '../../../../types/calculations.types'

export const NEVER = 5
export const RARELY = 4
export const SOMETIMES = 3
export const MOST_OF_THE_TIME = 2
export const ALWAYS = 1

export const COMPLETELY_AGREE = 1
export const MODERATELY_AGREE = 2
export const NEITHER_AGREE_NOR_DISAGREE = 3
export const MODERATELY_DISAGREE = 4
export const COMPLETELY_DISAGREE = 5

const input_type_frequency = {
  type: 'number',
  allowed_answers: [
    {
      value: ALWAYS,
      label: { en: 'Always' }
    },
    {
      value: MOST_OF_THE_TIME,
      label: {
        en: 'Most of the time'
      }
    },
    {
      value: SOMETIMES,
      label: {
        en: 'Sometimes'
      }
    },
    {
      value: RARELY,
      label: {
        en: 'Rarely'
      }
    },
    {
      value: NEVER,
      label: {
        en: 'Never'
      }
    }
  ]
}

const input_type_agreement = {
  type: 'number',
  allowed_answers: [
    {
      value: COMPLETELY_AGREE,
      label: { en: 'Completely agree' }
    },
    {
      value: MODERATELY_AGREE,
      label: {
        en: 'Moderately agree'
      }
    },
    {
      value: NEITHER_AGREE_NOR_DISAGREE,
      label: {
        en: 'Neither agree nor disagree'
      }
    },
    {
      value: MODERATELY_DISAGREE,
      label: {
        en: 'Moderately disagree'
      }
    },
    {
      value: COMPLETELY_DISAGREE,
      label: {
        en: 'Completely disagree'
      }
    }
  ]
}

export const ACRO_INPUTS: Array<InputType> = [
  {
    input_id: 'Q01',
    input_label: {
      en: 'My legs are weak'
    },
    input_type: input_type_agreement
  },
  {
    input_id: 'Q02',
    input_label: {
      en: 'I feel ugly'
    },
    input_type: input_type_frequency
  },
  {
    input_id: 'Q03',
    input_label: {
      en: 'I get depressed'
    },
    input_type: input_type_agreement
  },
  {
    input_id: 'Q04',
    input_label: {
      en: 'I look awful in photographs'
    },
    input_type: input_type_frequency
  },
  {
    input_id: 'Q05',
    input_label: {
      en: 'I avoid going out very much with friends because of my appearance'
    },
    input_type: input_type_frequency
  },
  {
    input_id: 'Q06',
    input_label: {
      en: 'I try to avoid socializing'
    },
    input_type: input_type_frequency
  },
  {
    input_id: 'Q07',
    input_label: {
      en: 'I look different in the mirror.'
    },
    input_type: input_type_frequency
  },
  {
    input_id: 'Q08',
    input_label: {
      en: 'I feel rejected by people because of my illness'
    },
    input_type: input_type_frequency
  },
  {
    input_id: 'Q09',
    input_label: {
      en: 'I have problems carrying out my usual activities'
    },
    input_type: input_type_agreement
  },
  {
    input_id: 'Q10',
    input_label: {
      en: 'People stare at me because of my appearance'
    },
    input_type: input_type_frequency
  },
  {
    input_id: 'Q11',
    input_label: {
      en: 'Some part of my body (nose, feet, hands,...) are too big'
    },
    input_type: input_type_frequency
  },
  {
    input_id: 'Q12',
    input_label: {
      en: 'I have problems doing things with my hands, for example, sewing or handling tools'
    },
    input_type: input_type_frequency
  },
  {
    input_id: 'Q13',
    input_label: {
      en: 'The illness affects my performance at work or in my usual tasks'
    },
    input_type: input_type_agreement
  },
  {
    input_id: 'Q14',
    input_label: {
      en: 'My joints ache'
    },
    input_type: input_type_agreement
  },
  {
    input_id: 'Q15',
    input_label: {
      en: 'I am usually tired'
    },
    input_type: input_type_agreement
  },
  {
    input_id: 'Q16',
    input_label: {
      en: 'I snore at night'
    },
    input_type: input_type_frequency
  },
  {
    input_id: 'Q17',
    input_label: {
      en: 'It is hard for me to articulate words due to the size of my tongue'
    },
    input_type: input_type_frequency
  },
  {
    input_id: 'Q18',
    input_label: {
      en: 'I have problems with sexual relationships'
    },
    input_type: input_type_frequency
  },
  {
    input_id: 'Q19',
    input_label: {
      en: 'I feel like a sick person'
    },
    input_type: input_type_agreement
  },
  {
    input_id: 'Q20',
    input_label: {
      en: 'The physical changes produced by my illness govern my life'
    },
    input_type: input_type_frequency
  },
  {
    input_id: 'Q21',
    input_label: {
      en: 'I have little sexual appetite'
    },
    input_type: input_type_frequency
  },
  {
    input_id: 'Q22',
    input_label: {
      en: 'I feel weak'
    },
    input_type: input_type_agreement
  }
]
