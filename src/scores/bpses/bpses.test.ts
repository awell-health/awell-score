import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/bpses_form_responses'
import { bpses } from './bpses'

const BPSES_MIN_SCORE = 5
const BPSES_MEDIAN_SCORE = 15
const BPSES_MAX_SCORE = 25

const bpses_calculation = new Score(bpses)

describe('bpses', function () {
  it('bpses calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('bpses')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = ['Q01', 'Q02', 'Q03', 'Q04', 'Q05']

      const configured_calculation_input_ids = Object.keys(
        bpses_calculation.inputSchema,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = bpses_calculation.calculate({ payload: min_response })

    it('should calculate a single score', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(['BPSES_SCORE'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with a minimum response', function () {
      it('should return the minimum score', function () {
        const outcome = bpses_calculation.calculate({ payload: min_response })
        expect(outcome.BPSES_SCORE).toEqual(BPSES_MIN_SCORE)
      })
    })

    describe('when called with a median response', function () {
      it('should return the median score', function () {
        const outcome = bpses_calculation.calculate({
          payload: median_response,
        })
        expect(outcome.BPSES_SCORE).toEqual(BPSES_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      it('should return the maximum score', function () {
        const outcome = bpses_calculation.calculate({ payload: max_response })
        expect(outcome.BPSES_SCORE).toEqual(BPSES_MAX_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const outcome = bpses_calculation.calculate({
          payload: random_response,
        })
        const EXPECTED_SCORE = 11
        expect(outcome.BPSES_SCORE).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return a ZodError', function () {
        expect(() =>
          bpses_calculation.calculate({
            payload: {},
          }),
        ).toThrow(ZodError)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw a ZodError', function () {
        try {
          bpses_calculation.calculate({
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
                message: 'Invalid input',
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
          bpses_calculation.calculate({
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
                message: 'Invalid input',
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
          bpses_calculation.calculate({
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
                message: 'Invalid input',
                path: ['Q01'],
              }),
            ]),
          )
        }
      })
    })
  })
})
