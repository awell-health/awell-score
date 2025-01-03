import {
  STOP_BANG_INPUTS,
  STOP_BANG_OUTPUT,
  STOP_BANG_INTERPRETATION_TABLE,
} from './definition'
import { ScoreType } from '../../types'
import _ from 'lodash'

export const stop_bang: ScoreType<
  typeof STOP_BANG_INPUTS,
  typeof STOP_BANG_OUTPUT
> = {
  name: 'STOP-BANG',
  readmeLocation: __dirname,
  inputSchema: STOP_BANG_INPUTS,
  outputSchema: STOP_BANG_OUTPUT,
  calculate: ({ data }) => {
    const BmiThreshold = 35
    const bmiPoint = data.STOP_BANG_Q05 > BmiThreshold ? 1 : 0

    const ageThreshold = 50
    const agePoint = data.STOP_BANG_Q06 > ageThreshold ? 1 : 0

    const neckCircumferenceThreshold = 40
    const neckCircumferencePoint =
      data.STOP_BANG_Q07 > neckCircumferenceThreshold ? 1 : 0

    const isMale = 1
    const genderPoint = data.STOP_BANG_Q08 === isMale ? 1 : 0

    const values = [
      data.STOP_BANG_Q01,
      data.STOP_BANG_Q02,
      data.STOP_BANG_Q03,
      data.STOP_BANG_Q04,
      bmiPoint,
      agePoint,
      neckCircumferencePoint,
      genderPoint,
    ]

    const totalScore = _.sum(values)

    return {
      STOP_BANG: totalScore,
      STOP_BANG_INTERPRETATION:
        STOP_BANG_INTERPRETATION_TABLE[totalScore.toString()],
    }
  },
}
