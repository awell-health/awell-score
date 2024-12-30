import type { DefaultSubscaleType } from '../../../calculations.types'

export type MeanFunctionSignature = (
  item_scores: Array<number>,
) => number | typeof undefined
export type MaxFunctionSignature = (
  item_scores: Array<number>,
) => number | typeof undefined
export type RawScoreFunctionSignature = (
  item_scores: Array<number>,
) => number | typeof undefined

/**
 * Domain is a synonym for subscale
 */
export type COMIDomainType = DefaultSubscaleType & {
  score_fn:
    | MeanFunctionSignature
    | MaxFunctionSignature
    | RawScoreFunctionSignature
}
