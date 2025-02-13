import { sum } from 'lodash'
import { ScoreType } from '../../types'
import { CFWS_OUTPUT, CFWS_INPUTS, CFWS_SCORE_CATEGORY } from './definition'

export const cfws: ScoreType<typeof CFWS_INPUTS, typeof CFWS_OUTPUT> = {
  name: 'Catalight Family Wellbeing Scale (CFWS)',
  readmeLocation: __dirname,
  inputSchema: CFWS_INPUTS,
  outputSchema: CFWS_OUTPUT,
  calculate: ({ data }) => {
    const validInputs = Object.values(data).filter(v => v !== undefined)

    if (validInputs.length === 0) {
      return {
        CFWS_SCORE: null,
        CFWS_INTERPRETATION: null,
      }
    }

    const score = sum(validInputs)

    const getInterpretation = (score: number) => {
      if (score >= 52) {
        return CFWS_SCORE_CATEGORY.AVERAGE
      }

      if (score >= 43) {
        return CFWS_SCORE_CATEGORY.LITTLE_LOWER
      }

      return CFWS_SCORE_CATEGORY.LOT_LOWER
    }

    return {
      CFWS_SCORE: score,
      CFWS_INTERPRETATION: getInterpretation(score),
    }
  },
}
