import { ScoreType } from '../../types'
import { START_BACK_OUTPUT, START_BACK_INPUTS } from './definition'
import { sum } from 'lodash'
import { classifyRisk } from './helpers/classifyRisk/classifyRisk'

export const start_back_screening_tool: ScoreType<
  typeof START_BACK_INPUTS,
  typeof START_BACK_OUTPUT
> = {
  name: 'Start Back Screening Tool',
  readmeLocation: __dirname,
  inputSchema: START_BACK_INPUTS,
  outputSchema: START_BACK_OUTPUT,
  calculate: ({ data }) => {
    const q9Recoding = {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 1,
      '4': 1,
    }

    const q9Recorded = q9Recoding[data.Q09]
    const subscaleItems = [data.Q05, data.Q06, data.Q07, data.Q08, q9Recorded]
    const allItems = [data.Q01, data.Q02, data.Q03, data.Q04, ...subscaleItems]

    const subscaleScore = sum(subscaleItems)
    const totalScore = sum(allItems)

    return {
      START_BACK_TOTAL: totalScore,
      START_BACK_SUBSCALE: subscaleScore,
      START_BACK_RISK_CLASSIFICATION: classifyRisk({
        totalScore,
        subscaleScore,
      }),
    }
  },
}
