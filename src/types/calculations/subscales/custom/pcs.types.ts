import type { DefaultSubscaleType } from '../../../calculations.types'

export type PcsScaleType = DefaultSubscaleType & {
  min_score: number
  median_score: number
  max_score: number
}
