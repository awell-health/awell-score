import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/basfi_form_responses'
import { basfi } from './basfi'

const BASFI_MIN_SCORE = 0
const BASFI_MEDIAN_SCORE = 5
const BASFI_MAX_SCORE = 10

const basfi_calculation = new Score(basfi)

describe('basfi', function () {
  it('basfi calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('basfi')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'Q01',
        'Q02',
        'Q03',
        'Q04',
        'Q05',
        'Q06',
        'Q07',
        'Q08',
        'Q09',
        'Q10',
      ]

      const configured_calculation_input_ids = Object.keys(
        basfi_calculation.inputSchema,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = basfi_calculation.calculate({ payload: min_response })

    it('should calculate a single score', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(['BASFI_SCORE'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with a minimum response', function () {
      it('should return the minimum score', function () {
        const outcome = basfi_calculation.calculate({ payload: min_response })
        expect(outcome.BASFI_SCORE).toEqual(BASFI_MIN_SCORE)
      })
    })

    describe('when called with a median response', function () {
      it('should return the median score', function () {
        const outcome = basfi_calculation.calculate({
          payload: median_response,
        })
        expect(outcome.BASFI_SCORE).toEqual(BASFI_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      it('should return the maximum score', function () {
        const outcome = basfi_calculation.calculate({ payload: max_response })
        expect(outcome.BASFI_SCORE).toEqual(BASFI_MAX_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const outcome = basfi_calculation.calculate({
          payload: random_response,
        })
        const EXPECTED_SCORE = 4.6
        expect(outcome.BASFI_SCORE).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return null as the result', function () {
        const outcome = basfi_calculation.calculate({
          payload: {},
          opts: {
            returnMissingOnZodError: true,
          },
        })
        expect(outcome.BASFI_SCORE).toEqual(null)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw a ZodError', function () {
        try {
          basfi_calculation.calculate({
            payload: {
              Q01: "I'm not a number",
            },
            opts: {
              returnMissingOnZodError: true,
            },
          })
        } catch (error) {
          expect(error).toBeInstanceOf(ZodError)

          const err = error as ZodError
          expect(err.issues).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                message: 'Expected number, received string',
                path: ['Q01'],
              }),
            ]),
          )
        }
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw a ZodError', function () {
        try {
          basfi_calculation.calculate({
            payload: {
              Q01: -1,
            },
            opts: {
              returnMissingOnZodError: true,
            },
          })
        } catch (error) {
          expect(error).toBeInstanceOf(ZodError)

          const err = error as ZodError
          expect(err.issues).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                message: 'Number must be greater than or equal to 0',
                path: ['Q01'],
              }),
            ]),
          )
        }
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw a ZodError', function () {
        try {
          basfi_calculation.calculate({
            payload: {
              Q01: 11,
            },
            opts: {
              returnMissingOnZodError: true,
            },
          })
        } catch (error) {
          expect(error).toBeInstanceOf(ZodError)

          const err = error as ZodError
          expect(err.issues).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                message: 'Number must be less than or equal to 10',
                path: ['Q01'],
              }),
            ]),
          )
        }
      })
    })
  })
})
