import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
  response_with_one_missing_item,
} from './__testdata__/oswestry_form_responses'
import { oswestry } from './oswestry'

const OSWESTRY_MIN_SCORE = 0
const OSWESTRY_MEDIAN_SCORE = 50
const OSWESTRY_MAX_SCORE = 100

const oswestry_calculation = new Score(oswestry)

describe('oswestry', function () {
  it('oswestry calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('oswestry')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        '1_pain',
        '2_personal_care',
        '3_lifting',
        '4_running',
        '5_sitting',
        '6_standing',
        '7_sleep',
        '8_sex_life',
        '9_social_life',
        '10_travel',
      ]

      const configured_calculation_input_ids = Object.keys(
        oswestry_calculation.inputSchema,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = oswestry_calculation.calculate({ payload: min_response })

    it('should calculate a single score', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(['OSWESTRY'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with a minimum response', function () {
      it('should return the minimum score', function () {
        const score = oswestry_calculation.calculate({ payload: min_response })
        expect(score.OSWESTRY).toEqual(OSWESTRY_MIN_SCORE)
      })
    })

    describe('when called with a median response', function () {
      it('should return the median score', function () {
        const score = oswestry_calculation.calculate({
          payload: median_response,
        })
        expect(score.OSWESTRY).toEqual(OSWESTRY_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      it('should return the maximum score', function () {
        const score = oswestry_calculation.calculate({
          payload: max_response,
        })

        expect(score.OSWESTRY).toEqual(OSWESTRY_MAX_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const score = oswestry_calculation.calculate({
          payload: random_response,
        })
        const EXPECTED_SCORE = 60

        expect(score.OSWESTRY).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return null as the result', function () {
        const result = oswestry_calculation.calculate({ payload: {} })

        expect(result.OSWESTRY).toEqual(null)
      })
    })

    describe('when called with a response with one missing item', function () {
      it('should return the expected score', function () {
        const score = oswestry_calculation.calculate({
          payload: response_with_one_missing_item,
        })

        const EXPECTED_SCORE = 36 // actual score is 35.5 but number is rounded up

        expect(score.OSWESTRY).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          oswestry_calculation.calculate({
            payload: {
              '1_pain': "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          oswestry_calculation.calculate({
            payload: {
              '1_pain': -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          oswestry_calculation.calculate({
            payload: {
              '1_pain': 6,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
