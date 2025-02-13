import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  random_response,
  worst_response,
} from './__testdata__/aq_10_test_responses'
import { aq_10 } from './aq_10'

const BEST_SCORE = 0
const WORST_SCORE = 10

const aq_10_calculation = new Score(aq_10)

describe('aq_10', function () {
  it('aq_10 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('aq_10')
  })

  describe('basic assumptions', function () {
    const outcome = aq_10_calculation.calculate({ payload: best_response })

    it('should return 2 calculation results', function () {
      expect(Object.keys(outcome).length).toEqual(2)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = ['AQ10_SCORE', 'AQ10_INTERPRETATION']

      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'AQ10_Q01',
          'AQ10_Q02',
          'AQ10_Q03',
          'AQ10_Q04',
          'AQ10_Q05',
          'AQ10_Q06',
          'AQ10_Q07',
          'AQ10_Q08',
          'AQ10_Q09',
          'AQ10_Q10',
        ]

        const configured_input_ids = Object.keys(aq_10_calculation.inputSchema)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          aq_10_calculation.calculate({
            payload: {
              AQ10_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = aq_10_calculation.calculate({
        payload: {},
        opts: {
          returnMissingOnZodError: true,
        },
      })

      it('should return null result', function () {
        expect(outcome.AQ10_SCORE).toEqual(null)
      })

      it('should return null result for the interpretation', function () {
        expect(outcome.AQ10_INTERPRETATION).toEqual(null)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = aq_10_calculation.calculate({ payload: best_response })

      it('should return the best score', function () {
        expect(outcome.AQ10_SCORE).toEqual(BEST_SCORE)
      })
    })

    describe('when called with the worst response', function () {
      const outcome = aq_10_calculation.calculate({ payload: worst_response })

      it('should return the worst score', function () {
        expect(outcome.AQ10_SCORE).toEqual(WORST_SCORE)
      })
    })

    describe('when called with a random response', function () {
      const outcome = aq_10_calculation.calculate({ payload: random_response })

      it('should return the expected score', function () {
        const EXPECTED_SCORE = 6
        expect(outcome.AQ10_SCORE).toEqual(EXPECTED_SCORE)
      })
    })
  })
})
