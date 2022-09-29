export type DomainType =
  | 'ORTHOSTATIC_INTOLERANCE'
  | 'VASOMOTOR'
  | 'SECRETOMOTOR'
  | 'GASTROINTESTINAL'
  | 'BLADDER'
  | 'PUPILLOMOTOR'

export const COMPASS_31_DOMAINS: {
  [key in DomainType]: { items: string[]; weight: number }
} = {
  ORTHOSTATIC_INTOLERANCE: {
    items: ['Q01', 'Q02', 'Q03', 'Q04'],
    weight: 4,
  },
  VASOMOTOR: {
    items: ['Q05', 'Q06', 'Q07'],
    weight: 0.83333333,
  },
  SECRETOMOTOR: {
    items: ['Q08', 'Q09', 'Q10', 'Q11'],
    weight: 2.1428571,
  },
  GASTROINTESTINAL: {
    items: [
      'Q12',
      'Q13',
      'Q14',
      'Q15',
      'Q16',
      'Q17',
      'Q18',
      'Q19',
      'Q20',
      'Q21',
      'Q22',
      'Q23',
    ],
    weight: 0.8928571,
  },
  BLADDER: {
    items: ['Q24', 'Q25', 'Q26'],
    weight: 1.1111111,
  },
  PUPILLOMOTOR: {
    items: ['Q27', 'Q28', 'Q29', 'Q30', 'Q31'],
    weight: 0.3333333,
  },
}
