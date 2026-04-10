import { isNil, mean, round, sum } from 'lodash'

/**
 * BODY-Q missing data rule: if less than 50% of a scale's items are missing,
 * impute missing values with the mean of the completed items, then sum and
 * look up the Rasch-transformed score in the conversion table.
 *
 * Returns null when ≥50% of items are missing.
 */
export const calculateRaschScore = (
  values: (number | undefined | null)[],
  conversionTable: Record<number, number>,
): number | null => {
  const nonMissing = values.filter((v): v is number => !isNil(v))
  const totalItems = values.length
  const missingCount = totalItems - nonMissing.length

  if (missingCount >= totalItems / 2) return null

  const completedMean = mean(nonMissing)
  const imputedValues = values.map(v => (isNil(v) ? completedMean : v))
  const rawSum = round(sum(imputedValues))

  const keys = Object.keys(conversionTable)
    .map(Number)
    .sort((a, b) => a - b)
  const clampedSum = Math.max(keys[0], Math.min(keys[keys.length - 1], rawSum))

  return conversionTable[clampedSum] ?? null
}
