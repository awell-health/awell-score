import type { InputType } from '../../../src/types/calculations.types'
import { NumberInputType } from '../../../src/types/calculations/inputs/calculation-inputs.types'

const ANSWERS: NumberInputType = {
  type: 'number',
  allowed_answers: [
    {
      label: { en: 'Not at all' },
      value: 0,
    },
    {
      label: { en: 'Only occasionally' },
      value: 1,
    },
    {
      label: {
        en: 'Sometimes',
      },
      value: 2,
    },
    {
      label: { en: 'Often' },
      value: 3,
    },
    {
      label: { en: 'Most or all of the time' },
      value: 4,
    },
  ],
}

const ANSWERS_INVERSE: NumberInputType = {
  type: 'number',
  allowed_answers: [
    {
      label: { en: 'Not at all' },
      value: 4,
    },
    {
      label: { en: 'Only occasionally' },
      value: 3,
    },
    {
      label: {
        en: 'Sometimes',
      },
      value: 2,
    },
    {
      label: { en: 'Often' },
      value: 1,
    },
    {
      label: { en: 'Most or all of the time' },
      value: 0,
    },
  ],
}

export const YP_CORE_INPUTS: Array<InputType> = [
  {
    input_id: 'YP_CORE_Q01',
    input_label: {
      en: 'Over the last week, I’ve felt edgy or nervous',
    },
    input_type: ANSWERS,
  },
  {
    input_id: 'YP_CORE_Q02',
    input_label: {
      en: 'Over the last week, I haven’t felt like talking to anyone',
    },
    input_type: ANSWERS,
  },
  {
    input_id: 'YP_CORE_Q03',
    input_label: {
      en: 'Over the last week, I’ve felt able to cope when things go wrong',
    },
    input_type: ANSWERS_INVERSE,
  },
  {
    input_id: 'YP_CORE_Q04',
    input_label: {
      en: 'Over the last week, I’ve thought of hurting myself',
    },
    input_type: ANSWERS,
  },
  {
    input_id: 'YP_CORE_Q05',
    input_label: {
      en: 'Over the last week, there’s been someone I felt able to ask for help',
    },
    input_type: ANSWERS_INVERSE,
  },
  {
    input_id: 'YP_CORE_Q06',
    input_label: {
      en: 'Over the last week, my thoughts and feelings distressed me',
    },
    input_type: ANSWERS,
  },
  {
    input_id: 'YP_CORE_Q07',
    input_label: {
      en: 'Over the last week, my problems have felt too much for me',
    },
    input_type: ANSWERS,
  },
  {
    input_id: 'YP_CORE_Q08',
    input_label: {
      en: 'Over the last week, it’s been hard to go to sleep or stay asleep',
    },
    input_type: ANSWERS,
  },
  {
    input_id: 'YP_CORE_Q09',
    input_label: {
      en: 'Over the last week, I’ve felt unhappy',
    },
    input_type: ANSWERS,
  },
  {
    input_id: 'YP_CORE_Q10',
    input_label: {
      en: 'Over the last week, I’ve done all the things I wanted to',
    },
    input_type: ANSWERS_INVERSE,
  },
]
