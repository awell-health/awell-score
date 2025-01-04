import { GHQ_12_INPUTS, GHQ_12_OUTPUT } from './definition'
import { ScoreType } from '../../types'

export const ghq_12: ScoreType<typeof GHQ_12_INPUTS, typeof GHQ_12_OUTPUT> = {
  name: 'The 12-Item General Health Questionnaire (GHQ-12)',
  readmeLocation: __dirname,
  inputSchema: GHQ_12_INPUTS,
  outputSchema: GHQ_12_OUTPUT,
  calculate: ({ data }) => {
    /**
     * GHQ score is the sum of the amount of items that were scored 2 or 3
     */
    const DYSFUNCTIONAL_SCORES = [2, 3]

    const score = Object.values(data).filter(val =>
      DYSFUNCTIONAL_SCORES.includes(val),
    ).length

    return { GHQ_12_SCORING: score }
  },
}
