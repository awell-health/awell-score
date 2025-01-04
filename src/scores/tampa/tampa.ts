import { TAMPA_INPUTS, TAMPA_OUTPUT } from './definition'
import { ScoreType } from '../../types'
import { sum, pick, mapValues, omit } from 'lodash'

export const tampa: ScoreType<typeof TAMPA_INPUTS, typeof TAMPA_OUTPUT> = {
  name: 'Tampa',
  readmeLocation: __dirname,
  inputSchema: TAMPA_INPUTS,
  outputSchema: TAMPA_OUTPUT,
  calculate: ({ data }) => {
    const inverseQuestions = pick(data, ['Q04', 'Q08', 'Q12', 'Q16'])
    const inverseValues = mapValues(inverseQuestions, value => 5 - value)

    const nonInverseValues = omit(data, Object.keys(inverseQuestions))
    const combinedValues = { ...inverseValues, ...nonInverseValues }

    const totalScore = sum(Object.values(combinedValues))

    const hasMovementFear = totalScore >= 37
    const interpretation = hasMovementFear
      ? 'Kinesiophobia present'
      : 'Kinesiophobia not present'

    return {
      TAMPA: totalScore,
      INTERPRETATION: interpretation,
    }
  },
}
