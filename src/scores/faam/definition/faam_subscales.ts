export type SubscaleType = 'ADL' | 'SPORTS'

export const FAAM_SUBSCALES: Record<
  SubscaleType,
  { inputs: string[]; minRequiredAnswers: number }
> = {
  ADL: {
    inputs: [
      'ADL_Q01',
      'ADL_Q02',
      'ADL_Q03',
      'ADL_Q04',
      'ADL_Q05',
      'ADL_Q06',
      'ADL_Q07',
      'ADL_Q08',
      'ADL_Q09',
      'ADL_Q10',
      'ADL_Q11',
      'ADL_Q12',
      'ADL_Q13',
      'ADL_Q14',
      'ADL_Q15',
      'ADL_Q16',
      'ADL_Q17',
      'ADL_Q18',
      'ADL_Q19',
      'ADL_Q20',
      'ADL_Q21',
    ],
    minRequiredAnswers: 20,
  },
  SPORTS: {
    inputs: [
      'SPORTS_Q01',
      'SPORTS_Q02',
      'SPORTS_Q03',
      'SPORTS_Q04',
      'SPORTS_Q05',
      'SPORTS_Q06',
      'SPORTS_Q07',
    ],
    minRequiredAnswers: 6,
  },
}
