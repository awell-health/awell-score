export type DomainType = 'UI' | 'UIO' | 'BOW' | 'SEX' | 'HOR'

export const Epic26Domains: Record<
  DomainType,
  { inputs: string[]; nbrNonMissing: number }
> = {
  UI: {
    inputs: ['EPIC26_Q01', 'EPIC26_Q02', 'EPIC26_Q03', 'EPIC26_Q04a'],
    nbrNonMissing: 4,
  },
  UIO: {
    inputs: ['EPIC26_Q04b', 'EPIC26_Q04c', 'EPIC26_Q04d', 'EPIC26_Q04e'],
    nbrNonMissing: 4,
  },
  BOW: {
    inputs: [
      'EPIC26_Q06a',
      'EPIC26_Q06b',
      'EPIC26_Q06c',
      'EPIC26_Q06d',
      'EPIC26_Q06e',
      'EPIC26_Q07',
    ],
    nbrNonMissing: 5,
  },
  SEX: {
    inputs: [
      'EPIC26_Q08a',
      'EPIC26_Q08b',
      'EPIC26_Q09',
      'EPIC26_Q10',
      'EPIC26_Q11',
      'EPIC26_Q12',
    ],
    nbrNonMissing: 5,
  },
  HOR: {
    inputs: [
      'EPIC26_Q13a',
      'EPIC26_Q13b',
      'EPIC26_Q13c',
      'EPIC26_Q13d',
      'EPIC26_Q13e',
    ],
    nbrNonMissing: 4,
  },
}
