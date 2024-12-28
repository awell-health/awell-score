import { round } from 'lodash'
import R from 'ramda'

import type { InputType } from '../../../../types/calculations.types'
import {
  inputIdLens,
  rawInputValueLens,
  stdInputValueLens,
} from '../../../lib/calculation_variants/api/input/lenses'
import {
  COMPASS_31_DOMAINS,
  type DomainType,
} from '../definition/compass_31_domains'
import { COMPASS_31_SCORING_ALGORITHM_TABLE } from '../definition/compass_31_scoring_algorithm'

export const calculate_domain_scores = (
  inputs_with_answers: Array<InputType>,
  domain: DomainType
): { raw: number; weighted: number } => {
  const INPUT_IDS_NEEDED_FOR_SCORING = COMPASS_31_DOMAINS[domain].items

  const domain_items_with_answers = R.compose(
    R.filter(({ input_id }: InputType) =>
      INPUT_IDS_NEEDED_FOR_SCORING.includes(input_id)
    )
  )(inputs_with_answers)

  const input_with_std_answers = R.map(input => {
    const rawAnswer = R.view(rawInputValueLens, input)

    /** See item 6 */
    if (Array.isArray(rawAnswer)) {
      const stdScore = rawAnswer.length || 0
      return R.set(stdInputValueLens, stdScore, input)
    }

    const inputId = R.view(inputIdLens, input)

    const stdScore =
      COMPASS_31_SCORING_ALGORITHM_TABLE[inputId][rawAnswer.toString()] || 0

    return R.set(stdInputValueLens, stdScore, input)
  }, domain_items_with_answers)

  const raw_score = R.compose(
    R.sum,
    R.map(input => R.view(stdInputValueLens, input))
  )(input_with_std_answers)

  const result = {
    raw: raw_score,
    weighted: round(raw_score * COMPASS_31_DOMAINS[domain].weight),
  }

  return result
}
