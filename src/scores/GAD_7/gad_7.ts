import { GAD7_INPUTS, GAD7_OUTPUT, GAD7_INTERPRATION_TABLE } from './definition'
import { ScoreType } from '../../types'
import { sum } from 'lodash'

export const gad_7: ScoreType<typeof GAD7_INPUTS, typeof GAD7_OUTPUT> = {
  name: 'Generalised Anxiety Disorder Assessment (GAD-7)',
  readmeLocation: __dirname,
  inputSchema: GAD7_INPUTS,
  outputSchema: GAD7_OUTPUT,
  calculate: ({ data }) => {
    const totalScore = sum(Object.values(data))

    return {
      GAD7_SCORE: totalScore,
      GAD7_INTERPRETATION: GAD7_INTERPRATION_TABLE[totalScore.toString()],
    }
  },
}
