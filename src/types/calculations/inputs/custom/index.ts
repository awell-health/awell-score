import type { ASRSInputType } from './asrs.types'
import type { OMPQInputType } from './ompq.types'
import type { PRO2InputType } from './pro2.types'

export type CustomInputType = OMPQInputType | PRO2InputType | ASRSInputType

export type CustomInputsType =
  | OMPQInputType[]
  | PRO2InputType[]
  | ASRSInputType[]
