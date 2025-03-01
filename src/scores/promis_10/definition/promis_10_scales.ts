export type ScaleType = 'GLOBAL_PHYSICAL_HEALTH' | 'GLOBAL_MENTAL_HEALTH'

export const PROMIS_10_SCALES: Record<ScaleType, string[]> = {
  GLOBAL_PHYSICAL_HEALTH: [
    'PROMIS_10_Q03',
    'PROMIS_10_Q06',
    'PROMIS_10_Q07RC',
    'PROMIS_10_Q08R',
  ],
  GLOBAL_MENTAL_HEALTH: [
    'PROMIS_10_Q02',
    'PROMIS_10_Q04',
    'PROMIS_10_Q05',
    'PROMIS_10_Q10R',
  ],
}
