import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/cat_test_responses'
import { cat } from './cat'

const BEST_SCORE = 0
const MEDIAN_SCORE = 20
const WORST_SCORE = 40

const cat_calculation = new Score(cat)

describe('cat', function () {
  it('cat calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('cat')
  })

  describe('basic assumptions', function () {
    const outcome = cat_calculation.calculate({ payload: best_response })

    it('should return 2 calculation results', function () {
      expect(Object.keys(outcome).length).toEqual(2)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = ['CAT_POINTS', 'CAT_HEALTH_IMPACT']

      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          '1_COUGH',
          '2_PHLEGM',
          '3_CHEST_TIGHTNESS',
          '4_BREATHLESSNESS',
          '5_ACTIVITIES',
          '6_CONFIDENCE',
          '7_SLEEP',
          '8_ENERGY',
        ]

        const configured_input_ids = Object.keys(cat_calculation.inputSchema)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          cat_calculation.calculate({
            payload: {
              '1_COUGH': -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      it('should throw an error', function () {
        expect(() =>
          cat_calculation.calculate({
            payload: {},
          }),
        ).toThrow(ZodError)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = cat_calculation.calculate({ payload: best_response })

      it('should return the best score', function () {
        expect(outcome.CAT_POINTS).toEqual(BEST_SCORE)
      })

      it('should return the best health impact', function () {
        expect(outcome.CAT_HEALTH_IMPACT).toEqual('LOW')
      })
    })

    describe('when called with the median response', function () {
      const outcome = cat_calculation.calculate({ payload: median_response })

      it('should return the worst score', function () {
        expect(outcome.CAT_POINTS).toEqual(MEDIAN_SCORE)
      })

      it('should return the median health impact', function () {
        expect(outcome.CAT_HEALTH_IMPACT).toEqual('MEDIUM')
      })
    })

    describe('when called with the worst response', function () {
      const outcome = cat_calculation.calculate({ payload: worst_response })

      it('should return the worst score', function () {
        expect(outcome.CAT_POINTS).toEqual(WORST_SCORE)
      })

      it('should return the worst health impact', function () {
        expect(outcome.CAT_HEALTH_IMPACT).toEqual('VERY HIGH')
      })
    })

    describe('when called with a random response', function () {
      const outcome = cat_calculation.calculate({ payload: random_response })

      it('should return the expected score', function () {
        const EXPECTED_SCORE = 16

        expect(outcome.CAT_POINTS).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected health impact', function () {
        const EXPECTED_HEALTH_IMPACT = 'MEDIUM'

        expect(outcome.CAT_HEALTH_IMPACT).toEqual(EXPECTED_HEALTH_IMPACT)
      })
    })
  })
})
