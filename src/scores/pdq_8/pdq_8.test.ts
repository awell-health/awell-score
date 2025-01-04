import { ScoreLibrary } from '../library'

import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/pdq_8_responses'
import { PDQ_8_INPUTS } from './definition/pdq_8_inputs'
import { pdq_8 } from './pdq_8'
import { Score } from '../../classes'
import { ZodError } from 'zod'

const PDQ_8_MIN_SCORE = 0
const PDQ_8_MEDIAN_SCORE = 50
const PDQ_8_MAX_SCORE = 100

const pdq8_calculation = new Score(pdq_8)

describe('pdq_8', function () {
  it('pdq_8 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('pdq_8')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'PDQ_8_MOBILITY',
        'PDQ_8_ADL',
        'PDQ_8_EMOTIONAL_WELLBEING',
        'PDQ_8_STIGMA',
        'PDQ_8_SOCIAL_SUPPORT',
        'PDQ_8_COGNITIONS',
        'PDQ_8_COMMUNICATIONS',
        'PDQ_8_BODILY_DISCOMFORT',
      ]

      const configured_calculation_input_ids = Object.keys(PDQ_8_INPUTS)

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = pdq8_calculation.calculate({ payload: min_response })

    it('should calculate a single score', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id = Object.keys(outcome)
      expect(configured_calculation_id).toEqual(['PDQ_8'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when a minimum response is passed', function () {
      it('should return the minimum score', function () {
        const outcome = pdq8_calculation.calculate({ payload: min_response })

        expect(outcome.PDQ_8).toEqual(PDQ_8_MIN_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      it('should return the median score', function () {
        const outcome = pdq8_calculation.calculate({
          payload: median_response,
        })

        expect(outcome.PDQ_8).toEqual(PDQ_8_MEDIAN_SCORE)
      })
    })

    describe('when a maximum response is passed', function () {
      it('should return the maximum score', function () {
        const outcome = pdq8_calculation.calculate({
          payload: max_response,
        })

        expect(outcome.PDQ_8).toEqual(PDQ_8_MAX_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      it('should return the expected score', function () {
        const outcome = pdq8_calculation.calculate({
          payload: random_response,
        })

        const EXPECTED_SCORE = 53

        expect(outcome.PDQ_8).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return undefined as the result', function () {
        expect(() => pdq8_calculation.calculate({ payload: {} })).toThrow(
          ZodError,
        )
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          pdq8_calculation.calculate({
            payload: {
              PDQ_8_MOBILITY: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          pdq8_calculation.calculate({
            payload: {
              PDQ_8_MOBILITY: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          pdq8_calculation.calculate({
            payload: {
              PDQ_8_MOBILITY: 5,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
