import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/ess_test_responses'
import { ess } from './ess'

const ESS_MIN_SCORE = 0
const ESS_MID_SCORE = 12
const ESS_MAX_SCORE = 24

const ess_calculation = new Score(ess)

describe('ess', function () {
  it('ess calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('ess')
  })

  describe('basic assumptions', function () {
    const outcome = ess_calculation.calculate({ payload: min_response })

    it('should return 1 calculation result', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the expected calculation id', function () {
      const EXPECTED_CALCULATION_ID = ['ess']
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'ESS_Q1',
          'ESS_Q2',
          'ESS_Q3',
          'ESS_Q4',
          'ESS_Q5',
          'ESS_Q6',
          'ESS_Q7',
          'ESS_Q8',
        ]

        const configured_input_ids = Object.keys(ess_calculation.inputSchema)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })
    describe('when an answer is below the expected [0,4] range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ess_calculation.calculate({ payload: { ESS_Q1: -1 } }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with a response where there are answers out of the expected [0, 4] range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ess_calculation.calculate({ payload: { ESS_Q1: 5 } }),
        ).toThrow(ZodError)
      })
    })
    describe('when called with a response where there are non-numerical answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ess_calculation.calculate({
            payload: { ESS_Q1: "I'm not a number" },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when called with an empty response', function () {
      it('should throw a ZodError', function () {
        expect(() => ess_calculation.calculate({ payload: {} })).toThrow(
          ZodError,
        )
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with a minimum response', function () {
      it('should return the minimum score', function () {
        const score = ess_calculation.calculate({ payload: min_response })

        expect(score.ess).toEqual(ESS_MIN_SCORE)
      })
    })

    describe('when called with a median response', function () {
      it('should return the median score', function () {
        const score = ess_calculation.calculate({ payload: median_response })

        expect(score.ess).toEqual(ESS_MID_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      it('should return the maximum score', function () {
        const score = ess_calculation.calculate({ payload: max_response })

        expect(score.ess).toEqual(ESS_MAX_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const score = ess_calculation.calculate({ payload: random_response })

        const EXPECTED_SCORE = 13

        expect(score.ess).toEqual(EXPECTED_SCORE)
      })
    })
  })
})
