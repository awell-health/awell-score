import type { DefaultSubscaleType } from '../../../calculations.types'

export type TypeOfScaleType = 'functional' | 'symptoms' | 'global_health_status'

export type EORTCScaleType = DefaultSubscaleType & {
  scale_type: TypeOfScaleType
  item_range: number // Item range is the difference between the possible maximum and the minimum response. Necessary to compute the scaled score.
  raw_score?: number
  score_as?: 'functional' | 'symptoms'
}
