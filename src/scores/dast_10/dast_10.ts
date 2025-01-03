import {
  DAST10_INPUTS,
  DAST10_OUTPUT,
  DAST10_INTERPRETATION_TABLE,
} from './definition'
import { ScoreType } from '../../types'
import _ from 'lodash'

export const dast_10: ScoreType<typeof DAST10_INPUTS, typeof DAST10_OUTPUT> = {
  name: 'Drug Abuse Screening Test (DAST-10)',
  readmeLocation: __dirname,
  inputSchema: DAST10_INPUTS,
  outputSchema: DAST10_OUTPUT,
  calculate: ({ data }) => {
    const definedInputs = Object.values(data).filter(
      value => value !== undefined,
    )

    if (definedInputs.length === 0) {
      return {
        DAST10_SCORE: null,
        DAST10_DEGREE_OF_PROBLEMS: null,
      }
    }

    const totalScore = _.sum(definedInputs)

    return {
      DAST10_SCORE: totalScore,
      DAST10_DEGREE_OF_PROBLEMS:
        DAST10_INTERPRETATION_TABLE[totalScore.toString()],
    }
  },
}
