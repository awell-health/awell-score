import { ScoreType } from '../../types'
import {
  FSFI_INPUTS,
  FSFI_OUTPUT,
  interpretFSFIScore,
} from './definition'
import { calculateDomainScore } from './helpers/calculate_domain_scores'
import { round } from 'lodash'

export const fsfi: ScoreType<typeof FSFI_INPUTS, typeof FSFI_OUTPUT> = {
  name: 'Female Sexual Function Index (FSFI)',
  readmeLocation: __dirname,
  inputSchema: FSFI_INPUTS,
  outputSchema: FSFI_OUTPUT,
  calculate: ({ data }) => {
    // Calculate domain scores
    const desireScore = calculateDomainScore(data, 'DESIRE')
    const arousalScore = calculateDomainScore(data, 'AROUSAL')
    const lubricationScore = calculateDomainScore(data, 'LUBRICATION')
    const orgasmScore = calculateDomainScore(data, 'ORGASM')
    const satisfactionScore = calculateDomainScore(data, 'SATISFACTION')
    const painScore = calculateDomainScore(data, 'PAIN')
    
    // Calculate total score only if all domain scores are present
    const allDomainsPresent = [
      desireScore,
      arousalScore,
      lubricationScore,
      orgasmScore,
      satisfactionScore,
      painScore,
    ].every(score => score !== null)
    
    const totalScore = allDomainsPresent
      ? round(
          desireScore! + arousalScore! + lubricationScore! + 
          orgasmScore! + satisfactionScore! + painScore!,
          1
        )
      : null
    
    // Get clinical interpretation
    const interpretation = interpretFSFIScore(totalScore)
    
    return {
      FSFI_DESIRE_SCORE: desireScore,
      FSFI_AROUSAL_SCORE: arousalScore,
      FSFI_LUBRICATION_SCORE: lubricationScore,
      FSFI_ORGASM_SCORE: orgasmScore,
      FSFI_SATISFACTION_SCORE: satisfactionScore,
      FSFI_PAIN_SCORE: painScore,
      FSFI_TOTAL_SCORE: totalScore,
      FSFI_INTERPRETATION: interpretation,
    }
  },
}
