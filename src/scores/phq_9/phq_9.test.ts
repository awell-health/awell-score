import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  random_response,
  worst_response,
} from './__testdata__/phq_9_test_responses'
import { phq_9 } from './phq_9'

const BEST_SCORE = 0
const WORST_SCORE = 27

const phq_9_calculation = new Score(phq_9)

describe('phq_9', function () {
  it('phq_9 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('phq_9')
  })

  describe('basic assumptions', function () {
    const outcome = phq_9_calculation.calculate({ payload: best_response })

    it('should return 2 calculation results', function () {
      expect(Object.keys(outcome).length).toEqual(2)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = ['PHQ9_SCORE', 'PHQ9_INTERPRETATION']

      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'PHQ9_Q01',
          'PHQ9_Q02',
          'PHQ9_Q03',
          'PHQ9_Q04',
          'PHQ9_Q05',
          'PHQ9_Q06',
          'PHQ9_Q07',
          'PHQ9_Q08',
          'PHQ9_Q09',
        ]

        const configured_input_ids = Object.keys(
          phq_9_calculation.inputSchemaAsObject.shape,
        )

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          phq_9_calculation.calculate({
            payload: {
              PHQ9_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      it('should throw a ZodError', function () {
        expect(() => phq_9_calculation.calculate({ payload: {} })).toThrow(
          ZodError,
        )
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = phq_9_calculation.calculate({ payload: best_response })

      it('should return the best score', function () {
        expect(outcome.PHQ9_SCORE).toEqual(BEST_SCORE)
      })

      it('should return the "None/minimal depression" interpretation', function () {
        expect(outcome.PHQ9_INTERPRETATION).toEqual('None/minimal depression')
      })
    })

    describe('when called with the worst response', function () {
      const outcome = phq_9_calculation.calculate({ payload: worst_response })

      it('should return the worst score', function () {
        expect(outcome.PHQ9_SCORE).toEqual(WORST_SCORE)
      })

      it('should return the "Severe depression" interpretation', function () {
        expect(outcome.PHQ9_INTERPRETATION).toEqual('Severe depression')
      })
    })

    describe('when called with a random response', function () {
      const outcome = phq_9_calculation.calculate({
        payload: random_response,
      })

      it('should return the expected score', function () {
        expect(outcome.PHQ9_SCORE).toEqual(10)
      })

      it('should return the "Moderate depression" interpretation', function () {
        expect(outcome.PHQ9_INTERPRETATION).toEqual('Moderate depression')
      })
    })
  })
})
