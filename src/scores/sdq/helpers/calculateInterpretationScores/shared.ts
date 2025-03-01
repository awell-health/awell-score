import {
  type ThreeBandCategoriationTableType,
  type FourBandCategoriationTableType,
  type VersionType,
  type SubscaleIdType,
  type BoundariesType,
  TRANSLATION_TABLE_CATEGORIES,
} from '../../definition'

const findCategoryBasedOnScore = (
  listOfCategories: Record<string, BoundariesType>,
  score: number | null,
) =>
  Object.keys(listOfCategories).find(category => {
    const lowerBoundary = listOfCategories[category][0]
    const upperBoundary = listOfCategories[category][1]

    if (score === null) {
      return false
    }

    return score >= lowerBoundary && score <= upperBoundary
  })

export const categorisation_fn = ({
  subscaleId,
  type,
  categorisationTable,
  score,
}: {
  subscaleId: SubscaleIdType
  type: VersionType
  categorisationTable:
    | ThreeBandCategoriationTableType
    | FourBandCategoriationTableType
  score: number | null
}): string | null => {
  const catTypeTable = categorisationTable[type]
  const subscaleCategorisationTable = catTypeTable[subscaleId]
  const category = findCategoryBasedOnScore(subscaleCategorisationTable, score)

  if (category === undefined) {
    return null
  }

  // @ts-expect-error to do
  return TRANSLATION_TABLE_CATEGORIES[category]
}
