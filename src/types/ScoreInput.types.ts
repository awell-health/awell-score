import { z } from 'zod'
import type { LabelType } from './Label.types'

interface BaseInputType {
  label?: LabelType
  info?: LabelType
  unit?: LabelType
}

export interface BooleanInputType extends BaseInputType {
  type: z.ZodOptional<z.ZodBoolean> | z.ZodBoolean
  uiOptions?: {
    options?: Array<{
      value: boolean
      label?: LabelType
    }>
  }
}

export interface DateInputType extends BaseInputType {
  type:
    | z.ZodPipeline<z.ZodString, z.ZodDate>
    | z.ZodPipeline<z.ZodOptional<z.ZodString>, z.ZodOptional<z.ZodDate>>
}

export interface SimpleNumberInputType extends BaseInputType {
  type: z.ZodOptional<z.ZodNumber> | z.ZodNumber
  uiOptions?: {
    component?: 'slider' // If input should be a slider
    range?: {
      min?: {
        label?: LabelType
      }
      max?: {
        label?: LabelType
      }
    }
  }
}

export interface EnumNumberInputType extends BaseInputType {
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

export interface NumbersArrayInputType extends BaseInputType {
  type:
    | z.ZodArray<z.ZodUnion<[z.ZodLiteral<number>, ...z.ZodLiteral<number>[]]>>
    | z.ZodOptional<
        z.ZodArray<
          z.ZodUnion<[z.ZodLiteral<number>, ...z.ZodLiteral<number>[]]>
        >
      >
  uiOptions?: {
    options?: Array<{
      value: number
      label?: LabelType
    }>
  }
}

export interface StringInputType extends BaseInputType {
  type: z.ZodOptional<z.ZodString> | z.ZodString
  uiOptions?: {
    options?: Array<{
      value: string
      label?: LabelType
    }>
  }
}

export interface EnumStringInputType extends BaseInputType {
  type:
    | z.ZodUnion<[z.ZodLiteral<string>, ...z.ZodLiteral<string>[]]>
    | z.ZodOptional<
        z.ZodUnion<[z.ZodLiteral<string>, ...z.ZodLiteral<string>[]]>
      >
  uiOptions?: {
    options?: Array<{
      value: string
      label?: LabelType
    }>
  }
}

export interface StringsArrayInputType extends BaseInputType {
  type:
    | z.ZodArray<z.ZodUnion<[z.ZodLiteral<string>, ...z.ZodLiteral<string>[]]>>
    | z.ZodOptional<
        z.ZodArray<
          z.ZodUnion<[z.ZodLiteral<string>, ...z.ZodLiteral<string>[]]>
        >
      >
  uiOptions?: {
    options?: Array<{
      value: string
      label?: LabelType
    }>
  }
}

export type ScoreInputType =
  | BooleanInputType
  | StringsArrayInputType
  | StringInputType
  | DateInputType
  | NumbersArrayInputType
  | SimpleNumberInputType
  | EnumNumberInputType
  | EnumStringInputType

export type ScoreInputSchemaType = Record<string, ScoreInputType>
