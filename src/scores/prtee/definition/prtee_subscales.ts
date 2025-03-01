export type SubscaleType = 'PAIN' | 'FUNCTION'

export const PRTEE_SUBSCALES: Record<SubscaleType, string[]> = {
  PAIN: ['PAIN_Q01', 'PAIN_Q02', 'PAIN_Q03', 'PAIN_Q04', 'PAIN_Q05'],
  FUNCTION: [
    'FUNCTION_Q01',
    'FUNCTION_Q02',
    'FUNCTION_Q03',
    'FUNCTION_Q04',
    'FUNCTION_Q05',
    'FUNCTION_Q06',
    'FUNCTION_Q07',
    'FUNCTION_Q08',
    'FUNCTION_Q09',
    'FUNCTION_Q10',
  ],
}
