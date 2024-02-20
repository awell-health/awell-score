// @flow

export type SubscaleType =
  | 'PHYSICAL_SUBSCALE'
  | 'COGNITIVE_SUBSCALE'
  | 'PSYCHOSOCIAL_SUBSCALE'

export const MFIS_SUBSCALES: {| [SubscaleType]: string[] |} = {
  PHYSICAL_SUBSCALE: [
    'Q04',
    'Q06',
    'Q07',
    'Q10',
    'Q13',
    'Q14',
    'Q17',
    'Q20',
    'Q21'
  ],
  COGNITIVE_SUBSCALE: [
    'Q01',
    'Q02',
    'Q03',
    'Q05',
    'Q11',
    'Q12',
    'Q15',
    'Q16',
    'Q18',
    'Q19'
  ],
  PSYCHOSOCIAL_SUBSCALE: ['Q08', 'Q09']
}
