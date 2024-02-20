// @flow
import { type InputType } from '../../../../types/calculations.types'

export const NOT_AT_ALL = 0
export const ONCE = 1
export const TWO_TO_FOUR_TIMES = 2
export const MORE_THAN_WEEKLY = 3
export const DAILY = 4

const input_type = {
  type: 'number',
  allowed_answers: [
    {
      value: NOT_AT_ALL,
      label: {
        en: 'Not at all'
      }
    },
    {
      value: ONCE,
      label: {
        en: 'Once'
      }
    },
    {
      value: TWO_TO_FOUR_TIMES,
      label: {
        en: 'Two to four times'
      }
    },
    {
      value: MORE_THAN_WEEKLY,
      label: {
        en: 'More than weekly but not daily'
      }
    },
    {
      value: DAILY,
      label: {
        en: 'Daily'
      }
    }
  ]
}

export const BWCS_INPUTS: Array<InputType> = [
  {
    input_id: 'Q01',
    input_label: {
      en: 'During the past 4 weeks, how often have you been constipated?'
    },
    input_type
  },
  {
    input_id: 'Q02',
    input_label: {
      en: 'During the past 4 weeks, how often have you lost control of your bowels or had an accident?'
    },
    input_type
  },
  {
    input_id: 'Q03',
    input_label: {
      en: 'During the past 4 weeks, how often have you almost lost control of your bowels or almost had an accident?'
    },
    input_type
  },
  {
    input_id: 'Q04',
    input_label: {
      en: 'During the past 4 weeks, how often have you altered your activities because of bowel control problems?'
    },
    input_type
  },
  {
    input_id: 'Q05',
    input_label: {
      en: 'During the past 4 weeks, how much have bowel problems restricted your overall lifestyle?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Not at all' },
          value: 0
        },
        {
          label: { en: '' },
          value: 1
        },
        {
          label: { en: '' },
          value: 2
        },
        {
          label: { en: '' },
          value: 3
        },
        {
          label: { en: '' },
          value: 4
        },
        {
          label: { en: '' },
          value: 5
        },
        {
          label: { en: '' },
          value: 6
        },
        {
          label: { en: '' },
          value: 7
        },
        {
          label: { en: '' },
          value: 8
        },
        {
          label: { en: '' },
          value: 9
        },
        {
          label: { en: 'Severly' },
          value: 10
        }
      ]
    }
  }
]
