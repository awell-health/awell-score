import type {
  CalculatedStatusType,
  MissingStatusType,
  NotApplicableStatusType,
} from '../types/calculations.types'

export type MissingScoreType = 'Missing'
export type NotApplicableScoreType = 'Not applicable'

export const MISSING_MESSAGE: MissingScoreType = 'Missing'
export const NOT_APPLICABLE_MESSAGE: NotApplicableScoreType = 'Not applicable'

export const CALCULATED_STATUS: CalculatedStatusType = 'CALCULATED'
export const MISSING_STATUS: MissingStatusType = 'MISSING'
export const NOT_APPLICABLE_STATUS: NotApplicableStatusType = 'NOT APPLICABLE'

export const MISSING_SCORE = undefined
export const NOT_APPLICBALE_SCORE = undefined
