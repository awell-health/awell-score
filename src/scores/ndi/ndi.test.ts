import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/ndi_form_responses'
import { ndi } from './ndi'

const NDI_MIN_SCORE = 0
const NDI_MEDIAN_SCORE = 50
const NDI_MAX_SCORE = 100

const ndi_calculation = new Score(ndi)

describe('ndi calculation', function () {
  it('ndi calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('ndi')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'NDI_Q01',
        'NDI_Q02',
        'NDI_Q03',
        'NDI_Q04',
        'NDI_Q05',
        'NDI_Q06',
        'NDI_Q07',
        'NDI_Q08',
        'NDI_Q09',
        'NDI_Q10',
      ]

      const configured_calculation_input_ids = Object.keys(
        ndi_calculation.inputSchema,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = ndi_calculation.calculate({ payload: min_response })

    it('should calculate a single score', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(['NDI'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with a minimum response', function () {
      it('should return the minimum score', function () {
        const outcome = ndi_calculation.calculate({ payload: min_response })
        expect(outcome.NDI).toEqual(NDI_MIN_SCORE)
      })
    })

    describe('when called with a median response', function () {
      it('should return the median score', function () {
        const outcome = ndi_calculation.calculate({ payload: median_response })
        expect(outcome.NDI).toEqual(NDI_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      it('should return the maximum score', function () {
        const outcome = ndi_calculation.calculate({ payload: max_response })
        expect(outcome.NDI).toEqual(NDI_MAX_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const outcome = ndi_calculation.calculate({ payload: random_response })
        const EXPECTED_SCORE = 42
        expect(outcome.NDI).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return null as the result', function () {
        const outcome = ndi_calculation.calculate({ payload: {} })
        expect(outcome.NDI).toEqual(null)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ndi_calculation.calculate({
            payload: {
              ...min_response,
              NDI_Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ndi_calculation.calculate({
            payload: {
              ...min_response,
              NDI_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ndi_calculation.calculate({
            payload: {
              ...min_response,
              NDI_Q01: 6,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
