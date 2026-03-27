import { type LabelType, ScoreType } from '../../types'
import {
  PAID20_OUTPUT,
  PAID20_INPUTS,
  PAID20_INTERPRETATION_CODE,
  PAID20_INTERPRETATION_LABEL,
} from './definition'
import { sum } from 'lodash'
import { is_numeric } from '../../lib/shared'

export const paid_20: ScoreType<typeof PAID20_INPUTS, typeof PAID20_OUTPUT> = {
  name: 'Problem Areas In Diabetes (PAID) Scale',
  readmeLocation: __dirname,
  inputSchema: PAID20_INPUTS,
  outputSchema: PAID20_OUTPUT,
  calculate: ({ data, language }) => {
    const totalScore = sum(Object.values(data)) * 1.25

    const questions_with_score_3_or_4 = Object.entries(data)
      .filter(([_, value]) => {
        return is_numeric(value) && (value === 3 || value === 4)
      })
      .map(([key, value]) => `${key}:${value}`)
      .join(',')

    const key: 'SEVERE' | 'NOT_SEVERE' =
      totalScore >= 40 ? 'SEVERE' : 'NOT_SEVERE'

    const code: LabelType = PAID20_INTERPRETATION_CODE[key]
    const label: LabelType = PAID20_INTERPRETATION_LABEL[key]

    return {
      PAID20_SCORE: totalScore,
      PAID20_QUESTIONS_WITH_SCORE_3_OR_4: questions_with_score_3_or_4,
      PAID20_INTERPRETATION:
        (language && code[language]) ?? code.en ?? '',
      PAID20_INTERPRETATION_LABEL:
        (language && label[language]) ?? label.en ?? '',
    }
  },
}
