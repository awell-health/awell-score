import R from 'ramda'

import { is_numeric } from '../../../src/calculation_suite/calculations/shared_functions'

export const UNWEIGHTED_SF_CUT_OFF = 3
export const UNWEIGHTED_AP_CUT_OFF = 1
export const WEIGHTED_SUM_OF_SF_AND_AP_CUT_OFF = 11

export const determine_remission = ({
  unweighted_stool_frequency_score,
  unweighted_abdominal_pain_score,
  sum_of_weighted_stool_frequency_and_abdominal_pain,
}: {
  unweighted_stool_frequency_score?: number | string
  unweighted_abdominal_pain_score?: number | string
  sum_of_weighted_stool_frequency_and_abdominal_pain?: number | string
}): boolean => {
  if (
    !R.all(is_numeric)([
      unweighted_stool_frequency_score,
      unweighted_abdominal_pain_score,
      sum_of_weighted_stool_frequency_and_abdominal_pain,
    ])
  )
    return false

  const unweighted_stool_frequency_score_is_leq_than_cut_off =
    Number(unweighted_stool_frequency_score) <= UNWEIGHTED_SF_CUT_OFF

  const unweighted_abominal_pain_score_is_leq_than_cut_off =
    Number(unweighted_abdominal_pain_score) <= UNWEIGHTED_AP_CUT_OFF

  const sum_of_weighted_stool_frequency_and_abdominal_pain_is_leq_than_cut_off =
    Number(sum_of_weighted_stool_frequency_and_abdominal_pain) <=
    WEIGHTED_SUM_OF_SF_AND_AP_CUT_OFF

  return (
    unweighted_stool_frequency_score_is_leq_than_cut_off &&
    unweighted_abominal_pain_score_is_leq_than_cut_off &&
    sum_of_weighted_stool_frequency_and_abdominal_pain_is_leq_than_cut_off
  )
}
