import { ScoreType } from '../../types'
import { SPADI_INPUTS, SPADI_OUTPUT, SPADI_SUBSCALES } from './definition'
import { mean, pick, round, sum } from 'lodash'

export const spadi: ScoreType<typeof SPADI_INPUTS, typeof SPADI_OUTPUT> = {
  name: 'Shoulder Pain and Disability Index (SPADI)',
  readmeLocation: __dirname,
  inputSchema: SPADI_INPUTS,
  outputSchema: SPADI_OUTPUT,
  calculate: ({ data }) => {
    const getValidInputs = (inputs: Record<string, number | undefined>) => {
      return Object.values(inputs).filter(value => value !== undefined)
    }

    const painInputs = getValidInputs(pick(data, SPADI_SUBSCALES.PAIN))
    const disabilityInputs = getValidInputs(
      pick(data, SPADI_SUBSCALES.DISABILITY),
    )

    const calculateSubscaleScore = (inputs: number[]) => {
      const ROUNDING_DECIMALS = 2
      const SCORE_ON_100_CONST = 10

      if (inputs.length) {
        return round(mean(inputs) * SCORE_ON_100_CONST, ROUNDING_DECIMALS)
      }

      return null
    }

    const painScore = calculateSubscaleScore(painInputs)
    const disabilityScore = calculateSubscaleScore(disabilityInputs)

    const totalScore =
      painScore !== null || disabilityScore !== null
        ? mean([painScore, disabilityScore])
        : null

    return {
      TOTAL: totalScore,
      PAIN: painScore,
      DISABILITY: disabilityScore,
    }
  },
}
