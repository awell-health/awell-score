import R from 'ramda'

import type { InputType } from '../../../../types/calculations.types'
import {
  inputIdLens,
  rawInputValueLens,
  stdInputValueLens,
} from '../../../lib/calculation_variants/api/input/lenses'

const recoding_table = {
  '0': 5,
  '1': 4,
  '2': 4,
  '3': 4,
  '4': 3,
  '5': 3,
  '6': 3,
  '7': 2,
  '8': 2,
  '9': 2,
  '10': 1,
}

export const recode_question_7r = (
  calculation_input: Array<InputType>
): Array<InputType> =>
  R.map(input => {
    const input_id = R.view(inputIdLens, input)
    const answer = R.view(rawInputValueLens, input)

    if (input_id === 'PROMIS_10_Q07RC') {
      //@ts-expect-error to do
      return R.set(stdInputValueLens, recoding_table[answer], input)
    }

    return R.set(stdInputValueLens, answer, input)
  }, calculation_input)
