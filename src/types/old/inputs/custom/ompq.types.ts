import type { InputType, MissingStatusType } from '../../../calculations.types'

export type OMPQInputType = InputType & {
  required?: boolean
  min_score: number
  max_score: number
  score?: number | MissingStatusType
}
