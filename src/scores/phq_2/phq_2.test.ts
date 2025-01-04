import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/phq_2_test_responses'
import { phq_2 } from './phq_2'

const BEST_SCORE = 0
const MEDIAN_SCORE = 3
const WORST_SCORE = 6

const phq_2_calculation = new Score(phq_2)

describe('phq_2', function () {
  it('phq_2 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('phq_2')
  })

  describe('basic assumptions', function () {
    const outcome = phq_2_calculation.calculate({ payload: best_response })

    it('should return 1 calculation result', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = ['PHQ2_SCORE']

      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = ['PHQ2_Q01', 'PHQ2_Q02']

        const configured_input_ids = Object.keys(
          phq_2_calculation.inputSchemaAsObject.shape,
        )

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          phq_2_calculation.calculate({
            payload: {
              PHQ2_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      it('should return undefined result and a missing status for the score', function () {
        expect(() => phq_2_calculation.calculate({ payload: {} })).toThrow(
          ZodError,
        )
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = phq_2_calculation.calculate({ payload: best_response })

      it('should return the best score', function () {
        expect(outcome.PHQ2_SCORE).toEqual(BEST_SCORE)
      })
    })

    describe('when called with the median response', function () {
      const outcome = phq_2_calculation.calculate({
        payload: median_response,
      })

      it('should return the worst score', function () {
        expect(outcome.PHQ2_SCORE).toEqual(MEDIAN_SCORE)
      })
    })

    describe('when called with the worst response', function () {
      const outcome = phq_2_calculation.calculate({
        payload: worst_response,
      })

      it('should return the worst score', function () {
        expect(outcome.PHQ2_SCORE).toEqual(WORST_SCORE)
      })
    })

    describe('when called with a random response', function () {
      const outcome = phq_2_calculation.calculate({
        payload: random_response,
      })

      it('should return the expected score', function () {
        expect(outcome.PHQ2_SCORE).toEqual(3)
      })
    })
  })
})
