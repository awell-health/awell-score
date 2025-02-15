import { sum, pick } from 'lodash'
import { ScoreType } from '../../types'
import {
  AUDIT_OUTPUT,
  AUDIT_INPUTS,
  AUDIT_SUBSCALES,
  type SubscaleType,
} from './definition'

export const audit: ScoreType<typeof AUDIT_INPUTS, typeof AUDIT_OUTPUT> = {
  name: 'Alcohol Use Disorders Identification Test (AUDIT)',
  readmeLocation: __dirname,
  inputSchema: AUDIT_INPUTS,
  outputSchema: AUDIT_OUTPUT,
  calculate: ({ data }) => {
    const calculateSubscaleScore = (subscale: SubscaleType) => {
      const inputIds = AUDIT_SUBSCALES[subscale]

      const subscaleItems = pick(data, inputIds)
      const validSubscaleItems = Object.values(subscaleItems).filter(
        v => v !== undefined,
      )
      return sum(validSubscaleItems)
    }

    const consumptionScore = calculateSubscaleScore('CONSUMPTION')
    const dependenceScore = calculateSubscaleScore('DEPENDENCE')
    const alcoholRelatedProblemsScore = calculateSubscaleScore(
      'ALCOHOL_RELATED_PROBLEMS',
    )

    return {
      TOTAL: consumptionScore + dependenceScore + alcoholRelatedProblemsScore,
      CONSUMPTION: consumptionScore,
      DEPENDENCE: dependenceScore,
      ALCOHOL_RELATED_PROBLEMS: alcoholRelatedProblemsScore,
    }
  },
}
