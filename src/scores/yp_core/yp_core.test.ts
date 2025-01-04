import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/yp_core_test_responses'
import { YP_CORE_INPUTS } from './definition'
import { yp_core } from './yp_core'

const yp_core_calculation = new Score(yp_core)

const BEST_SCORE = 0
const MEDIAN_SCORE = 20
const WORST_SCORE = 40

describe('yp_core', function () {
  it('yp_core calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('yp_core')
  })

  describe('basic assumptions', function () {
    const outcome = yp_core_calculation.calculate({ payload: best_response })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = [
        'YP_CORE_TOTAL_SCORE',
        'YP_CORE_INTERPRETATION',
      ]

      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'YP_CORE_Q01',
          'YP_CORE_Q02',
          'YP_CORE_Q03',
          'YP_CORE_Q04',
          'YP_CORE_Q05',
          'YP_CORE_Q06',
          'YP_CORE_Q07',
          'YP_CORE_Q08',
          'YP_CORE_Q09',
          'YP_CORE_Q10',
        ]

        const configured_input_ids = Object.keys(
          yp_core_calculation.inputSchema,
        )

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          yp_core_calculation.calculate({
            payload: {
              YP_CORE_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = yp_core_calculation.calculate({ payload: {} })

      it('should return null for the total score', function () {
        expect(outcome.YP_CORE_TOTAL_SCORE).toEqual(null)
      })

      it('should return null for the interpretation', function () {
        expect(outcome.YP_CORE_INTERPRETATION).toEqual(null)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = yp_core_calculation.calculate({ payload: best_response })

      it('should return the best total score', function () {
        expect(outcome.YP_CORE_TOTAL_SCORE).toEqual(BEST_SCORE)
      })

      it('should return "Healthy" as the interpretation of the total score', function () {
        expect(outcome.YP_CORE_INTERPRETATION).toEqual('Healthy')
      })
    })

    describe('when called with the median response', function () {
      const outcome = yp_core_calculation.calculate({
        payload: median_response,
      })

      it('should return the median total score', function () {
        expect(outcome.YP_CORE_TOTAL_SCORE).toEqual(MEDIAN_SCORE)
      })

      it('should return "Moderate-to-severe" as the interpretation of the total score', function () {
        expect(outcome.YP_CORE_INTERPRETATION).toEqual('Moderate-to-severe')
      })
    })

    describe('when called with the worst response', function () {
      const outcome = yp_core_calculation.calculate({
        payload: worst_response,
      })

      it('should return the WORST total score', function () {
        expect(outcome.YP_CORE_TOTAL_SCORE).toEqual(WORST_SCORE)
      })

      it('should return "Severe" as the interpretation of the total score', function () {
        expect(outcome.YP_CORE_INTERPRETATION).toEqual('Severe')
      })
    })

    describe('when called with a random response', function () {
      const outcome = yp_core_calculation.calculate({
        payload: random_response,
      })

      it('should return the expected total score', function () {
        expect(outcome.YP_CORE_TOTAL_SCORE).toEqual(15)
      })

      it('should return "Moderate" as the interpretation of the total score', function () {
        expect(outcome.YP_CORE_INTERPRETATION).toEqual('Moderate')
      })
    })

    describe('when called with an incomplete response', function () {
      const outcome = yp_core_calculation.calculate({
        payload: {
          YP_CORE_Q01: 2,
          YP_CORE_Q02: 1,
          YP_CORE_Q03: 0,
        },
      })

      it('should return the expected total score', function () {
        expect(outcome.YP_CORE_TOTAL_SCORE).toEqual(10)
      })

      it('should return "Moderate" as the interpretation of the total score', function () {
        expect(outcome.YP_CORE_INTERPRETATION).toEqual('Low')
      })
    })
  })
})
