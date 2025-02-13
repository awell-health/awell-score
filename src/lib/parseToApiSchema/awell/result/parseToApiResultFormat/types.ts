import { type CodeType, type LabelType } from '../../../../../types'

export enum CalculationResultStatus {
  CALCULATED = 'CALCULATED',
  MISSING = 'MISSING',
}

export interface ApiResultType {
  subresult_id: string
  label: LabelType
  type: 'boolean' | 'string' | 'number'
  unit?: LabelType
  terminology?: {
    code: CodeType
  }
  result?: string | number | boolean
  status: CalculationResultStatus
  interpretation?: LabelType
}
