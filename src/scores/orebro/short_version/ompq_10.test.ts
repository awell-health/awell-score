import { ZodError } from 'zod'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/ompq_10_form_responses'
import { ompq_10 } from './ompq_10'
import { Score } from '../../../classes'
import { ScoreLibrary } from '../../library'

const ompq_10_calculation = new Score(ompq_10)

const OREBRO_MIN_SCORE = 1
const OREBRO_MEDIAN_SCORE = 50
const OREBRO_MAX_SCORE = 100

describe('ompq_10', function () {
  it('ompq_10 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('ompq_10')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'OREBRO_01',
        'OREBRO_02',
        'OREBRO_03',
        'OREBRO_04',
        'OREBRO_05',
        'OREBRO_06',
        'OREBRO_07',
        'OREBRO_08',
        'OREBRO_09',
        'OREBRO_10',
      ]

      const configured_calculation_input_ids = Object.keys(ompq_10.inputSchema)

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    it('should have the correct calculation id', function () {
      const outcome = ompq_10_calculation.calculate({ payload: min_response })
      const configured_calculation_id = Object.keys(outcome)
      expect(configured_calculation_id).toEqual(['OREBRO', 'INTERPRETATION'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with a minimum response', function () {
      it('should return the minimum score', function () {
        const outcome = ompq_10_calculation.calculate({ payload: min_response })
        expect(outcome.OREBRO).toEqual(OREBRO_MIN_SCORE)
      })
    })

    describe('when called with a median response', function () {
      it('should return the median score', function () {
        const outcome = ompq_10_calculation.calculate({
          payload: median_response,
        })
        expect(outcome.OREBRO).toEqual(OREBRO_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      it('should return the maximum score', function () {
        const outcome = ompq_10_calculation.calculate({ payload: max_response })
        expect(outcome.OREBRO).toEqual(OREBRO_MAX_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const outcome = ompq_10_calculation.calculate({
          payload: random_response,
        })
        const EXPECTED_SCORE = 55
        expect(outcome.OREBRO).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return a ZodError', function () {
        expect(() => ompq_10_calculation.calculate({ payload: {} })).toThrow(
          ZodError,
        )
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ompq_10_calculation.calculate({
            payload: {
              OREBRO_01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ompq_10_calculation.calculate({
            payload: {
              OREBRO_01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ompq_10_calculation.calculate({
            payload: {
              OREBRO_01: 11,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
