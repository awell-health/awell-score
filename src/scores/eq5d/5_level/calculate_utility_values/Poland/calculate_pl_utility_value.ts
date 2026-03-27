import { PL_PENALTIES } from './PL_coefficients'

const DIMENSIONS = ['MO', 'SC', 'UA', 'PD', 'AD'] as const

function getPenalty(dimension: string, level: number): number {
  if (level === 1) return 0
  const penalties = PL_PENALTIES[dimension]
  const penalty = penalties[level as 2 | 3 | 4 | 5]
  if (penalty === undefined)
    throw new Error(
      `Invalid level ${level} for dimension ${dimension}. Expected 1–5.`,
    )
  return penalty
}

export const calculate_pl_utility_value = (
  mo: number,
  sc: number,
  ua: number,
  pd: number,
  ad: number,
): number => {
  const levels = [mo, sc, ua, pd, ad]

  const totalPenalty = DIMENSIONS.reduce(
    (sum, dim, i) => sum + getPenalty(dim, levels[i]),
    0,
  )

  const utility = 1 - totalPenalty

  return Math.round(utility * 1000) / 1000
}
