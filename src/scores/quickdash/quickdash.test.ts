import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/quickdash_test_responses'
import { QUICKDASH_SUBSCALES } from './definition/quickdash_subscales'
import { quickdash } from './quickdash'

const WORST_SCORE = 100
const MEDIAN_SCORE = 50
const BEST_SCORE = 0

const quickdash_calculation = new Score(quickdash)

describe('quickdash', function () {
  it('quickdash calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('quickdash')
  })

  describe('the score includes the correct input fields', function () {
    it('should have all the expected input ids configured', function () {
      const EXPECTED_INPUT_IDS = [
        'QUICKDASH_Q01',
        'QUICKDASH_Q02',
        'QUICKDASH_Q03',
        'QUICKDASH_Q04',
        'QUICKDASH_Q05',
        'QUICKDASH_Q06',
        'QUICKDASH_Q07',
        'QUICKDASH_Q08',
        'QUICKDASH_Q09',
        'QUICKDASH_Q10',
        'QUICKDASH_Q11',
        'QUICKDASH_WORK_MODULE_Q01',
        'QUICKDASH_WORK_MODULE_Q02',
        'QUICKDASH_WORK_MODULE_Q03',
        'QUICKDASH_WORK_MODULE_Q04',
        'QUICKDASH_SPORTS_PERFORMING_ARTS_MODULE_Q01',
        'QUICKDASH_SPORTS_PERFORMING_ARTS_MODULE_Q02',
        'QUICKDASH_SPORTS_PERFORMING_ARTS_MODULE_Q03',
        'QUICKDASH_SPORTS_PERFORMING_ARTS_MODULE_Q04',
      ]

      const configured_input_ids = Object.keys(
        quickdash_calculation.inputSchema,
      )

      expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
    })

    it('should have the expected input idss configured for the "Quickdash" (main score) subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'QUICKDASH_Q01',
        'QUICKDASH_Q02',
        'QUICKDASH_Q03',
        'QUICKDASH_Q04',
        'QUICKDASH_Q05',
        'QUICKDASH_Q06',
        'QUICKDASH_Q07',
        'QUICKDASH_Q08',
        'QUICKDASH_Q09',
        'QUICKDASH_Q10',
        'QUICKDASH_Q11',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(QUICKDASH_SUBSCALES.QUICKDASH_SCORE)
    })

    it('should have the expected input idss configured for the "Work module" susbscale', function () {
      const EXPECTED_INPUT_IDS = [
        'QUICKDASH_WORK_MODULE_Q01',
        'QUICKDASH_WORK_MODULE_Q02',
        'QUICKDASH_WORK_MODULE_Q03',
        'QUICKDASH_WORK_MODULE_Q04',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(QUICKDASH_SUBSCALES.WORK_MODULE)
    })

    it('should have the expected input idss configured for the "Sports/Performing arts module" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'QUICKDASH_SPORTS_PERFORMING_ARTS_MODULE_Q01',
        'QUICKDASH_SPORTS_PERFORMING_ARTS_MODULE_Q02',
        'QUICKDASH_SPORTS_PERFORMING_ARTS_MODULE_Q03',
        'QUICKDASH_SPORTS_PERFORMING_ARTS_MODULE_Q04',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(
        QUICKDASH_SUBSCALES.SPORTS_PERFORMING_ARTS_MODULE,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = quickdash_calculation.calculate({ payload: best_response })

    it('should return a score for all 3 subscales', function () {
      expect(Object.keys(outcome)).toHaveLength(3)
    })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'QUICKDASH_SCORE',
        'WORK_MODULE',
        'SPORTS_PERFORMING_ARTS_MODULE',
      ]

      const extracted_calculation_ids_from_outcome = Object.keys(outcome)

      expect(EXPECTED_CALCULATION_IDS).toEqual(
        extracted_calculation_ids_from_outcome,
      )
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = quickdash_calculation.calculate({ payload: {} })

      it('should return null for the main QuickDash score', function () {
        expect(outcome.QUICKDASH_SCORE).toEqual(null)
      })

      it('should return null for the optional work module', function () {
        expect(outcome.WORK_MODULE).toEqual(null)
      })

      it('should return null for the optional sports/performing arts module score', function () {
        expect(outcome.SPORTS_PERFORMING_ARTS_MODULE).toEqual(null)
      })
    })

    describe('when there is only one input unanswered in the main QuickDASH subscale', function () {
      it('should return the expected score for the QuickDASH subscale (in this case the best score)', function () {
        const outcome = quickdash_calculation.calculate({
          payload: {
            QUICKDASH_Q01: 1,
            QUICKDASH_Q02: 1,
            QUICKDASH_Q03: 1,
            QUICKDASH_Q04: 1,
            QUICKDASH_Q05: 1,
            QUICKDASH_Q06: 1,
            QUICKDASH_Q07: 1,
            QUICKDASH_Q08: 1,
            QUICKDASH_Q09: 1,
            QUICKDASH_Q10: 1,
            // QUICKDASH_Q11: 1 - One missing item
          },
        })

        /**
         * Since all inputs are answered with 1
         * we expect that end result equals the best possible score
         */
        expect(outcome.QUICKDASH_SCORE).toEqual(BEST_SCORE)
      })
    })

    describe('when there is more than one input unanswered in the main QuickDASH subscale', function () {
      it('should return null as the result for that subscale', function () {
        const outcome = quickdash_calculation.calculate({
          payload: {
            QUICKDASH_Q01: 1,
            QUICKDASH_Q02: 1,
            QUICKDASH_Q03: 1,
            QUICKDASH_Q04: 1,
            QUICKDASH_Q05: 1,
            QUICKDASH_Q06: 1,
            QUICKDASH_Q07: 1,
            QUICKDASH_Q08: 1,
            QUICKDASH_Q09: 1,
            /**
             * Two answers left out of the scoring
             */
            // QUICKDASH_Q10: 1
            // QUICKDASH_Q11: 1
          },
        })

        expect(outcome.QUICKDASH_SCORE).toEqual(null)
      })
    })

    describe('when not all inputs (n=4) for one of the optional modules are filled in', function () {
      it('should return null as the result for that module/subscale', function () {
        const outcome = quickdash_calculation.calculate({
          payload: {
            QUICKDASH_SPORTS_PERFORMING_ARTS_MODULE_Q01: 1,
            /**
             * Only one answer in this subscale/module.
             * This means a score cannot be calculated.
             */
            // 'QUICKDASH_SPORTS_PERFORMING_ARTS_MODULE_Q02': 1
            // 'QUICKDASH_SPORTS_PERFORMING_ARTS_MODULE_Q03': 1
            // 'QUICKDASH_SPORTS_PERFORMING_ARTS_MODULE_Q04': 1
          },
        })

        expect(outcome.SPORTS_PERFORMING_ARTS_MODULE).toEqual(null)
      })
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when worst possible response is passed', function () {
      const outcome = quickdash_calculation.calculate({
        payload: worst_response,
      })

      it('should return the worst score for the main QuickDash score', function () {
        expect(outcome.QUICKDASH_SCORE).toEqual(WORST_SCORE)
      })

      it('should return the worst score for the optional work module', function () {
        expect(outcome.WORK_MODULE).toEqual(WORST_SCORE)
      })

      it('should return the worst score for the optional sports/performing arts module score', function () {
        expect(outcome.SPORTS_PERFORMING_ARTS_MODULE).toEqual(WORST_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      const outcome = quickdash_calculation.calculate({
        payload: median_response,
      })

      it('should return the median score for the main QuickDash score', function () {
        expect(outcome.QUICKDASH_SCORE).toEqual(MEDIAN_SCORE)
      })

      it('should return the median score for the optional work module', function () {
        expect(outcome.WORK_MODULE).toEqual(MEDIAN_SCORE)
      })

      it('should return the median score for the optional sports/performing arts module score', function () {
        expect(outcome.SPORTS_PERFORMING_ARTS_MODULE).toEqual(MEDIAN_SCORE)
      })
    })

    describe('when best possible response is passed', function () {
      const outcome = quickdash_calculation.calculate({
        payload: best_response,
      })

      it('should return the best score for the main QuickDash score', function () {
        expect(outcome.QUICKDASH_SCORE).toEqual(BEST_SCORE)
      })

      it('should return the best score for the optional work module', function () {
        expect(outcome.WORK_MODULE).toEqual(BEST_SCORE)
      })

      it('should return the best score for the optional sports/performing arts module score', function () {
        expect(outcome.SPORTS_PERFORMING_ARTS_MODULE).toEqual(BEST_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      const outcome = quickdash_calculation.calculate({
        payload: random_response,
      })

      it('should return the expected score for the main QuickDash score', function () {
        const EXPECTED_SCORE = 29.55
        expect(outcome.QUICKDASH_SCORE).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for the optional work module', function () {
        const EXPECTED_SCORE = 37.5
        expect(outcome.WORK_MODULE).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for the optional sports/performing arts module score', function () {
        const EXPECTED_SCORE = 31.25
        expect(outcome.SPORTS_PERFORMING_ARTS_MODULE).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          quickdash_calculation.calculate({
            payload: {
              ...worst_response,
              QUICKDASH_Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          quickdash_calculation.calculate({
            payload: {
              ...worst_response,
              QUICKDASH_Q01: 0,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          quickdash_calculation.calculate({
            payload: {
              ...worst_response,
              QUICKDASH_Q01: 6,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
