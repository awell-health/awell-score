export const fsfi_test_responses = {
  // Best functioning scenario (all best answers = highest scores)
  best_functioning: {
    FSFI_Q01: 5, // Always desire (5=best)
    FSFI_Q02: 5, // Very high desire (5=best)
    FSFI_Q03: 5, // Always aroused (5=best)
    FSFI_Q04: 5, // Very high arousal (5=best)
    FSFI_Q05: 5, // Very high confidence (5=best)
    FSFI_Q06: 5, // Always satisfied with arousal (5=best)
    FSFI_Q07: 5, // Always lubricated (5=best)
    FSFI_Q08: 5, // Not difficult to lubricate (5=best)
    FSFI_Q09: 5, // Always maintain lubrication (5=best)
    FSFI_Q10: 5, // Not difficult to maintain lubrication (5=best)
    FSFI_Q11: 5, // Always reach orgasm (5=best)
    FSFI_Q12: 5, // Not difficult to reach orgasm (5=best)
    FSFI_Q13: 5, // Very satisfied with orgasm (5=best)
    FSFI_Q14: 5, // Very satisfied with emotional closeness (5=best)
    FSFI_Q15: 5, // Very satisfied with sexual relationship (5=best)
    FSFI_Q16: 5, // Very satisfied with overall sexual life (5=best)
    FSFI_Q17: 5, // Never experience pain during penetration (5=best)
    FSFI_Q18: 5, // Never experience pain following penetration (5=best)
    FSFI_Q19: 5, // Very low or no pain (5=best)
  },
  
  // Worst functioning scenario (all worst answers = lowest scores)
  worst_functioning: {
    FSFI_Q01: 1, // Never desire (1=worst)
    FSFI_Q02: 1, // Very low desire (1=worst)
    FSFI_Q03: 1, // Never aroused (1=worst)
    FSFI_Q04: 1, // Very low arousal (1=worst)
    FSFI_Q05: 1, // Very low confidence (1=worst)
    FSFI_Q06: 1, // Never satisfied with arousal (1=worst)
    FSFI_Q07: 1, // Never lubricated (1=worst)
    FSFI_Q08: 1, // Extremely difficult to lubricate (1=worst)
    FSFI_Q09: 1, // Never maintain lubrication (1=worst)
    FSFI_Q10: 1, // Extremely difficult to maintain lubrication (1=worst)
    FSFI_Q11: 1, // Never reach orgasm (1=worst)
    FSFI_Q12: 1, // Extremely difficult to reach orgasm (1=worst)
    FSFI_Q13: 1, // Very dissatisfied with orgasm (1=worst)
    FSFI_Q14: 1, // Very dissatisfied with emotional closeness (1=worst)
    FSFI_Q15: 1, // Very dissatisfied with sexual relationship (1=worst)
    FSFI_Q16: 1, // Very dissatisfied with overall sexual life (1=worst)
    FSFI_Q17: 1, // Always experience pain during penetration (1=worst)
    FSFI_Q18: 1, // Always experience pain following penetration (1=worst)
    FSFI_Q19: 1, // Very high pain (1=worst)
  },
  
  // No sexual activity scenario
  no_sexual_activity: {
    FSFI_Q01: 3, // Some desire
    FSFI_Q02: 3, // Moderate desire
    FSFI_Q03: 0, // No sexual activity
    FSFI_Q04: 0, // No sexual activity
    FSFI_Q05: 0, // No sexual activity
    FSFI_Q06: 0, // No sexual activity
    FSFI_Q07: 0, // No sexual activity
    FSFI_Q08: 0, // No sexual activity
    FSFI_Q09: 0, // No sexual activity
    FSFI_Q10: 0, // No sexual activity
    FSFI_Q11: 0, // No sexual activity
    FSFI_Q12: 0, // No sexual activity
    FSFI_Q13: 0, // No sexual activity
    FSFI_Q14: 0, // No sexual activity
    FSFI_Q15: 3, // Moderate satisfaction with relationship
    FSFI_Q16: 3, // Moderate satisfaction with sexual life
    FSFI_Q17: 0, // Did not attempt intercourse
    FSFI_Q18: 0, // Did not attempt intercourse
    FSFI_Q19: 0, // Did not attempt intercourse
  },
  
  // Mixed scores scenario (around clinical cutoff)
  mixed_scores: {
    FSFI_Q01: 3, // Sometimes desire
    FSFI_Q02: 3, // Moderate desire
    FSFI_Q03: 4, // Most times aroused
    FSFI_Q04: 3, // Moderate arousal
    FSFI_Q05: 3, // Moderate confidence
    FSFI_Q06: 3, // Sometimes satisfied with arousal
    FSFI_Q07: 3, // Sometimes lubricated
    FSFI_Q08: 3, // Difficult to lubricate
    FSFI_Q09: 3, // Sometimes maintain lubrication
    FSFI_Q10: 3, // Difficult to maintain lubrication
    FSFI_Q11: 2, // Few times reach orgasm
    FSFI_Q12: 2, // Very difficult to reach orgasm
    FSFI_Q13: 2, // Moderately dissatisfied with orgasm
    FSFI_Q14: 3, // Equally satisfied/dissatisfied with closeness
    FSFI_Q15: 3, // Equally satisfied/dissatisfied with relationship
    FSFI_Q16: 2, // Moderately dissatisfied with sexual life
    FSFI_Q17: 3, // Sometimes experience pain
    FSFI_Q18: 3, // Sometimes experience pain
    FSFI_Q19: 3, // Moderate pain
  },
  
  // High functioning scenario (above clinical cutoff)
  high_functioning: {
    FSFI_Q01: 4, // Most times desire
    FSFI_Q02: 4, // High desire
    FSFI_Q03: 4, // Most times aroused
    FSFI_Q04: 4, // High arousal
    FSFI_Q05: 4, // High confidence
    FSFI_Q06: 4, // Most times satisfied with arousal
    FSFI_Q07: 4, // Most times lubricated
    FSFI_Q08: 4, // Slightly difficult to lubricate
    FSFI_Q09: 4, // Most times maintain lubrication
    FSFI_Q10: 4, // Slightly difficult to maintain lubrication
    FSFI_Q11: 4, // Most times reach orgasm
    FSFI_Q12: 4, // Slightly difficult to reach orgasm
    FSFI_Q13: 4, // Moderately satisfied with orgasm
    FSFI_Q14: 4, // Moderately satisfied with closeness
    FSFI_Q15: 4, // Moderately satisfied with relationship
    FSFI_Q16: 4, // Moderately satisfied with sexual life
    FSFI_Q17: 4, // Few times experience pain
    FSFI_Q18: 4, // Few times experience pain
    FSFI_Q19: 4, // Low pain
  },
  
  // Edge case: Partial no sexual activity (mixed domains)
  partial_no_activity: {
    FSFI_Q01: 2, // A few times desire
    FSFI_Q02: 2, // Low desire
    FSFI_Q03: 3, // Sometimes aroused
    FSFI_Q04: 3, // Moderate arousal
    FSFI_Q05: 2, // Low confidence
    FSFI_Q06: 2, // Few times satisfied with arousal
    FSFI_Q07: 0, // No sexual activity (lubrication domain starts with 0s)
    FSFI_Q08: 0, // No sexual activity
    FSFI_Q09: 0, // No sexual activity
    FSFI_Q10: 0, // No sexual activity
    FSFI_Q11: 2, // Few times reach orgasm
    FSFI_Q12: 3, // Difficult to reach orgasm
    FSFI_Q13: 2, // Moderately dissatisfied with orgasm
    FSFI_Q14: 3, // Equally satisfied/dissatisfied with closeness
    FSFI_Q15: 2, // Moderately dissatisfied with relationship
    FSFI_Q16: 2, // Moderately dissatisfied with sexual life
    FSFI_Q17: 0, // Did not attempt intercourse
    FSFI_Q18: 0, // Did not attempt intercourse
    FSFI_Q19: 0, // Did not attempt intercourse
  },
}
