import R from 'ramda'

import type { InputType } from '../../../../types/calculations.types'
import { get_valid_values } from '../../../lib/calculation_variants/simple_calculation'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { CLUSTERS, type ClusterType } from '../definition/pcl_5_clusters'

export const calculate_cluster_scores = (
  pcl5_inputs_with_answers: Array<InputType>,
  cluster: ClusterType
): number | string => {
  const INPUT_IDS_NEEDED_FOR_SCORING = CLUSTERS[cluster]

  const valid_answers_on_inputs_needed_for_scoring = R.compose(
    //@ts-expect-error to do
    inputs => get_valid_values(inputs),
    R.filter(({ input_id }: InputType) =>
      INPUT_IDS_NEEDED_FOR_SCORING.includes(input_id)
    )
  )(pcl5_inputs_with_answers)

  if (valid_answers_on_inputs_needed_for_scoring.length === 0)
    return MISSING_MESSAGE

  return R.sum(valid_answers_on_inputs_needed_for_scoring)
}
