import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/bwcs_test_responses'
import { bwcs } from './bwcs'
import { Score } from '../../classes'
import { ZodError } from 'zod'

const bwcs_calculation = new Score(bwcs)

describe('bwcs', function () {
  it('bwcs calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('bwcs')
  })

  describe('basic assumptions', function () {
    const outcome = bwcs_calculation.calculate({ payload: best_response })

    it('should have the expected result ids', function () {
      const EXPECTED_RESULT_IDS = ['BWCS_TOTAL_SCORE']

      const configured_calculation_ids = Object.keys(outcome)

      expect(configured_calculation_ids).toEqual(EXPECTED_RESULT_IDS)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = ['Q01', 'Q02', 'Q03', 'Q04', 'Q05']

        const configured_input_ids = Object.keys(
          bwcs_calculation.inputSchemaAsObject.shape,
        )

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })
  })

  describe('when an answer is below the expected range', function () {
    it('should throw an ZodError', function () {
      expect(() =>
        bwcs_calculation.calculate({
          payload: {
            Q01: -1,
          },
        }),
      ).toThrow(ZodError)
    })
  })

  describe('when an answer is above the expected range', function () {
    it('should throw an ZodError', function () {
      expect(() =>
        bwcs_calculation.calculate({
          payload: {
            Q01: 5,
          },
        }),
      ).toThrow(ZodError)
    })
  })

  describe('when an answer is above the expected range for Q04', function () {
    it('should throw an ZodError', function () {
      expect(() =>
        bwcs_calculation.calculate({
          payload: {
            Q04: 11,
          },
        }),
      ).toThrow(ZodError)
    })
  })

  describe('when there are non-numerical answers', function () {
    it('should throw an ZodError', function () {
      expect(() =>
        bwcs_calculation.calculate({
          payload: {
            Q01: "I'm not a number",
          },
        }),
      ).toThrow(ZodError)
    })
  })

  describe('when called with an empty response', function () {
    const outcome = bwcs_calculation.calculate({ payload: {} })

    it('should return null for the score', function () {
      expect(outcome.BWCS_TOTAL_SCORE).toEqual(null)
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = bwcs_calculation.calculate({ payload: worst_response })

      it('should return the worst score', function () {
        const score = outcome.BWCS_TOTAL_SCORE
        expect(score).toEqual(26)
      })
    })

    describe('when called with the best response', function () {
      const outcome = bwcs_calculation.calculate({ payload: best_response })

      it('should return the best score', function () {
        const score = outcome.BWCS_TOTAL_SCORE
        expect(score).toEqual(0)
      })
    })

    describe('when called with a median response', function () {
      const outcome = bwcs_calculation.calculate({ payload: median_response })

      it('should return the median score', function () {
        const score = outcome.BWCS_TOTAL_SCORE
        expect(score).toEqual(13)
      })
    })

    describe('when called with the random response', function () {
      const outcome = bwcs_calculation.calculate({
        payload: random_response,
      })

      it('should return the exepected score', function () {
        const score = outcome.BWCS_TOTAL_SCORE
        expect(score).toEqual(10)
      })
    })
  })
})
