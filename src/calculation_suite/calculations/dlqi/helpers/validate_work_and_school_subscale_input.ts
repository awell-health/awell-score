import R from 'ramda'

import type { SubscaleType } from '../../../../types/calculations.types'
import {
  inputIdLens,
  rawInputValueLens,
} from '../../../helper_functions/calculation_variants/api/input/lenses'
import {
  inputsInSubscaleLens,
  subscaleIdLens,
} from '../../../helper_functions/calculation_variants/api/subscale/lenses'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { NOT_RELEVANT_ANSWER, YES_ANSWER } from '../definition/dlqi_subscales'

export const validate_work_and_school_subscale_input = (
  subscales: Array<SubscaleType>
): Array<SubscaleType> =>
  R.map(subscale => {
    const subscale_id = R.view(subscaleIdLens, subscale)

    if (subscale_id !== 'WORK_AND_SCHOOL') return subscale

    const MAIN_INPUT_ID = 'DLQI_Q07'
    const SUB_INPUT_ID = 'DLQI_Q07_SUB'

    const DLQI_WORK_AND_SCHOOL_MAIN_QUESTION_ANSWER = R.compose(
      R.view(rawInputValueLens),
      R.find(s => R.view(inputIdLens, s) === MAIN_INPUT_ID),
      R.view(inputsInSubscaleLens)
    )(subscale)

    const DLQI_WORK_AND_SCHOOL_SUB_QUESTION_ANSWER = R.compose(
      R.view(rawInputValueLens),
      R.find(s => R.view(inputIdLens, s) === SUB_INPUT_ID),
      R.view(inputsInSubscaleLens)
    )(subscale)

    /**
     * If the main input is answerd with yes (3) or not relevant (999),
     * then sub input should not be answered (i.e. should be missing)
     */
    if (
      DLQI_WORK_AND_SCHOOL_MAIN_QUESTION_ANSWER === YES_ANSWER ||
      DLQI_WORK_AND_SCHOOL_MAIN_QUESTION_ANSWER === NOT_RELEVANT_ANSWER
    ) {
      if (DLQI_WORK_AND_SCHOOL_SUB_QUESTION_ANSWER !== MISSING_MESSAGE) {
        throw new Error(
          `Invalid calculation input for DLQI: Question 7 (DLQI_Q07) was answered with "yes" (${YES_ANSWER}) or "not relevant" (${NOT_RELEVANT_ANSWER}) and in that case (DLQI_Q07_SUB) should not be answered.`
        )
      }

      return subscale
    }

    return subscale
  }, subscales)
