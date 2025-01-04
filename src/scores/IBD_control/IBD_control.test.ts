import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/IBD_control_responses'
import { IBD_control } from './IBD_control'

const IBD_CONTROL_8_MIN_SCORE = 0
const IBD_CONTROL_8_MEDIAN_SCORE = 8
const IBD_CONTROL_8_MAX_SCORE = 16

const IBD_CONTROL_VAS_MIN_SCORE = 0
const IBD_CONTROL_VAS_MEDIAN_SCORE = 50
const IBD_CONTROL_VAS_MAX_SCORE = 100

const ibd_control_calculation = new Score(IBD_control)

describe('IBD_control', function () {
  it('IBD_control calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('IBD_control')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'ibd_control_1a',
        'ibd_control_1b',
        'ibd_control_3a',
        'ibd_control_3b',
        'ibd_control_3c',
        'ibd_control_3d',
        'ibd_control_3e',
        'ibd_control_3f',
        'ibd_control_5',
      ]

      const configured_calculation_input_ids = Object.keys(
        ibd_control_calculation.inputSchema,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = ibd_control_calculation.calculate({ payload: min_response })

    it('should return 2 scores', function () {
      expect(Object.keys(outcome).length).toEqual(2)
    })

    it('should have the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = ['IBD_CONTROL_8', 'IBD_CONTROL_VAS']

      const extracted_calculation_ids_from_outcome = Object.keys(outcome)

      expect(EXPECTED_CALCULATION_IDS).toEqual(
        extracted_calculation_ids_from_outcome,
      )
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when a minimum response is passed', function () {
      const outcome = ibd_control_calculation.calculate({
        payload: min_response,
      })

      it('should return the minimum score for IBD-Control-8', function () {
        expect(outcome.IBD_CONTROL_8).toEqual(IBD_CONTROL_8_MIN_SCORE)
      })

      it('should return the minimum score for IBD-Control-VAS', function () {
        expect(outcome.IBD_CONTROL_VAS).toEqual(IBD_CONTROL_VAS_MIN_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      const outcome = ibd_control_calculation.calculate({
        payload: median_response,
      })

      it('should return the median score for IBD-Control-8', function () {
        expect(outcome.IBD_CONTROL_8).toEqual(IBD_CONTROL_8_MEDIAN_SCORE)
      })

      it('should return the median score for IBD-Control-VAS', function () {
        expect(outcome.IBD_CONTROL_VAS).toEqual(IBD_CONTROL_VAS_MEDIAN_SCORE)
      })
    })

    describe('when a maximum response is passed', function () {
      const outcome = ibd_control_calculation.calculate({
        payload: max_response,
      })

      it('should return the maximum score for IBD-Control-8', function () {
        expect(outcome.IBD_CONTROL_8).toEqual(IBD_CONTROL_8_MAX_SCORE)
      })

      it('should return the maximum score for IBD-Control-VAS', function () {
        expect(outcome.IBD_CONTROL_VAS).toEqual(IBD_CONTROL_VAS_MAX_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      const outcome = ibd_control_calculation.calculate({
        payload: random_response,
      })

      it('should return the expected score for IBD-Control-8', function () {
        const EXPECTED_CONTROL_8_SCORE = 7
        expect(outcome.IBD_CONTROL_8).toEqual(EXPECTED_CONTROL_8_SCORE)
      })

      it('should return the expected score for IBD-Control-VAS', function () {
        const EXPECTED_CONTROL_VAS_SCORE = 54
        expect(outcome.IBD_CONTROL_VAS).toEqual(EXPECTED_CONTROL_VAS_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          ibd_control_calculation.calculate({ payload: {} }),
        ).toThrow(ZodError)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ibd_control_calculation.calculate({
            payload: {
              ibd_control_1a: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below the allowed answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ibd_control_calculation.calculate({
            payload: {
              ibd_control_1a: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above the allowed answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ibd_control_calculation.calculate({
            payload: {
              ibd_control_5: 101, // VAS
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
