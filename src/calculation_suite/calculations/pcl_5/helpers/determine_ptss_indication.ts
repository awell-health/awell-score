import R from 'ramda'

import type { InputType } from '../../../../types/calculations.types'
import { get_valid_values } from '../../../helper_functions/calculation_variants/simple_calculation'
import { CLUSTERS } from '../definition/pcl_5_clusters'
import { MODERATELY_ANSWER } from '../definition/pcl_5_inputs'
/**
 * A provisional PTSD diagnosis can be made by treating each item rated as
 * 2 = "Moderately" or higher as a symptom endorsed, then following the DSM-5 diagnostic rule which
 * requires at least: 1 B item (questions 1-5), 1 C item (questions 6-7), 2 D items (questions 8-14), 2 E items (questions 15-20).
 */
export const determine_ptss_indication = (
  pcl5_inputs_with_answers: Array<InputType>
): 0 | 1 => {
  //@ts-expect-error to do
  const nbr_of_moderate_or_higher_answers_per_cluster = R.map(cluster => {
    const valid_answers_in_cluster = R.compose(
      //@ts-expect-error to do
      inputs => get_valid_values(inputs),
      R.filter(({ input_id }: InputType) => cluster.includes(input_id))
    )(pcl5_inputs_with_answers)

    const nbr_of_moderate_or_higher_answers = valid_answers_in_cluster.filter(
      answer => answer >= MODERATELY_ANSWER
    ).length

    return nbr_of_moderate_or_higher_answers
  }, CLUSTERS)

  if (
    //@ts-expect-error to do
    nbr_of_moderate_or_higher_answers_per_cluster.B >= 1 &&
    //@ts-expect-error to do
    nbr_of_moderate_or_higher_answers_per_cluster.C >= 1 &&
    //@ts-expect-error to do
    nbr_of_moderate_or_higher_answers_per_cluster.D >= 2 &&
    //@ts-expect-error to do
    nbr_of_moderate_or_higher_answers_per_cluster.E >= 2
  )
    return 1

  return 0
}
