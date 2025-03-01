import { ScoreType } from '../../types'
import { SDQ_INPUTS, SDQ_OUTPUT } from './definition'
import {
  calculateExternalisingAndInternalisingScores,
  calculateSubscaleScores,
  calculateTotalScore,
  calculateInterpretationCategoriesForImpactScales,
  calculateInterpretationCategoriesForProblemScales,
} from './helpers'

export const sdq: ScoreType<typeof SDQ_INPUTS, typeof SDQ_OUTPUT> = {
  name: 'Strengths & Difficulties Questionnaire (SDQ)',
  readmeLocation: __dirname,
  inputSchema: SDQ_INPUTS,
  outputSchema: SDQ_OUTPUT,
  calculate: ({ data }) => {
    const subscaleScores = calculateSubscaleScores(data)
    const totalScore = calculateTotalScore(subscaleScores)
    const { internalising, externalising } =
      calculateExternalisingAndInternalisingScores(subscaleScores)

    const interpretationCategoriesForImpactScales =
      calculateInterpretationCategoriesForImpactScales(subscaleScores)

    const interpretationCategoriesForProblemScales =
      calculateInterpretationCategoriesForProblemScales(
        subscaleScores,
        totalScore,
      )

    const getCategoryScore = (category: string): string | null => {
      const allCategories = [
        ...interpretationCategoriesForImpactScales,
        ...interpretationCategoriesForProblemScales,
      ]

      const interpretationCategory = allCategories.find(item =>
        Object.keys(item).includes(category),
      )

      if (interpretationCategory === undefined) {
        throw new Error(`Category ${category} not found`)
      }

      return interpretationCategory[category]
    }

    return {
      TOTAL: totalScore,
      EMOTIONAL_PROBLEMS: subscaleScores.EMOTIONAL_PROBLEMS,
      CONDUCT_PROBLEMS: subscaleScores.CONDUCT_PROBLEMS,
      HYPERACTIVITY: subscaleScores.HYPERACTIVITY,
      PEER_PROBLEMS: subscaleScores.PEER_PROBLEMS,
      PROSOCIAL: subscaleScores.PROSOCIAL,
      IMPACT_PARENT_REPORTED: subscaleScores.IMPACT_PARENT_REPORTED,
      IMPACT_TEACHER_REPORTED: subscaleScores.IMPACT_TEACHER_REPORTED,
      IMPACT_SELF_REPORTED: subscaleScores.IMPACT_SELF_REPORTED,
      INTERNALISING: internalising,
      EXTERNALISING: externalising,
      /**
       * Three band categorisation - Parent reported
       */
      EMOTIONAL_PROBLEMS_PARENT_REPORTED_THREE_BAND_CATEGORISING:
        getCategoryScore(
          'EMOTIONAL_PROBLEMS_PARENT_REPORTED_THREE_BAND_CATEGORISING',
        ),
      CONDUCT_PROBLEMS_PARENT_REPORTED_THREE_BAND_CATEGORISING:
        getCategoryScore(
          'CONDUCT_PROBLEMS_PARENT_REPORTED_THREE_BAND_CATEGORISING',
        ),
      HYPERACTIVITY_PARENT_REPORTED_THREE_BAND_CATEGORISING: getCategoryScore(
        'HYPERACTIVITY_PARENT_REPORTED_THREE_BAND_CATEGORISING',
      ),
      PEER_PROBLEMS_PARENT_REPORTED_THREE_BAND_CATEGORISING: getCategoryScore(
        'PEER_PROBLEMS_PARENT_REPORTED_THREE_BAND_CATEGORISING',
      ),
      PROSOCIAL_PARENT_REPORTED_THREE_BAND_CATEGORISING: getCategoryScore(
        'PROSOCIAL_PARENT_REPORTED_THREE_BAND_CATEGORISING',
      ),
      TOTAL_PARENT_REPORTED_THREE_BAND_CATEGORISING: getCategoryScore(
        'TOTAL_PARENT_REPORTED_THREE_BAND_CATEGORISING',
      ),
      IMPACT_PARENT_REPORTED_THREE_BAND_CATEGORISING: getCategoryScore(
        'IMPACT_PARENT_REPORTED_THREE_BAND_CATEGORISING',
      ),
      /**
       * Three band categorisation - Teacher reported
       */
      EMOTIONAL_PROBLEMS_TEACHER_REPORTED_THREE_BAND_CATEGORISING:
        getCategoryScore(
          'EMOTIONAL_PROBLEMS_TEACHER_REPORTED_THREE_BAND_CATEGORISING',
        ),
      CONDUCT_PROBLEMS_TEACHER_REPORTED_THREE_BAND_CATEGORISING:
        getCategoryScore(
          'CONDUCT_PROBLEMS_TEACHER_REPORTED_THREE_BAND_CATEGORISING',
        ),
      HYPERACTIVITY_TEACHER_REPORTED_THREE_BAND_CATEGORISING: getCategoryScore(
        'HYPERACTIVITY_TEACHER_REPORTED_THREE_BAND_CATEGORISING',
      ),
      PEER_PROBLEMS_TEACHER_REPORTED_THREE_BAND_CATEGORISING: getCategoryScore(
        'PEER_PROBLEMS_TEACHER_REPORTED_THREE_BAND_CATEGORISING',
      ),
      PROSOCIAL_TEACHER_REPORTED_THREE_BAND_CATEGORISING: getCategoryScore(
        'PROSOCIAL_TEACHER_REPORTED_THREE_BAND_CATEGORISING',
      ),
      TOTAL_TEACHER_REPORTED_THREE_BAND_CATEGORISING: getCategoryScore(
        'TOTAL_TEACHER_REPORTED_THREE_BAND_CATEGORISING',
      ),
      IMPACT_TEACHER_REPORTED_THREE_BAND_CATEGORISING: getCategoryScore(
        'IMPACT_TEACHER_REPORTED_THREE_BAND_CATEGORISING',
      ),
      /**
       * Three band categorisation - Self reported
       */
      EMOTIONAL_PROBLEMS_SELF_REPORTED_THREE_BAND_CATEGORISING:
        getCategoryScore(
          'EMOTIONAL_PROBLEMS_SELF_REPORTED_THREE_BAND_CATEGORISING',
        ),
      CONDUCT_PROBLEMS_SELF_REPORTED_THREE_BAND_CATEGORISING: getCategoryScore(
        'CONDUCT_PROBLEMS_SELF_REPORTED_THREE_BAND_CATEGORISING',
      ),
      HYPERACTIVITY_SELF_REPORTED_THREE_BAND_CATEGORISING: getCategoryScore(
        'HYPERACTIVITY_SELF_REPORTED_THREE_BAND_CATEGORISING',
      ),
      PEER_PROBLEMS_SELF_REPORTED_THREE_BAND_CATEGORISING: getCategoryScore(
        'PEER_PROBLEMS_SELF_REPORTED_THREE_BAND_CATEGORISING',
      ),
      PROSOCIAL_SELF_REPORTED_THREE_BAND_CATEGORISING: getCategoryScore(
        'PROSOCIAL_SELF_REPORTED_THREE_BAND_CATEGORISING',
      ),
      TOTAL_SELF_REPORTED_THREE_BAND_CATEGORISING: getCategoryScore(
        'TOTAL_SELF_REPORTED_THREE_BAND_CATEGORISING',
      ),
      IMPACT_SELF_REPORTED_THREE_BAND_CATEGORISING: getCategoryScore(
        'IMPACT_SELF_REPORTED_THREE_BAND_CATEGORISING',
      ),
      /**
       * Four band categorisation - Parent reported
       */
      EMOTIONAL_PROBLEMS_PARENT_REPORTED_FOUR_BAND_CATEGORISING:
        getCategoryScore(
          'EMOTIONAL_PROBLEMS_PARENT_REPORTED_FOUR_BAND_CATEGORISING',
        ),
      CONDUCT_PROBLEMS_PARENT_REPORTED_FOUR_BAND_CATEGORISING: getCategoryScore(
        'CONDUCT_PROBLEMS_PARENT_REPORTED_FOUR_BAND_CATEGORISING',
      ),
      HYPERACTIVITY_PARENT_REPORTED_FOUR_BAND_CATEGORISING: getCategoryScore(
        'HYPERACTIVITY_PARENT_REPORTED_FOUR_BAND_CATEGORISING',
      ),
      PEER_PROBLEMS_PARENT_REPORTED_FOUR_BAND_CATEGORISING: getCategoryScore(
        'PEER_PROBLEMS_PARENT_REPORTED_FOUR_BAND_CATEGORISING',
      ),
      PROSOCIAL_PARENT_REPORTED_FOUR_BAND_CATEGORISING: getCategoryScore(
        'PROSOCIAL_PARENT_REPORTED_FOUR_BAND_CATEGORISING',
      ),
      TOTAL_PARENT_REPORTED_FOUR_BAND_CATEGORISING: getCategoryScore(
        'TOTAL_PARENT_REPORTED_FOUR_BAND_CATEGORISING',
      ),
      IMPACT_PARENT_REPORTED_FOUR_BAND_CATEGORISING: getCategoryScore(
        'IMPACT_PARENT_REPORTED_FOUR_BAND_CATEGORISING',
      ),
      /**
       * Four band categorisation - Teacher reported
       */
      EMOTIONAL_PROBLEMS_TEACHER_REPORTED_FOUR_BAND_CATEGORISING:
        getCategoryScore(
          'EMOTIONAL_PROBLEMS_TEACHER_REPORTED_FOUR_BAND_CATEGORISING',
        ),
      CONDUCT_PROBLEMS_TEACHER_REPORTED_FOUR_BAND_CATEGORISING:
        getCategoryScore(
          'CONDUCT_PROBLEMS_TEACHER_REPORTED_FOUR_BAND_CATEGORISING',
        ),
      HYPERACTIVITY_TEACHER_REPORTED_FOUR_BAND_CATEGORISING: getCategoryScore(
        'HYPERACTIVITY_TEACHER_REPORTED_FOUR_BAND_CATEGORISING',
      ),
      PEER_PROBLEMS_TEACHER_REPORTED_FOUR_BAND_CATEGORISING: getCategoryScore(
        'PEER_PROBLEMS_TEACHER_REPORTED_FOUR_BAND_CATEGORISING',
      ),
      PROSOCIAL_TEACHER_REPORTED_FOUR_BAND_CATEGORISING: getCategoryScore(
        'PROSOCIAL_TEACHER_REPORTED_FOUR_BAND_CATEGORISING',
      ),
      TOTAL_TEACHER_REPORTED_FOUR_BAND_CATEGORISING: getCategoryScore(
        'TOTAL_TEACHER_REPORTED_FOUR_BAND_CATEGORISING',
      ),
      IMPACT_TEACHER_REPORTED_FOUR_BAND_CATEGORISING: getCategoryScore(
        'IMPACT_TEACHER_REPORTED_FOUR_BAND_CATEGORISING',
      ),
      /**
       * Four band categorisation - Self reported
       */
      EMOTIONAL_PROBLEMS_SELF_REPORTED_FOUR_BAND_CATEGORISING: getCategoryScore(
        'EMOTIONAL_PROBLEMS_SELF_REPORTED_FOUR_BAND_CATEGORISING',
      ),
      CONDUCT_PROBLEMS_SELF_REPORTED_FOUR_BAND_CATEGORISING: getCategoryScore(
        'CONDUCT_PROBLEMS_SELF_REPORTED_FOUR_BAND_CATEGORISING',
      ),
      HYPERACTIVITY_SELF_REPORTED_FOUR_BAND_CATEGORISING: getCategoryScore(
        'HYPERACTIVITY_SELF_REPORTED_FOUR_BAND_CATEGORISING',
      ),
      PEER_PROBLEMS_SELF_REPORTED_FOUR_BAND_CATEGORISING: getCategoryScore(
        'PEER_PROBLEMS_SELF_REPORTED_FOUR_BAND_CATEGORISING',
      ),
      PROSOCIAL_SELF_REPORTED_FOUR_BAND_CATEGORISING: getCategoryScore(
        'PROSOCIAL_SELF_REPORTED_FOUR_BAND_CATEGORISING',
      ),
      TOTAL_SELF_REPORTED_FOUR_BAND_CATEGORISING: getCategoryScore(
        'TOTAL_SELF_REPORTED_FOUR_BAND_CATEGORISING',
      ),
      IMPACT_SELF_REPORTED_FOUR_BAND_CATEGORISING: getCategoryScore(
        'IMPACT_SELF_REPORTED_FOUR_BAND_CATEGORISING',
      ),
    }
  },
}
