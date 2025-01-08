import { ZodError } from 'zod'
import { Score } from '../../../classes'
import { ScoreLibrary } from '../../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/visa_a_test_responses'
import { visa_a } from './visa_a'

const VISA_A_MIN_SCORE = 0
const VISA_A_MEDIAN_SCORE = 50
const VISA_A_MAX_SCORE = 100

const visa_a_calculation = new Score(visa_a)

describe('visa_a', function () {
  it('visa_a calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('visa_a')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'VISA_A_Q1',
        'VISA_A_Q02',
        'VISA_A_Q03',
        'VISA_A_Q04',
        'VISA_A_Q05',
        'VISA_A_Q06',
        'VISA_A_Q07',
        'VISA_A_Q08',
        'VISA_A_Q08_A',
        'VISA_A_Q08_B',
        'VISA_A_Q08_C',
      ]

      const configured_calculation_input_ids = Object.keys(
        visa_a_calculation.inputSchema,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = visa_a_calculation.calculate({ payload: min_response })

    it('should calculate a single score', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(['VISA_A'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when a minimum response is passed', function () {
      it('should return the minimum score', function () {
        const score = visa_a_calculation.calculate({ payload: min_response })

        expect(score.VISA_A).toEqual(VISA_A_MIN_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      it('should return the median score', function () {
        const score = visa_a_calculation.calculate({
          payload: median_response,
        })

        expect(score.VISA_A).toEqual(VISA_A_MEDIAN_SCORE)
      })
    })

    describe('when a maximum response is passed', function () {
      it('should return the maximum score', function () {
        const score = visa_a_calculation.calculate({ payload: max_response })

        expect(score.VISA_A).toEqual(VISA_A_MAX_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      it('should return the expected score', function () {
        const score = visa_a_calculation.calculate({ payload: random_response })

        const EXPECTED_SCORE = 51

        expect(score.VISA_A).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should throw a ZodError', function () {
        expect(() => visa_a_calculation.calculate({ payload: {} })).toThrow(
          ZodError,
        )
      })
    })

    describe('when an more than one subquestion of Q08 is passed', function () {
      it('should throw an error', function () {
        expect(() =>
          visa_a_calculation.calculate({
            payload: {
              VISA_A_Q01: 0,
              VISA_A_Q02: 0,
              VISA_A_Q03: 0,
              VISA_A_Q04: 0,
              VISA_A_Q05: 0,
              VISA_A_Q06: 0,
              VISA_A_Q07: 0,
              VISA_A_Q08: 'A',
              VISA_A_Q08_A: 1,
              VISA_A_Q08_B: 2,
              VISA_A_Q08_C: 3,
            },
          }),
        ).toThrow()
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          visa_a_calculation.calculate({
            payload: {
              VISA_A_Q1: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not one of the allowed answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          visa_a_calculation.calculate({
            payload: {
              VISA_A_Q1: 11,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
