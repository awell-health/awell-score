// @flow

export const cdr_score_algorithm = ({
  MEMORY,
  ORIENTATION,
  JUDGEMENT_AND_PROBLEM_SOLVING,
  COMMUNITY_AFFAIRS,
  HOME_AND_HOBBIES,
  PERSONAL_CARE
}: {|
  MEMORY: number,
  ORIENTATION: number,
  JUDGEMENT_AND_PROBLEM_SOLVING: number,
  COMMUNITY_AFFAIRS: number,
  HOME_AND_HOBBIES: number,
  PERSONAL_CARE: number
|}): number => {
  const SECONDARY_CATEGORY_SCORES = [
    ORIENTATION,
    JUDGEMENT_AND_PROBLEM_SOLVING,
    COMMUNITY_AFFAIRS,
    HOME_AND_HOBBIES,
    PERSONAL_CARE
  ]

  const countScores = (arr, target, comparator) =>
    arr.filter((score) => comparator(score, target)).length

  if (MEMORY === 0) {
    const impairmentCount = countScores(
      SECONDARY_CATEGORY_SCORES,
      0.5,
      (a, b) => a >= b
    )
    return impairmentCount >= 2 ? 0.5 : 0
  }

  if (MEMORY === 0.5) {
    const highScoreCount = countScores(
      SECONDARY_CATEGORY_SCORES,
      1,
      (a, b) => a >= b
    )
    return highScoreCount >= 3 ? 1 : 0.5
  }

  if (MEMORY >= 1) {
    const zeroScoreCount = countScores(
      SECONDARY_CATEGORY_SCORES,
      0,
      (a, b) => a === b
    )
    if (zeroScoreCount > SECONDARY_CATEGORY_SCORES.length / 2) return 0.5

    const scoreObjects = SECONDARY_CATEGORY_SCORES.map((score, index) => ({
      score,
      category_indexes: [index],
      score_diff_with_memory: Math.abs(score - MEMORY),
      direction:
        // eslint-disable-next-line no-nested-ternary
        score === MEMORY ? 'equal' : score > MEMORY ? 'higher' : 'lower'
    }))

    const secondaryScoreGroups = scoreObjects.reduce((acc, obj) => {
      const existing = acc.find((item) => item.score === obj.score)
      if (existing) {
        existing.category_indexes.push(...obj.category_indexes)
      } else {
        acc.push({
          score: obj.score,
          category_indexes: obj.category_indexes,
          score_diff_with_memory: obj.score_diff_with_memory,
          direction: obj.direction
        })
      }

      return acc
    }, [])

    const greaterOrLessThanMemoryCount = countScores(
      SECONDARY_CATEGORY_SCORES,
      MEMORY,
      (a, b) => a !== b
    )

    const sameAsMemoryCount = countScores(
      SECONDARY_CATEGORY_SCORES,
      MEMORY,
      (a, b) => a === b
    )
    /**
     * ≥3 secondary categories have the same score as M
     */
    if (sameAsMemoryCount >= 3) return MEMORY

    if (sameAsMemoryCount >= 1 && sameAsMemoryCount <= 2) {
      const greaterThanMemoryCount =
        countScores(SECONDARY_CATEGORY_SCORES, MEMORY, (a, b) => a > b) <= 2
      const lessThanMemoryCount =
        countScores(SECONDARY_CATEGORY_SCORES, MEMORY, (a, b) => a < b) <= 2

      if (greaterThanMemoryCount && lessThanMemoryCount) return MEMORY
    }

    /**
     * ≥3 secondary categories have scores greater or less than memory
     */
    if (greaterOrLessThanMemoryCount >= 3) {
      const greaterThanMemory = countScores(
        SECONDARY_CATEGORY_SCORES,
        MEMORY,
        (a, b) => a > b
      )

      const lessThanMemory = countScores(
        SECONDARY_CATEGORY_SCORES,
        MEMORY,
        (a, b) => a < b
      )

      /**
       * 3 secondary categories are scored on one side of M and 2 are scored on the other
       */
      if (greaterThanMemory === 3 && lessThanMemory === 2) return MEMORY
      if (lessThanMemory === 3 && greaterThanMemory === 2) return MEMORY

      /**
       * When there are more secondary categories scored higher than memory
       */
      if (greaterThanMemory > lessThanMemory) {
        // Find all objects where the score is higher than MEMORY
        const greaterThanMemoryObjects = secondaryScoreGroups.filter(
          (obj) => obj.direction === 'higher'
        )

        // Determine the maximum length of category indexes
        const maxLength = Math.max(
          ...greaterThanMemoryObjects.map((obj) => obj.category_indexes.length)
        )

        // Filter the objects to get those with the maximum length of category indexes
        const objectsWithMaxCategoryIndexes = greaterThanMemoryObjects.filter(
          (obj) => obj.category_indexes.length === maxLength
        )

        // Pick the object with the smallest diff with MEMORY, if there are multiple objects
        const selectedCategory = objectsWithMaxCategoryIndexes.reduce(
          (prev, curr) =>
            curr.score_diff_with_memory < prev.score_diff_with_memory
              ? curr
              : prev
        )

        return selectedCategory.score
      }

      /**
       * When there are more secondary categories scored lower than memory
       */
      if (lessThanMemory > greaterThanMemory) {
        // Find all objects where the score is higher than MEMORY
        const lesserThanMemoryObjects = secondaryScoreGroups.filter(
          (obj) => obj.direction === 'lower'
        )

        // Determine the maximum length of category indexes
        const maxLength = Math.max(
          ...lesserThanMemoryObjects.map((obj) => obj.category_indexes.length)
        )

        // Filter the objects to get those with the maximum length of category indexes
        const objectsWithMaxCategoryIndexes = lesserThanMemoryObjects.filter(
          (obj) => obj.category_indexes.length === maxLength
        )

        // Pick the object with the smallest diff with MEMORY, if there are multiple objects
        const selectedCategory = objectsWithMaxCategoryIndexes.reduce(
          (prev, curr) =>
            curr.score_diff_with_memory < prev.score_diff_with_memory
              ? curr
              : prev
        )

        return selectedCategory.score
      }
    }
  }

  // Should never get to this point
  return 999
}
