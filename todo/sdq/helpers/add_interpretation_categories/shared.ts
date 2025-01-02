import R from 'ramda'

import {
  type CategoriationTableType,
  TRANSLATION_TABLE_CATEGORIES,
} from '../../sdq_standards'

//@ts-expect-error to do
const find_category_based_on_score = (list_of_categories, score) =>
  Object.keys(list_of_categories).find(category => {
    const lower_boundary = list_of_categories[category][0]
    const upper_boundary = list_of_categories[category][1]

    return score >= lower_boundary && score <= upper_boundary
  })

export const categorisation_fn = ({
  subscale_id,
  type,
  categorisation_table,
  score,
}: {
  subscale_id: string
  type: 'PARENT_COMPLETED_SDQ' | 'TEACHER_COMPLETED_SDQ' | 'SELF_COMPLETED_SDQ'
  categorisation_table: CategoriationTableType
  score: any
}): string =>
  //@ts-expect-error to do
  R.compose(
    //@ts-expect-error to do
    category => TRANSLATION_TABLE_CATEGORIES[category],
    categories => find_category_based_on_score(categories, score),

    R.prop(subscale_id),
    R.prop(type)
  )(categorisation_table)
