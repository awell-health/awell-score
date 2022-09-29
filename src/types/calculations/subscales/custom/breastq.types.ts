import type { DefaultSubscaleType } from '../../../calculations.types'

type RawScore = string
type TransformedScore = number

export type BreastQConversionTableType = {
  [key in RawScore]: TransformedScore
}

export type BreastQScaleType = DefaultSubscaleType & {
  conversion_table: BreastQConversionTableType
  recode?: {
    [key in string]: number
  }
}
