import { pick, sum } from 'lodash'
import { ScoreType } from '../../types'
import { KORQ_INPUTS, KORQ_OUTPUT, KORQ_SUBSCALES } from './definition'

export const korq: ScoreType<typeof KORQ_INPUTS, typeof KORQ_OUTPUT> = {
  name: 'Keratoconus Outcomes Research Questionnaire (KORQ)',
  readmeLocation: __dirname,
  inputSchema: KORQ_INPUTS,
  outputSchema: KORQ_OUTPUT,
  calculate: ({ data }) => {
    const activityLimitationItems = pick(
      data,
      KORQ_SUBSCALES.KORQ_ACTIVITY_LIMITATIONS,
    )
    const symptomsItems = pick(data, KORQ_SUBSCALES.KORQ_SYMPTOMS)

    const activityLimitationScore = sum(Object.values(activityLimitationItems))
    const symptomsScore = sum(Object.values(symptomsItems))

    return {
      KORQ_TOTAL_SCORE: activityLimitationScore + symptomsScore,
      KORQ_SYMPTOMS: symptomsScore,
      KORQ_ACTIVITY_LIMITATIONS: activityLimitationScore,
    }
  },
}
