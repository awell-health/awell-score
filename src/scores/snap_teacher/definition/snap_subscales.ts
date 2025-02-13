export type SubscaleType =
  | 'INATTENTION_SUBSET'
  | 'HYPERACTIVITY_IMPULSIVITY_SUBSET'
  | 'OPPOSITION_DEFIANCE_SUBSET'

export const SNAP_SUBSCALES: Record<SubscaleType, string[]> = {
  INATTENTION_SUBSET: [
    'SNAP_Q01',
    'SNAP_Q02',
    'SNAP_Q03',
    'SNAP_Q04',
    'SNAP_Q05',
    'SNAP_Q06',
    'SNAP_Q07',
    'SNAP_Q08',
    'SNAP_Q09',
  ],
  HYPERACTIVITY_IMPULSIVITY_SUBSET: [
    'SNAP_Q10',
    'SNAP_Q11',
    'SNAP_Q12',
    'SNAP_Q13',
    'SNAP_Q14',
    'SNAP_Q15',
    'SNAP_Q16',
    'SNAP_Q17',
    'SNAP_Q18',
  ],
  OPPOSITION_DEFIANCE_SUBSET: [
    'SNAP_Q19',
    'SNAP_Q20',
    'SNAP_Q21',
    'SNAP_Q22',
    'SNAP_Q23',
    'SNAP_Q24',
    'SNAP_Q25',
    'SNAP_Q26',
  ],
}
