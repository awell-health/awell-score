export type SubscaleType = 'FEAR' | 'DEPRESSION'

export const HADS_SUBSCALES: Record<SubscaleType, string[]> = {
  FEAR: [
    'HADS_01',
    'HADS_03',
    'HADS_05',
    'HADS_07',
    'HADS_09',
    'HADS_11',
    'HADS_13',
  ],
  DEPRESSION: [
    'HADS_02',
    'HADS_04',
    'HADS_06',
    'HADS_08',
    'HADS_10',
    'HADS_12',
    'HADS_14',
  ],
}
