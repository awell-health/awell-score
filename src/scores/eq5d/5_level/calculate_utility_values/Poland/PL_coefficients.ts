/**
 * Polish EQ-5D-5L value set coefficients
 * Hybrid model cTTO + DCE (EQ-VT)
 *
 * Coefficients sourced from the official STATA syntax for the
 * Polish value set and verified against Table 2 (Final model) of:
 *
 * Golicki D, Jakubczyk M, Graczyk K, Niewada M.
 * Valuation of EQ-5D-5L Health States in Poland.
 * Pharmacoeconomics. 2019;37(9):1165–1176.
 * https://pmc.ncbi.nlm.nih.gov/articles/PMC6830402/
 */

type DimensionPenalties = Record<2 | 3 | 4 | 5, number>

export const PL_PENALTIES: Record<string, DimensionPenalties> = {
  MO: { 2: 0.025, 3: 0.034, 4: 0.126, 5: 0.314 },
  SC: { 2: 0.031, 3: 0.047, 4: 0.111, 5: 0.264 },
  UA: { 2: 0.023, 3: 0.040, 4: 0.097, 5: 0.205 },
  PD: { 2: 0.030, 3: 0.050, 4: 0.261, 5: 0.575 },
  AD: { 2: 0.018, 3: 0.029, 4: 0.108, 5: 0.232 },
}
