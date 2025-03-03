export type SubscaleType = 'S' | 'P' | 'ADL' | 'SP' | 'QOL'

export const HOOS_SUBSCALES: Record<SubscaleType, string[]> = {
  S: ['s1', 's2', 's3', 's4', 's5'],
  P: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10'],
  ADL: [
    'a1',
    'a2',
    'a3',
    'a4',
    'a5',
    'a6',
    'a7',
    'a8',
    'a9',
    'a10',
    'a11',
    'a12',
    'a13',
    'a14',
    'a15',
    'a16',
    'a17',
  ],
  SP: ['sp1', 'sp2', 'sp3', 'sp4'],
  QOL: ['q1', 'q2', 'q3', 'q4'],
}
