export type SubscaleType = 'PAIN' | 'DISABILITY'

export const SPADI_SUBSCALES: Record<SubscaleType, string[]> = {
  PAIN: ['Q01', 'Q02', 'Q03', 'Q04', 'Q05'],
  DISABILITY: ['Q06', 'Q07', 'Q08', 'Q09', 'Q10', 'Q11', 'Q12', 'Q13'],
}
