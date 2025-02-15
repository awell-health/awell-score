export type SubscaleType =
  | 'CONSUMPTION'
  | 'DEPENDENCE'
  | 'ALCOHOL_RELATED_PROBLEMS'

export const AUDIT_SUBSCALES: Record<SubscaleType, string[]> = {
  CONSUMPTION: ['AUDIT_Q01', 'AUDIT_Q02', 'AUDIT_Q03'],
  DEPENDENCE: ['AUDIT_Q04', 'AUDIT_Q05', 'AUDIT_Q06'],
  ALCOHOL_RELATED_PROBLEMS: [
    'AUDIT_Q07',
    'AUDIT_Q08',
    'AUDIT_Q09',
    'AUDIT_Q10',
  ],
}
