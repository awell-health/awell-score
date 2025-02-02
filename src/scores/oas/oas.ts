import { ScoreType } from '../../types'
import { OAS_OUTPUT, OAS_INPUTS, INVERSE_ITEMS } from './definition'
import { pick, mapValues } from 'lodash'
import { calculate_total_score, calculate_mean_score } from './helpers'

export const oas: ScoreType<typeof OAS_INPUTS, typeof OAS_OUTPUT> = {
  name: 'Ostomy Adjustment Scale (OAS)',
  readmeLocation: __dirname,
  inputSchema: OAS_INPUTS,
  outputSchema: OAS_OUTPUT,
  calculate: ({ data }) => {
    const inverse_items = pick(data, INVERSE_ITEMS)
    const inverse_items_values = mapValues(inverse_items, value => {
      if (value === undefined) {
        return undefined
      }

      const MAX_SCORE = 6
      const inversed_value = MAX_SCORE + 1 - value

      return inversed_value
    })

    const recoded_data = {
      ...data,
      ...inverse_items_values,
    }

    return {
      OAS_DAILY_ACTIVITIES_SUM_SCORE: calculate_total_score(
        recoded_data,
        'DAILY_ACTIVITIES',
      ),
      OAS_DAILY_ACTIVITIES_MEAN_SCORE: calculate_mean_score(
        recoded_data,
        'DAILY_ACTIVITIES',
      ),
      OAS_KNOWLEDGE_AND_SKILLS_SUM_SCORE: calculate_total_score(
        recoded_data,
        'KNOWLEDGE_AND_SKILLS',
      ),
      OAS_KNOWLEDGE_AND_SKILLS_MEAN_SCORE: calculate_mean_score(
        recoded_data,
        'KNOWLEDGE_AND_SKILLS',
      ),
      OAS_SELF_ESTEEM_SUM_SCORE: calculate_total_score(
        recoded_data,
        'SELF_ESTEEM',
      ),
      OAS_SELF_ESTEEM_MEAN_SCORE: calculate_mean_score(
        recoded_data,
        'SELF_ESTEEM',
      ),
      OAS_PSYCHOLOGICAL_EXISTENTIAL_SUM_SCORE: calculate_total_score(
        recoded_data,
        'PSYCHOLOGICAL_EXISTENTIAL',
      ),
      OAS_PSYCHOLOGICAL_EXISTENTIAL_MEAN_SCORE: calculate_mean_score(
        recoded_data,
        'PSYCHOLOGICAL_EXISTENTIAL',
      ),
      OAS_HEALTH_SUM_SCORE: calculate_total_score(recoded_data, 'HEALTH'),
      OAS_HEALTH_MEAN_SCORE: calculate_mean_score(recoded_data, 'HEALTH'),
      OAS_HEALTH_PROFESSIONALS_SUM_SCORE: calculate_total_score(
        recoded_data,
        'HEALTH_PROFESSIONALS',
      ),
      OAS_HEALTH_PROFESSIONALS_MEAN_SCORE: calculate_mean_score(
        recoded_data,
        'HEALTH_PROFESSIONALS',
      ),
      OAS_SEXUALITY_SUM_SCORE: calculate_total_score(recoded_data, 'SEXUALITY'),
      OAS_SEXUALITY_MEAN_SCORE: calculate_mean_score(recoded_data, 'SEXUALITY'),
      OAS_TOTAL_SUM_SCORE: calculate_total_score(recoded_data, 'TOTAL'),
      OAS_MEAN_SCORE: calculate_mean_score(recoded_data, 'TOTAL'),
    }
  },
}
