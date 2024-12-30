import { z } from 'zod'
import type { LabelType } from '../../localization.types'

export type IncomingAnswerValueTypes =
  | boolean
  | number
  | string
  | Date
  | number[]
  | string[]

type BaseInputType = {
  label?: LabelType
  unit?: LabelType
}

export type BooleanInputType = BaseInputType & {
  type: z.ZodOptional<z.ZodBoolean> | z.ZodBoolean
  uiOptions?: {
    options?: Array<{
      value: boolean
      label?: LabelType
    }>
  }
}

export type DateInputType = {
  type: z.ZodOptional<z.ZodDate> | z.ZodDate
}

export type SimpleNumberInputType = {
  type: z.ZodOptional<z.ZodNumber> | z.ZodNumber
  uiOptions?: {
    component?: 'slider' // If input should be a slider
    options?: Array<{
      value: number
      label?: LabelType
    }>
  }
}

export type EnumNumberInputType = {
  type:
    | z.ZodUnion<[z.ZodLiteral<number>, ...z.ZodLiteral<number>[]]>
    | z.ZodOptional<
        z.ZodUnion<[z.ZodLiteral<number>, ...z.ZodLiteral<number>[]]>
      >
  uiOptions?: {
    options?: Array<{
      value: number
      label?: LabelType
    }>
  }
}

export type NumbersArrayInputType = {
  type:
    | z.ZodArray<z.ZodLiteral<number>>
    | z.ZodOptional<z.ZodArray<z.ZodLiteral<number>>>
  uiOptions?: {
    options?: Array<{
      value: number
      label?: LabelType
    }>
  }
}

export type StringInputType = {
  type: z.ZodOptional<z.ZodString> | z.ZodString
  uiOptions?: {
    options?: Array<{
      value: string
      label?: LabelType
    }>
  }
}

export type StringsArrayInputType = {
  type:
    | z.ZodArray<z.ZodLiteral<string>>
    | z.ZodOptional<z.ZodArray<z.ZodLiteral<string>>>
  uiOptions?: {
    options?: Array<{
      value: string
      label?: LabelType
    }>
  }
}

export type PossibleInputType =
  | BooleanInputType
  | StringsArrayInputType
  | StringInputType
  | DateInputType
  | NumbersArrayInputType
  | SimpleNumberInputType
  | EnumNumberInputType

export type CalculationInputSchema = Record<string, PossibleInputType>
