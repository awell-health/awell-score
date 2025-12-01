import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/whoqol_bref_test_responses'
import { WHOQOL_BREF_DOMAINS } from './definition/whoqol_bref_questions'
import { whoqol_bref } from './whoqol_bref'

const whoqol_bref_calculation = new Score(whoqol_bref)

describe('whoqol_bref', function () {
  it('whoqol_bref calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('whoqol_bref')
  })

  describe('the score includes the correct input fields', function () {
    it('should have all the expected input ids configured', function () {
      const EXPECTED_INPUT_IDS = [
        'WHOQOL_BREF_Q01',
        'WHOQOL_BREF_Q02',
        'WHOQOL_BREF_Q03',
        'WHOQOL_BREF_Q04',
        'WHOQOL_BREF_Q05',
        'WHOQOL_BREF_Q06',
        'WHOQOL_BREF_Q07',
        'WHOQOL_BREF_Q08',
        'WHOQOL_BREF_Q09',
        'WHOQOL_BREF_Q10',
        'WHOQOL_BREF_Q11',
        'WHOQOL_BREF_Q12',
        'WHOQOL_BREF_Q13',
        'WHOQOL_BREF_Q14',
        'WHOQOL_BREF_Q15',
        'WHOQOL_BREF_Q16',
        'WHOQOL_BREF_Q17',
        'WHOQOL_BREF_Q18',
        'WHOQOL_BREF_Q19',
        'WHOQOL_BREF_Q20',
        'WHOQOL_BREF_Q21',
        'WHOQOL_BREF_Q22',
        'WHOQOL_BREF_Q23',
        'WHOQOL_BREF_Q24',
        'WHOQOL_BREF_Q25',
        'WHOQOL_BREF_Q26',
      ]

      const configured_input_ids = Object.keys(
        whoqol_bref_calculation.inputSchema,
      )

      expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
    })

    it('should have the expected questions for Physical Health domain', function () {
      const EXPECTED_QUESTION_IDS = [
        'WHOQOL_BREF_Q03',
        'WHOQOL_BREF_Q04',
        'WHOQOL_BREF_Q10',
        'WHOQOL_BREF_Q15',
        'WHOQOL_BREF_Q16',
        'WHOQOL_BREF_Q17',
        'WHOQOL_BREF_Q18',
      ]

      expect(EXPECTED_QUESTION_IDS).toEqual(
        WHOQOL_BREF_DOMAINS.PHYSICAL_HEALTH,
      )
    })

    it('should have the expected questions for Psychological Health domain', function () {
      const EXPECTED_QUESTION_IDS = [
        'WHOQOL_BREF_Q05',
        'WHOQOL_BREF_Q06',
        'WHOQOL_BREF_Q07',
        'WHOQOL_BREF_Q11',
        'WHOQOL_BREF_Q19',
        'WHOQOL_BREF_Q26',
      ]

      expect(EXPECTED_QUESTION_IDS).toEqual(
        WHOQOL_BREF_DOMAINS.PSYCHOLOGICAL_HEALTH,
      )
    })

    it('should have the expected questions for Social Relationships domain', function () {
      const EXPECTED_QUESTION_IDS = [
        'WHOQOL_BREF_Q20',
        'WHOQOL_BREF_Q21',
        'WHOQOL_BREF_Q22',
      ]

      expect(EXPECTED_QUESTION_IDS).toEqual(
        WHOQOL_BREF_DOMAINS.SOCIAL_RELATIONSHIPS,
      )
    })

    it('should have the expected questions for Environment domain', function () {
      const EXPECTED_QUESTION_IDS = [
        'WHOQOL_BREF_Q08',
        'WHOQOL_BREF_Q09',
        'WHOQOL_BREF_Q12',
        'WHOQOL_BREF_Q13',
        'WHOQOL_BREF_Q14',
        'WHOQOL_BREF_Q23',
        'WHOQOL_BREF_Q24',
        'WHOQOL_BREF_Q25',
      ]

      expect(EXPECTED_QUESTION_IDS).toEqual(WHOQOL_BREF_DOMAINS.ENVIRONMENT)
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    it('should return a score for all 6 outputs', function () {
      const score = whoqol_bref_calculation.calculate({
        payload: best_response,
      })

      expect(score).toHaveProperty('QUALITY_OF_LIFE')
      expect(score).toHaveProperty('HEALTH_SATISFACTION')
      expect(score).toHaveProperty('PHYSICAL_HEALTH')
      expect(score).toHaveProperty('PSYCHOLOGICAL_HEALTH')
      expect(score).toHaveProperty('SOCIAL_RELATIONSHIPS')
      expect(score).toHaveProperty('ENVIRONMENT')
    })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'QUALITY_OF_LIFE',
        'HEALTH_SATISFACTION',
        'PHYSICAL_HEALTH',
        'PSYCHOLOGICAL_HEALTH',
        'SOCIAL_RELATIONSHIPS',
        'ENVIRONMENT',
      ]

      const configured_calculation_id = Object.keys(
        whoqol_bref_calculation.outputSchema,
      )

      expect(EXPECTED_CALCULATION_IDS).toEqual(configured_calculation_id)
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return null for all outputs (all questions missing)', function () {
        const score = whoqol_bref_calculation.calculate({ payload: {} })

        expect(score.QUALITY_OF_LIFE).toBeNull()
        expect(score.HEALTH_SATISFACTION).toBeNull()
        expect(score.PHYSICAL_HEALTH).toBeNull()
        expect(score.PSYCHOLOGICAL_HEALTH).toBeNull()
        expect(score.SOCIAL_RELATIONSHIPS).toBeNull()
        expect(score.ENVIRONMENT).toBeNull()
      })
    })

    describe('when ≤20% questions missing but within per-domain limits', function () {
      it('should still calculate scores for domains with sufficient data', function () {
        // Missing 5 out of 26 = 19% (within 20% limit)
        // Physical Health: missing 1 (Q03) out of 7 - within limit (2 allowed)
        // Psychological: missing 2 (Q05, Q06) out of 6 - at limit (2 allowed)
        // Social: missing 0 out of 3 - within limit
        // Environment: missing 2 (Q08, Q09) out of 8 - at limit (2 allowed)
        const response = {
          ...best_response,
          WHOQOL_BREF_Q03: undefined, // Physical domain
          WHOQOL_BREF_Q05: undefined, // Psychological domain
          WHOQOL_BREF_Q06: undefined, // Psychological domain
          WHOQOL_BREF_Q08: undefined, // Environment domain
          WHOQOL_BREF_Q09: undefined, // Environment domain
        }

        const score = whoqol_bref_calculation.calculate({ payload: response })

        // Q1 and Q2 should have values (not missing)
        expect(score.QUALITY_OF_LIFE).not.toBeNull()
        expect(score.HEALTH_SATISFACTION).not.toBeNull()
        
        // All domains should calculate (missing data within per-domain limits)
        expect(score.PHYSICAL_HEALTH).not.toBeNull()
        expect(score.PSYCHOLOGICAL_HEALTH).not.toBeNull()
        expect(score.SOCIAL_RELATIONSHIPS).not.toBeNull()
        expect(score.ENVIRONMENT).not.toBeNull()
      })
    })

    describe('when >20% of questions are missing', function () {
      it('should return null for all outputs (entire questionnaire invalid)', function () {
        // Missing 6 out of 26 = 23% (exceeds 20% limit)
        const response = {
          ...best_response,
          WHOQOL_BREF_Q01: undefined,
          WHOQOL_BREF_Q02: undefined,
          WHOQOL_BREF_Q03: undefined,
          WHOQOL_BREF_Q04: undefined,
          WHOQOL_BREF_Q05: undefined,
          WHOQOL_BREF_Q06: undefined,
        }

        const score = whoqol_bref_calculation.calculate({ payload: response })

        // All outputs should be null due to 20% overall rule
        expect(score.QUALITY_OF_LIFE).toBeNull()
        expect(score.HEALTH_SATISFACTION).toBeNull()
        expect(score.PHYSICAL_HEALTH).toBeNull()
        expect(score.PSYCHOLOGICAL_HEALTH).toBeNull()
        expect(score.SOCIAL_RELATIONSHIPS).toBeNull()
        expect(score.ENVIRONMENT).toBeNull()
      })
    })

    describe('when one domain has too many missing questions', function () {
      it('should return null only for that domain (Physical Health)', function () {
        // Physical Health has 7 questions, max 2 missing allowed
        const response = {
          ...best_response,
          WHOQOL_BREF_Q03: undefined,
          WHOQOL_BREF_Q04: undefined,
          WHOQOL_BREF_Q10: undefined, // 3 missing > 2 allowed
        }

        const score = whoqol_bref_calculation.calculate({ payload: response })

        expect(score.QUALITY_OF_LIFE).not.toBeNull()
        expect(score.HEALTH_SATISFACTION).not.toBeNull()
        expect(score.PHYSICAL_HEALTH).toBeNull()
        expect(score.PSYCHOLOGICAL_HEALTH).not.toBeNull()
        expect(score.SOCIAL_RELATIONSHIPS).not.toBeNull()
        expect(score.ENVIRONMENT).not.toBeNull()
      })

      it('should return null only for Social Relationships (max 1 missing allowed)', function () {
        // Social Relationships has 3 questions, max 1 missing allowed
        const response = {
          ...best_response,
          WHOQOL_BREF_Q20: undefined,
          WHOQOL_BREF_Q21: undefined, // 2 missing > 1 allowed
        }

        const score = whoqol_bref_calculation.calculate({ payload: response })

        expect(score.QUALITY_OF_LIFE).not.toBeNull()
        expect(score.HEALTH_SATISFACTION).not.toBeNull()
        expect(score.PHYSICAL_HEALTH).not.toBeNull()
        expect(score.PSYCHOLOGICAL_HEALTH).not.toBeNull()
        expect(score.SOCIAL_RELATIONSHIPS).toBeNull()
        expect(score.ENVIRONMENT).not.toBeNull()
      })
    })
  })

  describe('Q1 and Q2 standalone scores', function () {
    it('should return raw score for Q1 (Quality of Life)', function () {
      const response = { ...median_response, WHOQOL_BREF_Q01: 4 }
      const score = whoqol_bref_calculation.calculate({ payload: response })

      expect(score.QUALITY_OF_LIFE).toEqual(4)
    })

    it('should return raw score for Q2 (Health Satisfaction)', function () {
      const response = { ...median_response, WHOQOL_BREF_Q02: 5 }
      const score = whoqol_bref_calculation.calculate({ payload: response })

      expect(score.HEALTH_SATISFACTION).toEqual(5)
    })

    it('should return null for Q1 when missing', function () {
      const response = { ...median_response, WHOQOL_BREF_Q01: undefined }
      const score = whoqol_bref_calculation.calculate({ payload: response })

      expect(score.QUALITY_OF_LIFE).toBeNull()
    })

    it('should return null for Q2 when missing', function () {
      const response = { ...median_response, WHOQOL_BREF_Q02: undefined }
      const score = whoqol_bref_calculation.calculate({ payload: response })

      expect(score.HEALTH_SATISFACTION).toBeNull()
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when worst possible response is passed', function () {
      it('should return the worst scores', function () {
        const score = whoqol_bref_calculation.calculate({
          payload: worst_response,
        })

        expect(score.QUALITY_OF_LIFE).toEqual(1)
        expect(score.HEALTH_SATISFACTION).toEqual(1)
        expect(score.PHYSICAL_HEALTH).toBeLessThan(20)
        expect(score.PSYCHOLOGICAL_HEALTH).toBeLessThan(20)
        expect(score.SOCIAL_RELATIONSHIPS).toBeLessThan(20)
        expect(score.ENVIRONMENT).toBeLessThan(20)
      })
    })

    describe('when best possible response is passed', function () {
      it('should return the best scores', function () {
        const score = whoqol_bref_calculation.calculate({
          payload: best_response,
        })

        expect(score.QUALITY_OF_LIFE).toEqual(5)
        expect(score.HEALTH_SATISFACTION).toEqual(5)
        expect(score.PHYSICAL_HEALTH).toBeGreaterThan(80)
        expect(score.PSYCHOLOGICAL_HEALTH).toBeGreaterThan(80)
        expect(score.SOCIAL_RELATIONSHIPS).toBeGreaterThan(80)
        expect(score.ENVIRONMENT).toBeGreaterThan(80)
      })
    })

    describe('when median response is passed', function () {
      it('should return 3 for Q1/Q2 and 50 for domain scores', function () {
        const score = whoqol_bref_calculation.calculate({
          payload: median_response,
        })

        expect(score.QUALITY_OF_LIFE).toEqual(3)
        expect(score.HEALTH_SATISFACTION).toEqual(3)
        expect(score.PHYSICAL_HEALTH).toEqual(50)
        expect(score.PSYCHOLOGICAL_HEALTH).toEqual(50)
        expect(score.SOCIAL_RELATIONSHIPS).toEqual(50)
        expect(score.ENVIRONMENT).toEqual(50)
      })
    })

    describe('when random response is passed', function () {
      it('should calculate correct score for Physical Health', function () {
        const score = whoqol_bref_calculation.calculate({
          payload: random_response,
        })

        // Physical: Q03=2, Q04=1, Q10=4, Q15=4, Q16=3, Q17=4, Q18=4
        // Mean = (2+1+4+4+3+4+4)/7 = 22/7 = 3.142857
        // Raw = 4 * 3.142857 = 12.571429
        // Transformed = (12.571429 - 4) * 6.25 = 53.57
        expect(score.PHYSICAL_HEALTH).toEqual(53.57)
      })

      it('should calculate correct score for Psychological Health', function () {
        const score = whoqol_bref_calculation.calculate({
          payload: random_response,
        })

        // Psychological: Q05=4, Q06=3, Q07=4, Q11=5, Q19=5, Q26=2
        // Mean = (4+3+4+5+5+2)/6 = 23/6 = 3.833333
        // Raw = 4 * 3.833333 = 15.333333
        // Transformed = (15.333333 - 4) * 6.25 = 70.83
        expect(score.PSYCHOLOGICAL_HEALTH).toEqual(70.83)
      })

      it('should calculate correct score for Social Relationships', function () {
        const score = whoqol_bref_calculation.calculate({
          payload: random_response,
        })

        // Social: Q20=4, Q21=3, Q22=5
        // Mean = (4+3+5)/3 = 12/3 = 4
        // Raw = 4 * 4 = 16
        // Transformed = (16 - 4) * 6.25 = 75
        expect(score.SOCIAL_RELATIONSHIPS).toEqual(75)
      })

      it('should calculate correct score for Environment', function () {
        const score = whoqol_bref_calculation.calculate({
          payload: random_response,
        })

        // Environment: Q08=5, Q09=3, Q12=3, Q13=4, Q14=3, Q23=4, Q24=3, Q25=4
        // Mean = (5+3+3+4+3+4+3+4)/8 = 29/8 = 3.625
        // Raw = 4 * 3.625 = 14.5
        // Transformed = (14.5 - 4) * 6.25 = 65.625 = 65.63
        expect(score.ENVIRONMENT).toEqual(65.63)
      })
    })

    describe('missing data handling works correctly', function () {
      it('should replace missing values with domain average when within limits', function () {
        // Physical Health: missing 1 out of 7 (within limit of 2)
        const response = {
          ...best_response,
          WHOQOL_BREF_Q10: undefined, // Missing one question
        }

        const score = whoqol_bref_calculation.calculate({ payload: response })

        // Should still calculate (not null) because missing data is within limits
        expect(score.PHYSICAL_HEALTH).not.toBeNull()
        // With best response and one missing replaced by average, should be reasonably high
        expect(score.PHYSICAL_HEALTH).toBeGreaterThan(80)
      })

      it('should handle missing data at exactly the limit', function () {
        // Physical Health: missing exactly 2 (at limit)
        const response = {
          ...best_response,
          WHOQOL_BREF_Q10: undefined,
          WHOQOL_BREF_Q15: undefined,
        }

        const score = whoqol_bref_calculation.calculate({ payload: response })

        expect(score.PHYSICAL_HEALTH).not.toBeNull()
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          whoqol_bref_calculation.calculate({
            payload: {
              WHOQOL_BREF_Q01: 'not a number',
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          whoqol_bref_calculation.calculate({
            payload: {
              WHOQOL_BREF_Q01: 0,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          whoqol_bref_calculation.calculate({
            payload: {
              WHOQOL_BREF_Q01: 6,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
