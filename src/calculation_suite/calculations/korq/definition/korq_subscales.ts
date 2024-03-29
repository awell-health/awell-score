export type SubscaleType = 'KORQ_SYMPTOMS' | 'KORQ_ACTIVITY_LIMITATIONS'

export const KORQ_SUBSCALES: Record<SubscaleType, string[]> = {
  KORQ_ACTIVITY_LIMITATIONS: [
    'Q01_KORQ',
    'Q02_KORQ',
    'Q03_KORQ',
    'Q04_KORQ',
    'Q05_KORQ',
    'Q06_KORQ',
    'Q07_KORQ',
    'Q08_KORQ',
    'Q09_KORQ',
    'Q10_KORQ',
    'Q11_KORQ',
    'Q12_KORQ',
    'Q13_KORQ',
    'Q14_KORQ',
    'Q15_KORQ',
    'Q16_KORQ',
    'Q17_KORQ',
    'Q18_KORQ',
  ],
  KORQ_SYMPTOMS: [
    'Q19_KORQ',
    'Q20_KORQ',
    'Q21_KORQ',
    'Q22_KORQ',
    'Q23_KORQ',
    'Q24_KORQ',
    'Q25_KORQ',
    'Q26_KORQ',
    'Q27_KORQ',
    'Q28_KORQ',
    'Q29_KORQ',
  ],
}
