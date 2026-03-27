import { type LabelType, ScoreType } from '../../types'
import {
  PAID5_OUTPUT,
  PAID5_INPUTS,
  PAID5_INTERPRETATION_LABEL,
  PAID5_INTERPRETATION_CODE,
} from './definition'
import { sum } from 'lodash'

export const paid_5: ScoreType<typeof PAID5_INPUTS, typeof PAID5_OUTPUT> = {
  name: 'Problem Areas In Diabetes - Short Form (PAID-5)',
  readmeLocation: __dirname,
  inputSchema: PAID5_INPUTS,
  outputSchema: PAID5_OUTPUT,
  calculate: ({ data, language }) => {
    const totalScore = sum(Object.values(data))

    const key: 'POSSIBLE_DISTRESS' | 'NO_DISTRESS' =
      totalScore >= 8 ? 'POSSIBLE_DISTRESS' : 'NO_DISTRESS'

    const code: LabelType = PAID5_INTERPRETATION_CODE[key]
    const label: LabelType = PAID5_INTERPRETATION_LABEL[key]

    return {
      PAID5_SCORE: totalScore,
      PAID5_INTERPRETATION:
        (language && code[language]) ?? code.en ?? '',
      PAID5_INTERPRETATION_LABEL:
        (language && label[language]) ?? label.en ?? '',
    }
  },
}
