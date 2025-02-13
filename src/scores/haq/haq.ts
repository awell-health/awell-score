import { sum } from 'lodash'
import { ScoreType } from '../../types'
import { HAQ_OUTPUT, HAQ_INPUTS } from './definition'
import { calculate_section_score } from './helpers/calculate_section_score'

export const haq: ScoreType<typeof HAQ_INPUTS, typeof HAQ_OUTPUT> = {
  name: 'Health Assessment Questionnaire (HAQ)',
  readmeLocation: __dirname,
  inputSchema: HAQ_INPUTS,
  outputSchema: HAQ_OUTPUT,
  calculate: ({ data }) => {
    const section_scores = [
      calculate_section_score(data, 'dressing'),
      calculate_section_score(data, 'arising'),
      calculate_section_score(data, 'eating'),
      calculate_section_score(data, 'walking'),
      calculate_section_score(data, 'hygiene'),
      calculate_section_score(data, 'reach'),
      calculate_section_score(data, 'grip'),
      calculate_section_score(data, 'activities'),
    ]

    const non_missing_section_scores = section_scores.filter(
      score => score !== null,
    )

    const MIN_SECTIONDS_NEEDED = 7

    if (non_missing_section_scores.length < MIN_SECTIONDS_NEEDED)
      return {
        DI: null,
      }

    const score =
      sum(non_missing_section_scores) / non_missing_section_scores.length

    return {
      DI: score,
    }
  },
}
