import { ScoreType } from '../../types'
import { PSK_INPUTS, PSK_OUTPUT } from './definition'
import { sum } from 'lodash'

export const psk: ScoreType<typeof PSK_INPUTS, typeof PSK_OUTPUT> = {
  name: 'Patient Specifieke Klachten (PSK)',
  readmeLocation: __dirname,
  inputSchema: PSK_INPUTS,
  outputSchema: PSK_OUTPUT,
  calculate: ({ data }) => {
    const validInputs = Object.values(data).filter(value => value !== undefined)

    if (validInputs.length === 0) {
      return {
        PSK_SCORE: null,
        PSK_SUM_OF_ACTIVITY_SCORES: null,
        PSK_NBR_OF_ACTIVITIES: null,
      }
    }

    const simpleSum = sum(validInputs)
    const nbrOfActivities = validInputs.length
    const pskScore = simpleSum / nbrOfActivities

    return {
      PSK_SCORE: pskScore,
      PSK_SUM_OF_ACTIVITY_SCORES: simpleSum,
      PSK_NBR_OF_ACTIVITIES: nbrOfActivities,
    }
  },
}
