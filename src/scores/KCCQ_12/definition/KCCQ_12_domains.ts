import { mean } from 'lodash'

export type KCCQ12DomainType =
  | 'KCCQ12-PL'
  | 'KCCQ12-SF'
  | 'KCCQ12-QL'
  | 'KCCQ12-SL'

const defaultDomainScoreFormula = (inputs: number[]) => {
  const meanScore = mean(inputs)
  return (100 * (meanScore - 1)) / 4
}

export const KCCQ_12_DOMAINS: Record<
  KCCQ12DomainType,
  {
    inputIds: string[]
    minAnswersNeededToComputeScore: number
    answerTreatedAsMissingValue?: number
    formula: (answers: number[]) => number
  }
> = {
  'KCCQ12-PL': {
    inputIds: ['KCCQ12_Q1_A', 'KCCQ12_Q1_B', 'KCCQ12_Q1_C'],
    minAnswersNeededToComputeScore: 1,
    answerTreatedAsMissingValue: 6,
    formula: defaultDomainScoreFormula,
  },
  'KCCQ12-SF': {
    inputIds: ['KCCQ12_Q2', 'KCCQ12_Q3', 'KCCQ12_Q4', 'KCCQ12_Q5'],
    minAnswersNeededToComputeScore: 1,
    formula: (inputs: number[]) => mean(inputs),
  },
  'KCCQ12-QL': {
    inputIds: ['KCCQ12_Q6', 'KCCQ12_Q7'],
    minAnswersNeededToComputeScore: 1,
    formula: defaultDomainScoreFormula,
  },
  'KCCQ12-SL': {
    inputIds: ['KCCQ12_Q8_A', 'KCCQ12_Q8_B', 'KCCQ12_Q8_C'],
    minAnswersNeededToComputeScore: 1,
    answerTreatedAsMissingValue: 6,
    formula: defaultDomainScoreFormula,
  },
}
