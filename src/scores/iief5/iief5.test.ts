import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/iief5_test_responses'
import { iief5 } from './iief5'

const iief5_calculation = new Score(iief5)

const BEST_SCORE = 25
const MEDIAN_SCORE = 15
const WORST_SCORE = 1

describe('iief5', function () {
  it('iief5 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('iief5')
  })

  describe('basic assumptions', function () {
    const outcome = iief5_calculation.calculate({ payload: best_response })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = [
        'IIEF5_TOTAL_SCORE',
        'IIEF5_INTERPRETATION',
      ]

      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'IIEF5_Q01',
          'IIEF5_Q02',
          'IIEF5_Q03',
          'IIEF5_Q04',
          'IIEF5_Q05',
        ]

        const configured_input_ids = Object.keys(iief5.inputSchema)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          iief5_calculation.calculate({
            payload: {
              IIEF5_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = iief5_calculation.calculate({
        payload: {},
      })

      it('should return null result for the total score', function () {
        expect(outcome.IIEF5_TOTAL_SCORE).toEqual(null)
      })

      it('should return null result for the interpretation', function () {
        expect(outcome.IIEF5_INTERPRETATION).toEqual(null)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = iief5_calculation.calculate({ payload: best_response })

      it('should return the best total score', function () {
        expect(outcome.IIEF5_TOTAL_SCORE).toEqual(BEST_SCORE)
      })

      it('should return "No erectile dysfunction" as the interpretation of the total score', function () {
        expect(outcome.IIEF5_INTERPRETATION).toEqual('No erectile dysfunction')
      })
    })

    describe('when called with the median response', function () {
      const outcome = iief5_calculation.calculate({ payload: median_response })

      it('should return the median total score', function () {
        expect(outcome.IIEF5_TOTAL_SCORE).toEqual(MEDIAN_SCORE)
      })

      it('should return "Mild to moderate erectile dysfunction" as the interpretation of the total score', function () {
        expect(outcome.IIEF5_INTERPRETATION).toEqual(
          'Mild to moderate erectile dysfunction',
        )
      })
    })

    describe('when called with the worst response', function () {
      const outcome = iief5_calculation.calculate({ payload: worst_response })

      it('should return the WORST total score', function () {
        expect(outcome.IIEF5_TOTAL_SCORE).toEqual(WORST_SCORE)
      })

      it('should return "Severe erectile dysfunction" as the interpretation of the total score', function () {
        expect(outcome.IIEF5_INTERPRETATION).toEqual(
          'Severe erectile dysfunction',
        )
      })
    })

    describe('when called with a random response', function () {
      const outcome = iief5_calculation.calculate({ payload: random_response })

      it('should return the expected total score', function () {
        expect(outcome.IIEF5_TOTAL_SCORE).toEqual(8)
      })

      it('should return "Moderate erectile dysfunction" as the interpretation of the total score', function () {
        expect(outcome.IIEF5_INTERPRETATION).toEqual(
          'Moderate erectile dysfunction',
        )
      })
    })

    describe('when called with an incomplete response', function () {
      const outcome = iief5_calculation.calculate({
        payload: {
          IIEF5_Q01: 2,
          IIEF5_Q02: 1,
          IIEF5_Q03: 0,
        },
      })

      it('should return the expected total score', function () {
        expect(outcome.IIEF5_TOTAL_SCORE).toEqual(3)
      })

      it('should return "Severe erectile dysfunction" as the interpretation of the total score', function () {
        expect(outcome.IIEF5_INTERPRETATION).toEqual(
          'Severe erectile dysfunction',
        )
      })
    })
  })
})
