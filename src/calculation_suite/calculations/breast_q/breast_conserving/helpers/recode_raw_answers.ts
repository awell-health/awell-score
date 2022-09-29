import R from 'ramda'

import type { InputType } from '../../../../../types/calculations.types'
import type { BreastQScaleType } from '../../../../../types/calculations/subscales/custom/breastq.types'
import {
  rawInputValueLens,
  stdInputValueLens,
} from '../../../../helper_functions/calculation_variants/api/input/lenses'
import { inputsInSubscaleLens } from '../../../../helper_functions/calculation_variants/api/subscale/lenses'
import { MISSING_MESSAGE } from '../../../../PARAMETERS'

export const recode_raw_answers = (
  subscale: BreastQScaleType
): BreastQScaleType => {
  const { recode = {} } = subscale
  const inputs_in_subscale = R.view(inputsInSubscaleLens, subscale)

  const set_raw_score_as_recoded_score = (input: InputType) => {
    const raw_answer = R.compose(
      R.defaultTo(MISSING_MESSAGE),
      R.view(rawInputValueLens)
    )(input)

    return R.set(stdInputValueLens, raw_answer, input)
  }

  if (R.isEmpty(recode))
    return R.set(
      inputsInSubscaleLens,
      R.map(set_raw_score_as_recoded_score, inputs_in_subscale),
      subscale
    )

  const recode_raw_answer = (input: InputType) => {
    const raw_answer = R.compose(
      R.defaultTo(MISSING_MESSAGE),
      R.view(rawInputValueLens)
    )(input)

    if (raw_answer === MISSING_MESSAGE)
      return R.set(stdInputValueLens, MISSING_MESSAGE, input)

    const recoded_answer = recode[raw_answer]

    if (R.isNil(recoded_answer))
      return R.set(stdInputValueLens, MISSING_MESSAGE, input)

    return R.set(stdInputValueLens, recoded_answer, input)
  }

  const inputs_with_recoded_answers = R.map(
    recode_raw_answer,
    inputs_in_subscale
  )

  return R.set(inputsInSubscaleLens, inputs_with_recoded_answers, subscale)
}
