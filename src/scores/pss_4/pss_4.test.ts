import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/pss_4_test_responses'
import { pss_4 } from './pss_4'

const pss_4_calculation = new Score(pss_4)

describe('pss_4', function () {
  it('pss_4 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('pss_4')
  })

  describe('basic assumptions', function () {
    const outcome = pss_4_calculation.calculate({ payload: best_response })

    it('should return 1 calculation result', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = ['PSS4_SCORE']

      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'PSS4_Q01',
          'PSS4_Q02',
          'PSS4_Q03',
          'PSS4_Q04',
        ]

        const configured_input_ids = Object.keys(pss_4.inputSchema)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          pss_4_calculation.calculate({
            payload: {
              PSS4_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
        expect(() =>
          pss_4_calculation.calculate({
            payload: {
              PSS4_Q01: 5,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      it('should throw a ZodError', function () {
        expect(() => pss_4_calculation.calculate({ payload: {} })).toThrow(
          ZodError,
        )
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = pss_4_calculation.calculate({
        payload: best_response,
      })

      it('should return the best total score', function () {
        const score = outcome.PSS4_SCORE

        expect(score).toEqual(0)
      })
    })

    describe('when called with the median response', function () {
      const outcome = pss_4_calculation.calculate({
        payload: median_response,
      })

      it('should return "6" on the total score', function () {
        const score = outcome.PSS4_SCORE

        expect(score).toEqual(8)
      })
    })

    describe('when called with the worst response', function () {
      const outcome = pss_4_calculation.calculate({
        payload: worst_response,
      })

      it('should return the worst total score', function () {
        const score = outcome.PSS4_SCORE

        expect(score).toEqual(16)
      })
    })

    describe('when called with a random response', function () {
      const outcome = pss_4_calculation.calculate({
        payload: random_response,
      })

      it('should return the correct total score', function () {
        const score = outcome.PSS4_SCORE

        expect(score).toEqual(8)
      })
    })
  })
})
