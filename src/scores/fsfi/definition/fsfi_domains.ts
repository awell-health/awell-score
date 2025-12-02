export const FSFI_DOMAINS = {
  DESIRE: {
    items: ['FSFI_Q01', 'FSFI_Q02'],
    factor: 0.6,
    minScore: 1.2,
    maxScore: 6.0,
  },
  AROUSAL: {
    items: ['FSFI_Q03', 'FSFI_Q04', 'FSFI_Q05', 'FSFI_Q06'],
    factor: 0.3,
    minScore: 0,
    maxScore: 6.0,
  },
  LUBRICATION: {
    items: ['FSFI_Q07', 'FSFI_Q08', 'FSFI_Q09', 'FSFI_Q10'],
    factor: 0.3,
    minScore: 0,
    maxScore: 6.0,
  },
  ORGASM: {
    items: ['FSFI_Q11', 'FSFI_Q12', 'FSFI_Q13'],
    factor: 0.4,
    minScore: 0,
    maxScore: 6.0,
  },
  SATISFACTION: {
    items: ['FSFI_Q14', 'FSFI_Q15', 'FSFI_Q16'],
    factor: 0.4,
    minScore: 0,
    maxScore: 6.0,
  },
  PAIN: {
    items: ['FSFI_Q17', 'FSFI_Q18', 'FSFI_Q19'],
    factor: 0.4,
    minScore: 0,
    maxScore: 6.0,
  },
} as const

export type DomainType = keyof typeof FSFI_DOMAINS

export const FSFI_TOTAL_SCORE_RANGE = {
  min: 2.0,
  max: 36.0,
} as const
