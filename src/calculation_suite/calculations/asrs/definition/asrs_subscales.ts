export type SubscaleType =
  | 'INATTENTIVE_SUBSCALE'
  | 'HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR'
  | 'HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL'

export const ASRS_SUBSCALES: { [key in SubscaleType]: string[] } = {
  INATTENTIVE_SUBSCALE: [
    'Q01',
    'Q02',
    'Q03',
    'Q04',
    'Q07',
    'Q08',
    'Q09',
    'Q10',
    'Q11',
  ],
  HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR: ['Q05', 'Q06', 'Q12', 'Q13', 'Q14'],
  HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL: ['Q15', 'Q16', 'Q17', 'Q18'],
}
