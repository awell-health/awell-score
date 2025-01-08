export enum RiskClassification {
  LOW_RISK = 'Low risk',
  MEDIUM_RISK = 'Medium risk',
  HIGH_RISK = 'High risk',
}

export const classifyRisk = ({
  totalScore,
  subscaleScore,
}: {
  totalScore: number
  subscaleScore: number
}): RiskClassification => {
  const TOTAL_SCORE_CUT_OFF = 3
  const SUBSCALE_SCORE_CUT_OFF = 3

  if (totalScore <= TOTAL_SCORE_CUT_OFF) {
    return RiskClassification.LOW_RISK
  }

  if (
    totalScore > TOTAL_SCORE_CUT_OFF &&
    subscaleScore <= SUBSCALE_SCORE_CUT_OFF
  ) {
    return RiskClassification.MEDIUM_RISK
  }

  return RiskClassification.HIGH_RISK
}
