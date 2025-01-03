import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/dast_10_test_responses'
import { dast_10 } from './dast_10'

const BEST_SCORE = 0
const MEDIAN_SCORE = 5
const WORST_SCORE = 10

const dast10_calculation = new Score(dast_10)

describe('dast_10', function () {
  it('dast_10 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('dast_10')
  })

  describe('basic assumptions', function () {
    const outcome = dast10_calculation.calculate({ payload: best_response })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = [
        'DAST10_SCORE',
        'DAST10_DEGREE_OF_PROBLEMS',
      ]

      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'DAST10_Q01',
          'DAST10_Q02',
          'DAST10_Q03',
          'DAST10_Q04',
          'DAST10_Q05',
          'DAST10_Q06',
          'DAST10_Q07',
          'DAST10_Q08',
          'DAST10_Q09',
          'DAST10_Q10',
        ]

        const configured_input_ids = Object.keys(dast10_calculation.inputSchema)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          dast10_calculation.calculate({
            payload: {
              DAST10_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = dast10_calculation.calculate({ payload: {} })

      it('should return null result for the score', function () {
        expect(outcome.DAST10_SCORE).toEqual(null)
      })

      it('should return null result for the interpretation', function () {
        expect(outcome.DAST10_DEGREE_OF_PROBLEMS).toEqual(null)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = dast10_calculation.calculate({ payload: best_response })

      it('should return the best score', function () {
        expect(outcome.DAST10_SCORE).toEqual(BEST_SCORE)
      })

      it('should return the "No problems reported" interpretation', function () {
        expect(outcome.DAST10_DEGREE_OF_PROBLEMS).toEqual(
          'No problems reported',
        )
      })
    })

    describe('when called with the median response', function () {
      const outcome = dast10_calculation.calculate({
        payload: median_response,
      })

      it('should return the median score', function () {
        expect(outcome.DAST10_SCORE).toEqual(MEDIAN_SCORE)
      })

      it('should return the "Moderate level" interpretation', function () {
        expect(outcome.DAST10_DEGREE_OF_PROBLEMS).toEqual('Moderate level')
      })
    })

    describe('when called with the worst response', function () {
      const outcome = dast10_calculation.calculate({
        payload: worst_response,
      })

      it('should return the worst score', function () {
        expect(outcome.DAST10_SCORE).toEqual(WORST_SCORE)
      })

      it('should return the "Severe level" interpretation', function () {
        expect(outcome.DAST10_DEGREE_OF_PROBLEMS).toEqual('Severe level')
      })
    })

    describe('when called with a random response', function () {
      const outcome = dast10_calculation.calculate({
        payload: random_response,
      })

      it('should return the expected score', function () {
        expect(outcome.DAST10_SCORE).toEqual(4)
      })

      it('should return the "Moderate level" interpretation', function () {
        expect(outcome.DAST10_DEGREE_OF_PROBLEMS).toEqual('Moderate level')
      })
    })
  })
})
