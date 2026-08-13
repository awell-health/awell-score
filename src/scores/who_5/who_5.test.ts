import { ZodError } from 'zod'
import { Score } from '../../classes'
import {
  maximum_response,
  median_response,
  minimum_response,
  random_response,
} from './__testdata__/who_5_responses'
import { who_5 } from './who_5'

const who_5_calculation = new Score(who_5)

describe('who_5', function () {
  describe('basic assumptions', function () {
    const outcome = who_5_calculation.calculate({ payload: minimum_response })

    it('should return 2 calculation results', function () {
      expect(Object.keys(outcome).length).toEqual(2)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'WHO5_RAW_SCORE',
        'WHO5_PERCENTAGE_SCORE',
      ]

      expect(Object.keys(outcome)).toEqual(EXPECTED_CALCULATION_IDS)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'WHO5_Q01',
          'WHO5_Q02',
          'WHO5_Q03',
          'WHO5_Q04',
          'WHO5_Q05',
        ]

        expect(Object.keys(who_5.inputSchema)).toEqual(EXPECTED_INPUT_IDS)
      })
    })

    describe('when an answer is above the allowed range', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          who_5_calculation.calculate({
            payload: { ...minimum_response, WHO5_Q01: 6 },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when an answer is below the allowed range', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          who_5_calculation.calculate({
            payload: { ...minimum_response, WHO5_Q01: -1 },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when an answer is not a number', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          who_5_calculation.calculate({
            payload: { ...minimum_response, WHO5_Q01: 'I am not a number' },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      it('should throw a ZodError', function () {
        expect(() => who_5_calculation.calculate({ payload: {} })).toThrow(
          ZodError,
        )
      })
    })

    describe('when an item is left unanswered', function () {
      it('should throw a ZodError instead of scoring the omission as zero', function () {
        const { WHO5_Q05, ...incomplete_response } = maximum_response

        expect(() =>
          who_5_calculation.calculate({ payload: incomplete_response }),
        ).toThrow(ZodError)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the minimum response', function () {
      const outcome = who_5_calculation.calculate({
        payload: minimum_response,
      })

      it('should return the minimum raw score', function () {
        expect(outcome.WHO5_RAW_SCORE).toEqual(0)
      })

      it('should return the minimum percentage score', function () {
        expect(outcome.WHO5_PERCENTAGE_SCORE).toEqual(0)
      })
    })

    describe('when called with the median response', function () {
      const outcome = who_5_calculation.calculate({ payload: median_response })

      it('should return the expected raw score', function () {
        expect(outcome.WHO5_RAW_SCORE).toEqual(15)
      })

      it('should return the expected percentage score', function () {
        expect(outcome.WHO5_PERCENTAGE_SCORE).toEqual(60)
      })
    })

    describe('when called with the maximum response', function () {
      const outcome = who_5_calculation.calculate({ payload: maximum_response })

      it('should return the maximum raw score', function () {
        expect(outcome.WHO5_RAW_SCORE).toEqual(25)
      })

      it('should return the maximum percentage score', function () {
        expect(outcome.WHO5_PERCENTAGE_SCORE).toEqual(100)
      })
    })

    describe('when called with a random response', function () {
      const outcome = who_5_calculation.calculate({ payload: random_response })

      it('should return the expected raw score', function () {
        expect(outcome.WHO5_RAW_SCORE).toEqual(10)
      })

      it('should return the expected percentage score', function () {
        expect(outcome.WHO5_PERCENTAGE_SCORE).toEqual(40)
      })
    })
  })
})
