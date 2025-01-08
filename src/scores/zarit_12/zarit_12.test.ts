import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/zarit_12_test_responses'
import { zarit_12 } from './zarit_12'

const ZARIT_12_MIN_SCORE = 0
const ZARIT_12_MEDIAN_SCORE = 24
const ZARIT_12_MAX_SCORE = 48

const zarit_12_calculation = new Score(zarit_12)

describe('zarit_12', function () {
  it('zarit_12 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('zarit_12')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'ZARIT_12_Q01',
        'ZARIT_12_Q02',
        'ZARIT_12_Q03',
        'ZARIT_12_Q04',
        'ZARIT_12_Q05',
        'ZARIT_12_Q06',
        'ZARIT_12_Q07',
        'ZARIT_12_Q08',
        'ZARIT_12_Q09',
        'ZARIT_12_Q10',
        'ZARIT_12_Q11',
        'ZARIT_12_Q12',
      ]

      const configured_calculation_input_ids = Object.keys(
        zarit_12_calculation.inputSchema,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = zarit_12_calculation.calculate({ payload: min_response })

    it('should calculate a single score', function () {
      expect(Object.keys(outcome)).toHaveLength(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(['ZARIT_12'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when a minimum response is passed', function () {
      it('should return the minimum score', function () {
        const outcome = zarit_12_calculation.calculate({
          payload: min_response,
        })

        expect(outcome.ZARIT_12).toEqual(ZARIT_12_MIN_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      it('should return the median score', function () {
        const outcome = zarit_12_calculation.calculate({
          payload: median_response,
        })

        expect(outcome.ZARIT_12).toEqual(ZARIT_12_MEDIAN_SCORE)
      })
    })

    describe('when a maximum response is passed', function () {
      it('should return the maximum score', function () {
        const outcome = zarit_12_calculation.calculate({
          payload: max_response,
        })

        expect(outcome.ZARIT_12).toEqual(ZARIT_12_MAX_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      it('should return the expected score', function () {
        const outcome = zarit_12_calculation.calculate({
          payload: random_response,
        })

        const EXPECTED_SCORE = 20

        expect(outcome.ZARIT_12).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          zarit_12_calculation.calculate({
            payload: {},
          }),
        ).toThrow(ZodError)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          zarit_12_calculation.calculate({
            payload: {
              ZARIT_12_Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          zarit_12_calculation.calculate({
            payload: {
              ZARIT_12_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          zarit_12_calculation.calculate({
            payload: {
              ZARIT_12_Q01: 5,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
