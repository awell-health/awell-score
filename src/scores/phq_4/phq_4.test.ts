import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/phq_4_test_responses'
import { phq_4 } from './phq_4'

const phq_4_calculation = new Score(phq_4)

describe('phq_4', function () {
  it('phq_4 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('phq_4')
  })

  describe('basic assumptions', function () {
    const outcome = phq_4_calculation.calculate({ payload: best_response })

    it('should return 6 calculation results', function () {
      expect(Object.keys(outcome)).toHaveLength(6)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = [
        'PHQ4_ANXIETY_SCORE',
        'PHQ4_ANXIETY_POSITIVE_SCREENING',
        'PHQ4_DEPRESSION_SCORE',
        'PHQ4_DEPRESSION_POSITIVE_SCREENING',
        'PHQ4_TOTAL_SCORE',
        'PHQ4_TOTAL_SCORE_INTERPRETATION',
      ]

      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'PHQ4_Q01',
          'PHQ4_Q02',
          'PHQ4_Q03',
          'PHQ4_Q04',
        ]

        const configured_input_ids = Object.keys(
          phq_4_calculation.inputSchemaAsObject.shape,
        )

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          phq_4_calculation.calculate({
            payload: {
              PHQ4_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          phq_4_calculation.calculate({
            payload: {},
          }),
        ).toThrow(ZodError)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = phq_4_calculation.calculate({ payload: best_response })

      it('should return the best anxiety score', function () {
        expect(outcome.PHQ4_ANXIETY_SCORE).toEqual(0)
      })

      it('should return "false" on positive anxiety score', function () {
        expect(outcome.PHQ4_ANXIETY_POSITIVE_SCREENING).toEqual(false)
      })

      it('should return the best depression score', function () {
        expect(outcome.PHQ4_DEPRESSION_SCORE).toEqual(0)
      })

      it('should return "false" on positive depression score', function () {
        expect(outcome.PHQ4_DEPRESSION_POSITIVE_SCREENING).toEqual(false)
      })

      it('should return the best total score', function () {
        expect(outcome.PHQ4_TOTAL_SCORE).toEqual(0)
      })

      it('should return "Normal" as the interpretation for the total score', function () {
        expect(outcome.PHQ4_TOTAL_SCORE_INTERPRETATION).toEqual('Normal')
      })
    })

    describe('when called with the median response', function () {
      const outcome = phq_4_calculation.calculate({
        payload: median_response,
      })

      it('should return "3" for the anxiety score', function () {
        expect(outcome.PHQ4_ANXIETY_SCORE).toEqual(3)
      })

      it('should return "true" on positive anxiety score', function () {
        expect(outcome.PHQ4_ANXIETY_POSITIVE_SCREENING).toEqual(true)
      })

      it('should return "3" for the depression score', function () {
        expect(outcome.PHQ4_DEPRESSION_SCORE).toEqual(3)
      })

      it('should return "true" on positive depression score', function () {
        expect(outcome.PHQ4_DEPRESSION_POSITIVE_SCREENING).toEqual(true)
      })

      it('should return "6" on the total score', function () {
        expect(outcome.PHQ4_TOTAL_SCORE).toEqual(6)
      })

      it('should return "Moderate" as the interpretation for the total score', function () {
        expect(outcome.PHQ4_TOTAL_SCORE_INTERPRETATION).toEqual('Moderate')
      })
    })

    describe('when called with the worst response', function () {
      const outcome = phq_4_calculation.calculate({
        payload: worst_response,
      })

      it('should return the worst anxiety score', function () {
        expect(outcome.PHQ4_ANXIETY_SCORE).toEqual(6)
      })

      it('should return "true" on positive anxiety score', function () {
        expect(outcome.PHQ4_ANXIETY_POSITIVE_SCREENING).toEqual(true)
      })

      it('should return the worst depression score', function () {
        expect(outcome.PHQ4_DEPRESSION_SCORE).toEqual(6)
      })

      it('should return "true" on positive depression score', function () {
        expect(outcome.PHQ4_DEPRESSION_POSITIVE_SCREENING).toEqual(true)
      })

      it('should return the worst total score', function () {
        expect(outcome.PHQ4_TOTAL_SCORE).toEqual(12)
      })

      it('should return "Severe" as the interpretation for the total score', function () {
        expect(outcome.PHQ4_TOTAL_SCORE_INTERPRETATION).toEqual('Severe')
      })
    })

    describe('when called with a random response', function () {
      const outcome = phq_4_calculation.calculate({
        payload: random_response,
      })

      it('should return "1" on the anxiety score', function () {
        expect(outcome.PHQ4_ANXIETY_SCORE).toEqual(1)
      })

      it('should return "false" on positive anxiety score', function () {
        expect(outcome.PHQ4_ANXIETY_POSITIVE_SCREENING).toEqual(false)
      })

      it('should return "4" on the depression score', function () {
        expect(outcome.PHQ4_DEPRESSION_SCORE).toEqual(4)
      })

      it('should return "true" on positive depression score', function () {
        expect(outcome.PHQ4_DEPRESSION_POSITIVE_SCREENING).toEqual(true)
      })

      it('should return the best total score', function () {
        expect(outcome.PHQ4_TOTAL_SCORE).toEqual(5)
      })

      it('should return "Mild" as the interpretation for the total score', function () {
        expect(outcome.PHQ4_TOTAL_SCORE_INTERPRETATION).toEqual('Mild')
      })
    })
  })
})
