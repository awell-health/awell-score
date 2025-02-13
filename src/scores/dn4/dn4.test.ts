import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/dn4_test_responses'
import { dn4 } from './dn4'

const BEST_DN4_SCORE = 0
const MEDIAN_DN4_SCORE = 5
const WORST_DN4_SCORE = 10

const dn4_calculation = new Score(dn4)

describe('dn4', function () {
  it('dn4 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('dn4')
  })

  describe('basic assumptions', function () {
    const outcome = dn4_calculation.calculate({ payload: best_response })

    it('should return 3 calculation results', function () {
      expect(Object.keys(outcome)).toHaveLength(3)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = [
        'PATIENT_TOTAL_SCORE',
        'PATIENT_INTERVIEW_SCORE',
        'PATIENT_EXAMINIATION_SCORE',
      ]

      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'BURNING',
          'PAINFUL_COLD',
          'ELECTRIC_SHOCKS',
          'TINGLING',
          'PINS_AND_NEEDLES',
          'NUMBNESS',
          'ITCHING',
          'HYPOESTHESIA_TO_TOUCH',
          'HYPOESTHESIA_TO_PINPRICK',
          'BRUSHING',
        ]

        const configured_input_ids = Object.keys(dn4_calculation.inputSchema)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is not a boolean', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          dn4_calculation.calculate({
            payload: {
              BURNING: '2',
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = dn4_calculation.calculate({ payload: {} })

      it('should return null result for the "Patient interview" score', function () {
        expect(outcome.PATIENT_INTERVIEW_SCORE).toEqual(null)
      })

      it('should return null result for the "Patient examination" score', function () {
        expect(outcome.PATIENT_EXAMINIATION_SCORE).toEqual(null)
      })

      it('should return null result for the total score', function () {
        expect(outcome.PATIENT_TOTAL_SCORE).toEqual(null)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = dn4_calculation.calculate({ payload: best_response })

      it('should return the best "Patient interview" score', function () {
        const BEST_SCORE = 0
        expect(outcome.PATIENT_INTERVIEW_SCORE).toEqual(BEST_SCORE)
      })

      it('should return the best "Patient examiniation" score', function () {
        const BEST_SCORE = 0

        expect(outcome.PATIENT_EXAMINIATION_SCORE).toEqual(BEST_SCORE)
      })

      it('should return the best total score', function () {
        expect(outcome.PATIENT_TOTAL_SCORE).toEqual(BEST_DN4_SCORE)
      })
    })

    describe('when called with the median response', function () {
      const outcome = dn4_calculation.calculate({ payload: median_response })

      it('should return the expected "Patient interview" score', function () {
        const EXPECTED_SCORE = 5

        expect(outcome.PATIENT_INTERVIEW_SCORE).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected "Patient examiniation" score', function () {
        const EXPECTED_SCORE = 0

        expect(outcome.PATIENT_EXAMINIATION_SCORE).toEqual(EXPECTED_SCORE)
      })

      it('should return the median total score', function () {
        expect(outcome.PATIENT_TOTAL_SCORE).toEqual(MEDIAN_DN4_SCORE)
      })
    })

    describe('when called with the worst response', function () {
      const outcome = dn4_calculation.calculate({ payload: worst_response })

      it('should return the worst "Patient interview" score', function () {
        const BEST_SCORE = 7

        expect(outcome.PATIENT_INTERVIEW_SCORE).toEqual(BEST_SCORE)
      })

      it('should return the worst "Patient examiniation" score', function () {
        const BEST_SCORE = 3

        expect(outcome.PATIENT_EXAMINIATION_SCORE).toEqual(BEST_SCORE)
      })

      it('should return the worst total score', function () {
        expect(outcome.PATIENT_TOTAL_SCORE).toEqual(WORST_DN4_SCORE)
      })
    })

    describe('when called with a random response', function () {
      const outcome = dn4_calculation.calculate({ payload: random_response })

      it('should return the expected "Patient interview" score', function () {
        const EXPECTED_SCORE = 2

        expect(outcome.PATIENT_INTERVIEW_SCORE).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected "Patient examiniation" score', function () {
        const EXPECTED_SCORE = 2

        expect(outcome.PATIENT_EXAMINIATION_SCORE).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score', function () {
        const EXPECTED_SCORE = 4

        expect(outcome.PATIENT_TOTAL_SCORE).toEqual(EXPECTED_SCORE)
      })
    })
  })
})
