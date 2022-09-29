import type { RescalingTableType } from '../../../../../types/calculations/subscales/custom/KCCQ12.types'

/**
 * Responses from the Symptom Frequency domain are first rescaled
 * Q2 rescaled = 100 × (Q2 response – 1) ÷ 4
 * Q3 rescaled = 100 × (Q3 response – 1) ÷ 6
 * Q4 rescaled = 100 × (Q4 response – 1) ÷ 6
 * Q5 rescaled = 100 × (Q5 response – 1) ÷ 4
 */
export const SF_RESCALING_WEIGHT_TABLE: RescalingTableType = {
  KCCQ12_Q2: 4,
  KCCQ12_Q3: 6,
  KCCQ12_Q4: 6,
  KCCQ12_Q5: 4,
}
