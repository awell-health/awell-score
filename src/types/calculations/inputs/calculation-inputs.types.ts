import type { LabelType } from '../../localization.types'

export type IncomingAnswerValueTypes =
  | boolean
  | number
  | string
  | Date
  | number[]
  | string[]

export type BooleanInputType = {
  type: 'boolean'
  allowed_answers?: Array<{
    value: boolean
    label?: LabelType
  }>
}

export type DateInputType = {
  type: 'date'
}

export type NumberInputType = {
  type: 'number'
  component?: 'slider' // If input is a slider
  allowed_answers?: Array<{
    value: number
    label?: LabelType
  }>
  range?: {
    min?: { value: number; label?: LabelType }
    max?: { value: number; label?: LabelType }
  }
}

export type NumbersArrayInputType = {
  type: 'numbers_array'
  allowed_answers: Array<{
    value: number
    label?: LabelType
  }>
}

export type StringInputType = {
  type: 'string'
  allowed_answers?: Array<{
    value: string
    label?: LabelType
  }>
}

export type StringsArrayInputType = {
  type: 'strings_array'
  allowed_answers: Array<{
    value: string
    label?: LabelType
  }>
}

export type CalculationParameterInputType =
  | BooleanInputType
  | StringsArrayInputType
  | StringInputType
  | DateInputType
  | NumbersArrayInputType
  | NumberInputType
