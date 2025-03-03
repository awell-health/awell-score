import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/mmse_responses'
import { MMSE_INPUTS } from './definition/mmse_inputs'
import { mmse } from './mmse'

const MMSE_MIN_SCORE = 0
const MMSE_MEDIAN_SCORE = 15
const MMSE_MAX_SCORE = 30

const mmse_calculation = new Score(mmse)

describe('mmse', function () {
  it('mmse calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('mmse')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'ORIENTATION_TO_TIME',
        'ORIENTATION_TO_PLACE',
        'REGISTRATION',
        'ATTENTION_AND_CALCULATION',
        'RECALL',
        'LANGUAGE',
        'CONSTRUCT',
      ]

      const configured_calculation_input_ids = Object.keys(
        mmse_calculation.inputSchema,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = mmse_calculation.calculate({ payload: min_response })

    it('should calculate a single score', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(['MMSE'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with a minimum response', function () {
      it('should return the minimum score', function () {
        const outcome = mmse_calculation.calculate({ payload: min_response })
        expect(outcome.MMSE).toEqual(MMSE_MIN_SCORE)
      })
    })

    describe('when called with a median response', function () {
      it('should return the median score', function () {
        const outcome = mmse_calculation.calculate({ payload: median_response })
        expect(outcome.MMSE).toEqual(MMSE_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      it('should return the maximum score', function () {
        const outcome = mmse_calculation.calculate({ payload: max_response })
        expect(outcome.MMSE).toEqual(MMSE_MAX_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const outcome = mmse_calculation.calculate({ payload: random_response })
        const EXPECTED_SCORE = 13
        expect(outcome.MMSE).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return null as the result', function () {
        const outcome = mmse_calculation.calculate({
          payload: {},
          opts: {
            nullOnMissingInputs: true,
          },
        })
        expect(outcome.MMSE).toEqual(null)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when called with a response where there are non-numerical answers', function () {
      it('should throw an error', function () {
        expect(() =>
          mmse_calculation.calculate({
            payload: {
              ...min_response,
              ORIENTATION_TO_TIME:
                "I'm not a number, you can't do math with me",
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with a response where there are answers that are not allowed', function () {
      it('should throw an ZodError when value on "ORIENTATION_TO_TIME" is out of the expected [0, 5] range', function () {
        expect(() =>
          mmse_calculation.calculate({
            payload: {
              ...min_response,
              ORIENTATION_TO_TIME: 6,
            },
          }),
        ).toThrow(ZodError)
      })

      it('should throw an ZodError when value on "ORIENTATION_TO_PLACE" is out of the expected [0, 5] range', function () {
        expect(() =>
          mmse_calculation.calculate({
            payload: {
              ...min_response,
              ORIENTATION_TO_PLACE: 6,
            },
          }),
        ).toThrow(ZodError)
      })

      it('should throw an ZodError when value on "REGISTRATION" is out of the expected [0, 3] range', function () {
        expect(() =>
          mmse_calculation.calculate({
            payload: {
              ...min_response,
              REGISTRATION: 4,
            },
          }),
        ).toThrow(ZodError)
      })

      it('should throw an ZodError when value on "ATTENTION_AND_CALCULATION" is out of the expected [0, 5] range', function () {
        expect(() =>
          mmse_calculation.calculate({
            payload: {
              ...min_response,
              ATTENTION_AND_CALCULATION: 6,
            },
          }),
        ).toThrow(ZodError)
      })

      it('should throw an ZodError when value on "RECALL" is out of the expected [0, 3] range', function () {
        expect(() =>
          mmse_calculation.calculate({
            payload: {
              ...min_response,
              RECALL: 4,
            },
          }),
        ).toThrow(ZodError)
      })

      it('should throw an ZodError when value on "LANGUAGE" is out of the expected [0, 8] range', function () {
        expect(() =>
          mmse_calculation.calculate({
            payload: {
              ...min_response,
              LANGUAGE: 9,
            },
          }),
        ).toThrow(ZodError)
      })

      it('should throw an ZodError when value on "CONSTRUCT" is out of the expected [0, 1] range', function () {
        expect(() =>
          mmse_calculation.calculate({
            payload: {
              ...min_response,
              CONSTRUCT: 2,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
