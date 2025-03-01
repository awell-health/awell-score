import { sum } from 'lodash'
import { ScoreType } from '../../types'
import { COMPASS_31_OUTPUT, COMPASS_31_INPUTS } from './definition'
import { calculate_domain_scores } from './helpers'

export const compass_31: ScoreType<
  typeof COMPASS_31_INPUTS,
  typeof COMPASS_31_OUTPUT
> = {
  name: 'COMPASS 31 (Composite Autonomic Symptom Score)',
  readmeLocation: __dirname,
  inputSchema: COMPASS_31_INPUTS,
  outputSchema: COMPASS_31_OUTPUT,
  calculate: ({ data }) => {
    const orthostaticIntoleranceScore = calculate_domain_scores(
      data,
      'ORTHOSTATIC_INTOLERANCE',
    )
    const vasomotorScore = calculate_domain_scores(data, 'VASOMOTOR')
    const secretomotorScore = calculate_domain_scores(data, 'SECRETOMOTOR')
    const gastrointestinalScore = calculate_domain_scores(
      data,
      'GASTROINTESTINAL',
    )
    const bladderScore = calculate_domain_scores(data, 'BLADDER')
    const pupillomotorScore = calculate_domain_scores(data, 'PUPILLOMOTOR')

    const totalScore = sum([
      orthostaticIntoleranceScore.weighted,
      vasomotorScore.weighted,
      secretomotorScore.weighted,
      gastrointestinalScore.weighted,
      bladderScore.weighted,
      pupillomotorScore.weighted,
    ])

    return {
      COMPASS_31_TOTAL_SCORE: totalScore,
      COMPASS_31_ORTHOSTATIC_INTOLERANCE: orthostaticIntoleranceScore.weighted,
      COMPASS_31_VASOMOTOR: vasomotorScore.weighted,
      COMPASS_31_SECRETOMOTOR: secretomotorScore.weighted,
      COMPASS_31_GASTROINTESTINAL: gastrointestinalScore.weighted,
      COMPASS_31_BLADDER: bladderScore.weighted,
      COMPASS_31_PUPILLOMOTOR: pupillomotorScore.weighted,
    }
  },
}
