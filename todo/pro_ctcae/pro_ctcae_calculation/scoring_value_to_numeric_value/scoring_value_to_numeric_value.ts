export const scoring_value_to_numeric_value = (
  scoring_value_string = ''
): number | undefined => {
  const [score] = scoring_value_string.match(/\(\d\)$/) || []
  return typeof score === 'string'
    ? Number(score.replace(/[()]/g, ''))
    : undefined
}
