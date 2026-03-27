/**
 * Polish EQ-5D-5L value set coefficients (Golicki et al., 2019)
 * Bayesian hybrid model (TTO/DCE)
 *
 * Reference: Golicki D, Jakubczyk M, Graczyk K, Niewada M.
 * Valuation of EQ-5D-5L Health States in Poland.
 * Pharmacoeconomics. 2019;37(9):1165–1176.
 */

type DimensionPenalties = Record<2 | 3 | 4 | 5, number>

export const PL_PENALTIES: Record<string, DimensionPenalties> = {
  MO: { 2: 0.040, 3: 0.100, 4: 0.200, 5: 0.314 },
  SC: { 2: 0.030, 3: 0.080, 4: 0.180, 5: 0.264 },
  UA: { 2: 0.030, 3: 0.080, 4: 0.180, 5: 0.205 },
  PD: { 2: 0.040, 3: 0.100, 4: 0.210, 5: 0.575 },
  AD: { 2: 0.030, 3: 0.080, 4: 0.190, 5: 0.232 },
}

export const PL_CONSTANT_PENALTY = 0.047
