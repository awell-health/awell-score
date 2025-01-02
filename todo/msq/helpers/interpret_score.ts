/**
 * 20 or less is not clinically significant
 * 20 to 49 indicates mild toxicity
 * 50 to 99 indicates moderate toxicity
 * 100 and above indicates severe toxicity
 */
export const interpret_score = (total_score: number): string => {
  if (total_score <= 20) {
    return 'Clinically not signifcant / optimal'
  }

  if (total_score > 20 && total_score < 50) {
    return 'Mild toxicity'
  }

  if (total_score >= 50 && total_score < 100) {
    return 'Moderate toxicity'
  }

  return 'Severe toxicity'
}
