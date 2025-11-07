import { AIS_INPUTS, AIS_OUTPUT, AIS_INTERPRETATION_TABLE } from './definition'
import { ScoreType } from '../../types'
import { sum } from 'lodash'

export const ais: ScoreType<typeof AIS_INPUTS, typeof AIS_OUTPUT> = {
  name: 'Acceptance of Illness Scale (AIS)',
  readmeLocation: __dirname,
  inputSchema: AIS_INPUTS,
  outputSchema: AIS_OUTPUT,
  calculate: ({ data }) => {
    const validValues = Object.values(data).filter(value => value !== undefined)
    const total_score = sum(validValues)

    return {
      AIS_SCORE: total_score,
      AIS_INTERPRETATION: AIS_INTERPRETATION_TABLE[total_score.toString()],
    }
  },
}
