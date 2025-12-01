import { ScoreType } from '../../types'
import {
  WHOQOL_BREF_INPUTS,
  WHOQOL_BREF_OUTPUT,
  WHOQOL_BREF_DOMAINS,
  MAX_MISSING_PER_DOMAIN,
  type DomainType,
} from './definition'
import { mean, round } from 'lodash'

export const whoqol_bref: ScoreType<
  typeof WHOQOL_BREF_INPUTS,
  typeof WHOQOL_BREF_OUTPUT
> = {
  name: 'THE WHOQOL-BREF',
  readmeLocation: __dirname,
  inputSchema: WHOQOL_BREF_INPUTS,
  outputSchema: WHOQOL_BREF_OUTPUT,
  calculate: ({ data }) => {
    const ROUND_TO = 2
    const MAX_MISSING_PERCENTAGE = 0.2 // 20%
    const TOTAL_QUESTIONS = 26

    // Note: Polish WHOQOL-BREF uses pre-reversed values for Q3, Q4, Q26
    // (5=best, 1=worst for these questions), so no transformation is needed

    // TIER 1: Check overall data quality (20% rule)
    // If >20% of questions are missing, the entire questionnaire is invalid
    const answeredQuestions = Object.values(data).filter(
      value => value !== undefined,
    ).length
    const missingCount = TOTAL_QUESTIONS - answeredQuestions

    if (missingCount > TOTAL_QUESTIONS * MAX_MISSING_PERCENTAGE) {
      // More than 20% missing - entire questionnaire is invalid
      return {
        QUALITY_OF_LIFE: null,
        HEALTH_SATISFACTION: null,
        PHYSICAL_HEALTH: null,
        PSYCHOLOGICAL_HEALTH: null,
        SOCIAL_RELATIONSHIPS: null,
        ENVIRONMENT: null,
      }
    }

    // TIER 2: If overall quality is good (≤20% missing), evaluate each output independently
    // Q1 and Q2 are standalone questions (raw scores, no transformation)
    const qualityOfLife = data.WHOQOL_BREF_Q01 ?? null
    const healthSatisfaction = data.WHOQOL_BREF_Q02 ?? null

    // Calculate domain scores
    const calculateDomainScore = (domain: DomainType): number | null => {
      const domainQuestions = WHOQOL_BREF_DOMAINS[domain]
      const maxMissing = MAX_MISSING_PER_DOMAIN[domain]

      // Get values for this domain (no transformation needed - Polish uses pre-reversed values)
      const domainValues = domainQuestions.map(questionId => ({
        questionId,
        value: data[questionId as keyof typeof data],
      }))

      // Count missing values
      const missingInDomain = domainValues.filter(
        item => item.value === undefined,
      ).length

      // Check if too many missing in this domain
      if (missingInDomain > maxMissing) {
        return null
      }

      // If no missing values, calculate directly
      if (missingInDomain === 0) {
        const values = domainValues.map(item => item.value as number)
        const rawScore = 4 * mean(values)
        const transformedScore = (rawScore - 4) * 6.25
        return round(transformedScore, ROUND_TO)
      }

      // WHO Methodology: Missing Value Imputation
      // "Where up to two items are missing, the mean of other items in the domain is substituted"
      // This allows the questionnaire to handle incomplete data while maintaining validity
      
      // Step 1: Calculate mean from present (non-missing) values
      const presentValues = domainValues
        .filter(item => item.value !== undefined)
        .map(item => item.value as number)

      const domainMean = mean(presentValues)

      // Replace missing values with domain mean
      const completeValues = domainValues.map(item =>
        item.value !== undefined ? item.value : domainMean,
      )

      const rawScore = 4 * mean(completeValues)
      const transformedScore = (rawScore - 4) * 6.25
      return round(transformedScore, ROUND_TO)
    }

    return {
      QUALITY_OF_LIFE: qualityOfLife,
      HEALTH_SATISFACTION: healthSatisfaction,
      PHYSICAL_HEALTH: calculateDomainScore('PHYSICAL_HEALTH'),
      PSYCHOLOGICAL_HEALTH: calculateDomainScore('PSYCHOLOGICAL_HEALTH'),
      SOCIAL_RELATIONSHIPS: calculateDomainScore('SOCIAL_RELATIONSHIPS'),
      ENVIRONMENT: calculateDomainScore('ENVIRONMENT'),
    }
  },
}
