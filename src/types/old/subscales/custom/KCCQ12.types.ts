import type { DefaultSubscaleType } from '../../../calculations.types'

type DomainScoreFormula = (domain_answers: number[]) => number

export type RescalingTableType = Record<string, number>

export type RescalingFormula = (answer: number, weight: number) => number

/**
 * "Domain" is a synonym of "subscale"
 */
export type KCCQ12DomainType = DefaultSubscaleType & {
  answer_treated_as_missing_value?: number // Some answers are treated as a missing value for the purposes of scoring
  rescaling_table?: RescalingTableType
  rescaling_formula?: RescalingFormula
  domain_score_formula: DomainScoreFormula
}
