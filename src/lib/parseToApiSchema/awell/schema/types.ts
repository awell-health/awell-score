import { CodeType, TerminologyType, type LabelType } from '../../../../types'

interface BooleanInputApiType {
  type: 'boolean'
  required: boolean
  allowed_answers?: Array<{
    value: boolean
    label?: LabelType
  }>
}

interface DateInputApiType {
  type: 'date'
  required: boolean
}

interface NumberInputApiType {
  type: 'number'
  required: boolean
  component?: 'slider' // If input is a slider
  allowed_answers?: Array<{
    value: number
    label?: LabelType
  }>
  range?: {
    min: {
      value: number
      label?: LabelType
    }
    max: {
      value: number
      label?: LabelType
    }
  }
}

interface NumbersArrayInputApiType {
  type: 'numbers_array'
  required: boolean
  allowed_answers: Array<{
    value: number
    label?: LabelType
  }>
}

interface StringInputApiType {
  type: 'string'
  required: boolean
  allowed_answers?: Array<{
    value: string
    label?: LabelType
  }>
}

interface StringsArrayInputApiType {
  type: 'strings_array'
  required: boolean
  allowed_answers: Array<{
    value: string
    label?: LabelType
  }>
}

export type PossibleApiInputTypes =
  | BooleanInputApiType
  | StringsArrayInputApiType
  | StringInputApiType
  | DateInputApiType
  | NumbersArrayInputApiType
  | NumberInputApiType

export interface ApiInputType {
  id: string
  label?: LabelType
  input_type: PossibleApiInputTypes
  format?: string
  info?: LabelType
}

export interface ApiOutputType {
  subresult_id: string
  label: LabelType
  type: 'boolean' | 'string' | 'number'
  unit?: LabelType
  interpretation?: LabelType
  terminology?: {
    code: CodeType
  }
}

export interface ApiScoreType {
  calculation_id: string
  calculation_name: LabelType
  calculation_description: LabelType
  calculation_blueprint: {
    input_definition: Array<ApiInputType>
    output_definition: Array<ApiOutputType>
  }
  terminology?: TerminologyType
}
