import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/basdai_form_responses'
import { basdai } from './basdai'

const BASDAI_MIN_SCORE = 0
const BASDAI_MEDIAN_SCORE = 5
const BASDAI_MAX_SCORE = 10

const basdai_10_calculation = new Score(basdai)

describe('basdai', function () {
  it('basdai calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('basdai')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'Q1',
        'Q2',
        'Q3',
        'Q4',
        'Q5',
        'Q6',
      ]

      const configured_calculation_input_ids = Object.keys(
        basdai_10_calculation.inputSchema,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = basdai_10_calculation.calculate({ payload: min_response })

    it('should calculate a single score', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(['BASDAI_TOTAL_SCORE'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with a minimum response', function () {
      it('should return the minimum score', function () {
        const outcome = basdai_10_calculation.calculate({
          payload: min_response,
        })
        expect(outcome.BASDAI_TOTAL_SCORE).toEqual(BASDAI_MIN_SCORE)
      })
    })

    describe('when called with a median response', function () {
      it('should return the median score', function () {
        const outcome = basdai_10_calculation.calculate({
          payload: median_response,
        })
        expect(outcome.BASDAI_TOTAL_SCORE).toEqual(BASDAI_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      it('should return the maximum score', function () {
        const outcome = basdai_10_calculation.calculate({
          payload: max_response,
        })
        expect(outcome.BASDAI_TOTAL_SCORE).toEqual(BASDAI_MAX_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const outcome = basdai_10_calculation.calculate({
          payload: random_response,
        })
        const EXPECTED_SCORE = 4.3
        expect(outcome.BASDAI_TOTAL_SCORE).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return null as the result', function () {
        const outcome = basdai_10_calculation.calculate({
          payload: {},
          opts: {
            nullOnMissingInputs: true,
          },
        })

        expect(outcome.BASDAI_TOTAL_SCORE).toEqual(null)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw a ZodError', function () {
        try {
          basdai_10_calculation.calculate({
            payload: {
              Q01: "I'm not a number",
            },
            opts: {
              nullOnMissingInputs: true,
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
          basdai_10_calculation.calculate({
            payload: {
              Q01: -1,
            },
            opts: {
              nullOnMissingInputs: true,
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
          basdai_10_calculation.calculate({
            payload: {
              Q01: 11,
            },
            opts: {
              nullOnMissingInputs: true,
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
