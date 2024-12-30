export type SubscaleType =
  | 'PHYSICAL_SUBSCALE'
  | 'PSYCHOLOGICAL_APPEARANCE_SUBSCALE'
  | 'PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE'
  | 'TOTAL_SCORE'

export const ACRO_SUBSCALES: Record<SubscaleType, string[]> = {
  PHYSICAL_SUBSCALE: ['Q01', 'Q03', 'Q09', 'Q13', 'Q14', 'Q15', 'Q19', 'Q22'],
  PSYCHOLOGICAL_APPEARANCE_SUBSCALE: [
    'Q02',
    'Q04',
    'Q07',
    'Q11',
    'Q12',
    'Q16',
    'Q17',
  ],
  PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE: [
    'Q05',
    'Q06',
    'Q08',
    'Q10',
    'Q18',
    'Q20',
    'Q21',
  ],
  TOTAL_SCORE: [
    'Q01',
    'Q02',
    'Q03',
    'Q04',
    'Q05',
    'Q06',
    'Q07',
    'Q08',
    'Q09',
    'Q10',
    'Q11',
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
  ],
}
