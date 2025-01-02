import {
  GAD2_INPUTS,
  GAD2_OUTPUT,
  GAD2_INTERPRETATION_TABLE,
} from './definition'
import { ScoreType } from '../../types'
import _ from 'lodash'

export const gad_2: ScoreType<typeof GAD2_INPUTS, typeof GAD2_OUTPUT> = {
  name: 'Generalised Anxiety Disorder Assessment (GAD-2)',
  readmeLocation: __dirname,
  inputSchema: GAD2_INPUTS,
  outputSchema: GAD2_OUTPUT,
  calculate: ({ data }) => {
    const totalScore = data.GAD2_Q01 + data.GAD2_Q02

    return {
      GAD2_SCORE: totalScore,
      GAD2_INTERPRETATION: GAD2_INTERPRETATION_TABLE[totalScore.toString()],
    }
  },
}
