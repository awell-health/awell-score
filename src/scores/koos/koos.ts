import {
  KOOS_INPUTS,
  KOOS_OUTPUT,
} from './definition'
import { ScoreType } from '../../types'
import { calculate_scores } from './helpers'

export const koos: ScoreType<typeof KOOS_INPUTS, typeof KOOS_OUTPUT> = {
  name: 'Knee Injury and Osteoarthritis Outcome Score-Physical function Short form (KOOS-PS)',
  readmeLocation: __dirname,
  inputSchema: KOOS_INPUTS,
  outputSchema: KOOS_OUTPUT,
  calculate: ({ data }) => {
      const painScore = calculate_scores(data, 'PAIN')
      const symptomsScore = calculate_scores(data, 'SYMPTOMS')
      const adlFunctionScore = calculate_scores(data, 'ADL_FUNCTION')
      const sportFunctionScore = calculate_scores(data, 'SPORT_AND_RECREATION_FUNCTION')
      const qualityOfLifeScore = calculate_scores(data, 'QUALITY_OF_LIFE')
      return {
        PAIN: painScore,
        SYMPTOMS: symptomsScore,
        ADL_FUNCTION: adlFunctionScore,
        SPORT_AND_RECREATION_FUNCTION: sportFunctionScore,
        QUALITY_OF_LIFE: qualityOfLifeScore,
    }
  },
}
