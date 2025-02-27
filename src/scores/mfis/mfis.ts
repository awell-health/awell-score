import { ScoreType } from '../../types'
import { MFIS_INPUTS, MFIS_OUTPUT } from './definition'
import { sum } from 'lodash'
import { calculateSubscaleScore } from './helpers'

export const mfis: ScoreType<typeof MFIS_INPUTS, typeof MFIS_OUTPUT> = {
  name: 'Modified Fatigue Impact Scale (MFIS)',
  readmeLocation: __dirname,
  inputSchema: MFIS_INPUTS,
  outputSchema: MFIS_OUTPUT,
  calculate: ({ data }) => {
    const physicalSubscaleScore = calculateSubscaleScore(
      data,
      'PHYSICAL_SUBSCALE',
    )
    const cognitiveSubscaleScore = calculateSubscaleScore(
      data,
      'COGNITIVE_SUBSCALE',
    )
    const psychosocialSubscaleScore = calculateSubscaleScore(
      data,
      'PSYCHOSOCIAL_SUBSCALE',
    )

    const validInputsForTotalScore = Object.values(data).filter(
      value => value !== undefined,
    )

    const totalScore =
      validInputsForTotalScore.length === 0
        ? null
        : sum(validInputsForTotalScore)

    return {
      MFIS_TOTAL_SCORE: totalScore,
      MFIS_PHYSICAL_SUBSCALE_SCORE: physicalSubscaleScore,
      MFIS_COGNITIVE_SUBSCALE_SCORE: cognitiveSubscaleScore,
      MFIS_PSYCHOSOCIAL_SUBSCALE_SCORE: psychosocialSubscaleScore,
    }
  },
}
