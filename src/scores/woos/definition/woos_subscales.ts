export type SubscaleType =
  | 'PHYSICAL_SYMPTOMS'
  | 'SPORTS_LEISURE_WORK'
  | 'LIFESTYLE'
  | 'EMOTIONS'

export const WOOS_SUBSCALES: Record<SubscaleType, string[]> = {
  PHYSICAL_SYMPTOMS: [
    'WOOS_1',
    'WOOS_2',
    'WOOS_3',
    'WOOS_4',
    'WOOS_5',
    'WOOS_6',
  ],
  SPORTS_LEISURE_WORK: [
    'WOOS_7',
    'WOOS_8',
    'WOOS_9',
    'WOOS_10',
    'WOOS_11',
  ],
  LIFESTYLE: [
    'WOOS_12',
    'WOOS_13',
    'WOOS_14',
    'WOOS_15',
    'WOOS_16',
  ],
  EMOTIONS: ['WOOS_17', 'WOOS_18', 'WOOS_19'],
}
