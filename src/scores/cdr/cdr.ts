import { ScoreType } from '../../types'
import { CDR_OUTPUT, CDR_INPUTS } from './definition'
import { cdr_score_algorithm } from './cdr_score_algorithm'

export const cdr: ScoreType<typeof CDR_INPUTS, typeof CDR_OUTPUT> = {
  name: 'Clinical Dementia Rating (CDR)',
  readmeLocation: __dirname,
  inputSchema: CDR_INPUTS,
  outputSchema: CDR_OUTPUT,
  calculate: ({ data }) => {
    const MEMORY = data.MEMORY
    const ORIENTATION = data.ORIENTATION
    const JUDGEMENT_AND_PROBLEM_SOLVING = data.JUDGEMENT_AND_PROBLEM_SOLVING
    const COMMUNITY_AFFAIRS = data.COMMUNITY_AFFAIRS
    const HOME_AND_HOBBIES = data.HOME_AND_HOBBIES
    const PERSONAL_CARE = data.PERSONAL_CARE

    const score = cdr_score_algorithm({
      MEMORY,
      ORIENTATION,
      JUDGEMENT_AND_PROBLEM_SOLVING,
      COMMUNITY_AFFAIRS,
      HOME_AND_HOBBIES,
      PERSONAL_CARE,
    })

    return {
      CDR_SCORE: score,
    }
  },
}
