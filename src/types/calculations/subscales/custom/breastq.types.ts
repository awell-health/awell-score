import type { DefaultSubscaleType } from '../../../calculations.types'

type RawScore = string
type TransformedScore = number

export type BreastQConversionTableType = Record<RawScore, TransformedScore>

export type BreastQScaleType = DefaultSubscaleType & {
  conversion_table: BreastQConversionTableType
  recode?: Record<string, number>
}
