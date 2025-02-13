import { ZodError } from 'zod'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/cms_test_responses'
import { constant_murley_score } from './constant_murley_score'
import { Score } from '../../../classes'
import { ScoreLibrary } from '../../library'

const BEST_SCORES = {
  PAIN_SUBSCALE: 15,
  ADL_SUBSCALE: 20,
  MOBILITY_SUBSCALE: 40,
  STRENGTH_SUBSCALE: 25,
  TOTAL: 100,
}

const MEDIAN_SCORES = {
  PAIN_SUBSCALE: 7,
  ADL_SUBSCALE: 10,
  MOBILITY_SUBSCALE: 20,
  STRENGTH_SUBSCALE: 13,
  TOTAL: 50,
}

const WORST_SCORES = {
  PAIN_SUBSCALE: 0,
  ADL_SUBSCALE: 0,
  MOBILITY_SUBSCALE: 0,
  STRENGTH_SUBSCALE: 0,
  TOTAL: 0,
}

const cms_calculation = new Score(constant_murley_score)

describe('constant_murley_score_orthotoolkit', function () {
  it('constant_murley_score_orthotoolkit calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('constant_murley_score_orthotoolkit')
  })

  describe('specific_steps_cms_calc', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'Q01_PAIN_SCORE',
          'Q02_SLEEP_SCORE',
          'Q03_WORK_ADL_SCORE',
          'Q04_SPORTS_HOBBY_SCORE',
          'Q05_ADL_FUNCTIONING_SCORE',
          'Q06_FLEXION_ROM',
          'Q07_ABDUCTION_ROM',
          'Q08_ENDOROTATION_ROM',
          'Q09_EXOROTATION_ROM',
          'Q10_ATTEMPT_1',
          'Q11_ATTEMPT_2',
          'Q12_ATTEMPT_3',
        ]

        const configured_input_ids = Object.keys(cms_calculation.inputSchema)
        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('each calculated score includes the correct output result and correct score title', function () {
      const outcome = cms_calculation.calculate({ payload: worst_response })

      it('should return 5 calculations results', function () {
        expect(Object.keys(outcome).length).toEqual(5)
      })

      it('should have all the correct calculation ids', function () {
        const EXPECTED_CALCULATION_IDS = [
          'TS',
          'PAIN',
          'ADL',
          'MOBILITY',
          'STRENGTH',
        ]

        const extracted_calculation_ids_from_outcome = Object.keys(outcome)

        expect(EXPECTED_CALCULATION_IDS).toEqual(
          extracted_calculation_ids_from_outcome,
        )
      })
    })

    describe('a score is only calculated when all mandatory fields are entered', function () {
      describe('when an empty response is passed', function () {
        const outcome = cms_calculation.calculate({
          payload: {},
          opts: {
            returnMissingOnZodError: true,
          },
        })

        it('should return null for the "Pain" subscale', function () {
          expect(outcome.PAIN).toEqual(null)
        })

        it('should return null for the "ADL" subscale', function () {
          expect(outcome.ADL).toEqual(null)
        })

        it('should return null for the "Mobility" subscale', function () {
          expect(outcome.MOBILITY).toEqual(null)
        })

        it('should return null for the "Strength" subscale', function () {
          expect(outcome.STRENGTH).toEqual(null)
        })

        it('should return null for the total score', function () {
          expect(outcome.TS).toEqual(null)
        })
      })
    })

    describe('each calculated score includes the correct formula and outputs the correct result', function () {
      describe('when worst response is passed', function () {
        const outcome = cms_calculation.calculate({ payload: worst_response })

        it('should return the worst score for the "Pain" subscale', function () {
          expect(outcome.PAIN).toEqual(WORST_SCORES.PAIN_SUBSCALE)
        })

        it('should return the worst score for the "ADL" subscale', function () {
          expect(outcome.ADL).toEqual(WORST_SCORES.ADL_SUBSCALE)
        })

        it('should return the worst score for the "Mobility" subscale', function () {
          expect(outcome.MOBILITY).toEqual(WORST_SCORES.MOBILITY_SUBSCALE)
        })

        it('should return the worst score for the "Strength" subscale', function () {
          expect(outcome.STRENGTH).toEqual(WORST_SCORES.STRENGTH_SUBSCALE)
        })

        it('should return the worst total score', function () {
          expect(outcome.TS).toEqual(WORST_SCORES.TOTAL)
        })
      })

      describe('when a median response is passed', function () {
        const outcome = cms_calculation.calculate({
          payload: median_response,
        })

        it('should return the median score for the "Pain" subscale', function () {
          expect(outcome.PAIN).toEqual(MEDIAN_SCORES.PAIN_SUBSCALE)
        })

        it('should return the median score for the "ADL" subscale', function () {
          expect(outcome.ADL).toEqual(MEDIAN_SCORES.ADL_SUBSCALE)
        })

        it('should return the median score for the "Mobility" subscale', function () {
          expect(outcome.MOBILITY).toEqual(MEDIAN_SCORES.MOBILITY_SUBSCALE)
        })

        it('should return the median score for the "Strength" subscale', function () {
          expect(outcome.STRENGTH).toEqual(MEDIAN_SCORES.STRENGTH_SUBSCALE)
        })

        it('should return the median total score', function () {
          expect(outcome.TS).toEqual(MEDIAN_SCORES.TOTAL)
        })
      })

      describe('when best response is passed', function () {
        const outcome = cms_calculation.calculate({ payload: best_response })

        it('should return the best score for the "Pain" subscale', function () {
          expect(outcome.PAIN).toEqual(BEST_SCORES.PAIN_SUBSCALE)
        })

        it('should return the best score for the "ADL" subscale', function () {
          expect(outcome.ADL).toEqual(BEST_SCORES.ADL_SUBSCALE)
        })

        it('should return the best score for the "Mobility" subscale', function () {
          expect(outcome.MOBILITY).toEqual(BEST_SCORES.MOBILITY_SUBSCALE)
        })

        it('should return the best score for the "Strength" subscale', function () {
          expect(outcome.STRENGTH).toEqual(BEST_SCORES.STRENGTH_SUBSCALE)
        })

        it('should return the best total score', function () {
          expect(outcome.TS).toEqual(BEST_SCORES.TOTAL)
        })
      })

      describe('when a random response is passed', function () {
        const outcome = cms_calculation.calculate({ payload: random_response })

        it('should return the expected score for the "Pain" subscale', function () {
          expect(outcome.PAIN).toEqual(11)
        })

        it('should return the expected score for the "ADL" subscale', function () {
          expect(outcome.ADL).toEqual(8)
        })

        it('should return the expected score for the "Mobility" subscale', function () {
          expect(outcome.MOBILITY).toEqual(12)
        })

        it('should return the expected score for the "Strength" subscale', function () {
          expect(outcome.STRENGTH).toEqual(25)
        })

        it('should return the expected total score', function () {
          expect(outcome.TS).toEqual(56)
        })
      })
    })

    describe('values entered by the user are checked to verify they are inside specified ranges', function () {
      describe('when an answer is not a number', function () {
        it('should throw an error', function () {
          expect(() =>
            cms_calculation.calculate({
              payload: {
                Q01_PAIN_SCORE: "I'm not a number",
              },
            }),
          ).toThrow(ZodError)
        })
      })
      describe('when an answer is not allowed (e.g. is below the expected range)', function () {
        it('should throw an error', function () {
          expect(() =>
            cms_calculation.calculate({
              payload: {
                Q01_PAIN_SCORE: -1,
              },
            }),
          ).toThrow(ZodError)
        })
      })
      describe('when an answer is not allowed (e.g. is above the expected range)', function () {
        it('should return throw an error', function () {
          expect(() =>
            cms_calculation.calculate({
              payload: {
                Q01_PAIN_SCORE: 16,
              },
            }),
          ).toThrow(ZodError)
        })
      })
    })
  })
})
