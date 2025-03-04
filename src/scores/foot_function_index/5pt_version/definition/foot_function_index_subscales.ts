export type SubscaleType = 'LIMITATION' | 'PAIN' | 'DISABILITY'

export const FFI_SUBSCALES: Record<SubscaleType, string[]> = {
  LIMITATION: [
    'LIMITATION_Q01',
    'LIMITATION_Q02',
    'LIMITATION_Q03',
    'LIMITATION_Q04',
    'LIMITATION_Q05',
  ],
  PAIN: [
    'PAIN_Q01',
    'PAIN_Q02',
    'PAIN_Q03',
    'PAIN_Q04',
    'PAIN_Q05',
    'PAIN_Q06',
    'PAIN_Q07',
    'PAIN_Q08',
    'PAIN_Q09',
  ],
  DISABILITY: [
    'DISABILITY_Q01',
    'DISABILITY_Q02',
    'DISABILITY_Q03',
    'DISABILITY_Q04',
    'DISABILITY_Q05',
    'DISABILITY_Q06',
    'DISABILITY_Q07',
    'DISABILITY_Q08',
    'DISABILITY_Q09',
  ],
}
