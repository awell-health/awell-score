import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/pdi_test_responses'
import { pdi } from './pdi'

const pdi_calculation = new Score(pdi)

describe('pdi', function () {
  it('pdi calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('pdi')
  })

  describe('basic assumptions', function () {
    const outcome = pdi_calculation.calculate({ payload: best_response })

    it('should have the expected result ids', function () {
      const EXPECTED_RESULT_IDS = ['PDI_INDEX']

      const configured_calculation_ids = Object.keys(outcome)

      expect(configured_calculation_ids).toEqual(EXPECTED_RESULT_IDS)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'Q01',
          'Q02',
          'Q03',
          'Q04',
          'Q05',
          'Q06',
          'Q07',
        ]

        const configured_input_ids = Object.keys(pdi_calculation.inputSchema)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })
  })

  describe('when an answer is below the expected range', function () {
    it('should throw an ZodError', function () {
      expect(() =>
        pdi_calculation.calculate({
          payload: {
            ...best_response,
            Q01: -1,
          },
        }),
      ).toThrow(ZodError)
    })
  })

  describe('when an answer is above the expected range', function () {
    it('should throw an ZodError', function () {
      expect(() =>
        pdi_calculation.calculate({
          payload: {
            ...best_response,
            Q01: 12,
          },
        }),
      ).toThrow(ZodError)
    })
  })

  describe('when there are non-numerical answers', function () {
    it('should throw an ZodError', function () {
      expect(() =>
        pdi_calculation.calculate({
          payload: {
            ...best_response,
            Q01: "I'm not a number",
          },
        }),
      ).toThrow(ZodError)
    })
  })

  describe('when called with an empty response', function () {
    const outcome = pdi_calculation.calculate({
      payload: {},
      opts: {
        nullOnMissingInputs: true,
      },
    })

    it('should null for the score', function () {
      expect(outcome.PDI_INDEX).toEqual(null)
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = pdi_calculation.calculate({
        payload: worst_response,
      })

      it('should return the worst score', function () {
        expect(outcome.PDI_INDEX).toEqual(70)
      })
    })

    describe('when called with the best response', function () {
      const outcome = pdi_calculation.calculate({
        payload: best_response,
      })

      it('should return the best score', function () {
        expect(outcome.PDI_INDEX).toEqual(0)
      })
    })

    describe('when called with a median response', function () {
      const outcome = pdi_calculation.calculate({
        payload: median_response,
      })

      it('should return the median score', function () {
        expect(outcome.PDI_INDEX).toEqual(35)
      })
    })

    describe('when called with the random response', function () {
      const outcome = pdi_calculation.calculate({
        payload: random_response,
      })

      it('should return the exepected score', function () {
        expect(outcome.PDI_INDEX).toEqual(20)
      })
    })
  })
})
