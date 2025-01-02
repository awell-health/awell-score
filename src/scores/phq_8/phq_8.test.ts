import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  random_response,
  worst_response,
} from './__testdata__/phq_8_test_responses'
import { phq_8 } from './phq_8'

const BEST_SCORE = 0
const WORST_SCORE = 24

const phq_8_calculation = new Score(phq_8)

describe('phq_8', function () {
  it('phq_8 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('phq_8')
  })

  describe('basic assumptions', function () {
    const outcome = phq_8_calculation.calculate({ payload: best_response })

    it('should return 2 calculation results', function () {
      expect(Object.keys(outcome).length).toEqual(2)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = ['PHQ8_SCORE', 'PHQ8_INTERPRETATION']

      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'PHQ8_Q01',
          'PHQ8_Q02',
          'PHQ8_Q03',
          'PHQ8_Q04',
          'PHQ8_Q05',
          'PHQ8_Q06',
          'PHQ8_Q07',
          'PHQ8_Q08',
        ]

        const configured_input_ids = Object.keys(
          phq_8_calculation.inputSchemaAsObject.shape,
        )

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          phq_8_calculation.calculate({
            payload: {
              PHQ8_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          phq_8_calculation.calculate({
            payload: {},
          }),
        ).toThrow(ZodError)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = phq_8_calculation.calculate({ payload: best_response })

      it('should return the best score', function () {
        expect(outcome.PHQ8_SCORE).toEqual(BEST_SCORE)
      })

      it('should return the "None/minimal depression" interpretation', function () {
        expect(outcome.PHQ8_INTERPRETATION).toEqual('None/minimal depression')
      })
    })

    describe('when called with the worst response', function () {
      const outcome = phq_8_calculation.calculate({ payload: worst_response })

      it('should return the worst score', function () {
        expect(outcome.PHQ8_SCORE).toEqual(WORST_SCORE)
      })

      it('should return the "Severe depression" interpretation', function () {
        expect(outcome.PHQ8_INTERPRETATION).toEqual('Severe depression')
      })
    })

    describe('when called with a random response', function () {
      const outcome = phq_8_calculation.calculate({ payload: random_response })

      it('should return the expected score', function () {
        expect(outcome.PHQ8_SCORE).toEqual(7)
      })

      it('should return the "Mild depression" interpretation', function () {
        expect(outcome.PHQ8_INTERPRETATION).toEqual('Mild depression')
      })
    })
  })
})
