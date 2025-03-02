/**
 * 20 or less is not clinically significant
 * 20 to 49 indicates mild toxicity
 * 50 to 99 indicates moderate toxicity
 * 100 and above indicates severe toxicity
 */
export const interpretScore = (totalScore: number): string => {
  if (totalScore <= 20) {
    return 'Clinically not signifcant / optimal'
  }

  if (totalScore > 20 && totalScore < 50) {
    return 'Mild toxicity'
  }

  if (totalScore >= 50 && totalScore < 100) {
    return 'Moderate toxicity'
  }

  return 'Severe toxicity'
}
