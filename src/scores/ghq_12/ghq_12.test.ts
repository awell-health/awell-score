import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/ghq_12_test_responses'
import { ghq_12 } from './ghq_12'

const GHQ_12_BEST_SCORE = 0
const GHQ_12_MEDIAN_SCORE = 6
const GHQ_12_WORST_SCORE = 12

const ghq_12_calculation = new Score(ghq_12)

describe('ghq_12', function () {
  it('ghq_12 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('ghq_12')
  })

  describe('basic assumptions', function () {
    const outcome = ghq_12_calculation.calculate({ payload: best_response })

    it('should return 1 calculation result', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the expected calculation id', function () {
      const EXPECTED_CALCULATION_ID = ['GHQ_12_SCORING']
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'GHQ_12_Q01',
          'GHQ_12_Q02',
          'GHQ_12_Q03',
          'GHQ_12_Q04',
          'GHQ_12_Q05',
          'GHQ_12_Q06',
          'GHQ_12_Q07',
          'GHQ_12_Q08',
          'GHQ_12_Q09',
          'GHQ_12_Q10',
          'GHQ_12_Q11',
          'GHQ_12_Q12',
        ]

        const configured_input_ids = Object.keys(ghq_12_calculation.inputSchema)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is below the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ghq_12_calculation.calculate({
            payload: {
              GHQ_12_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when an answer is above the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ghq_12_calculation.calculate({
            payload: {
              GHQ_12_Q01: 4,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when there are non-numerical answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ghq_12_calculation.calculate({
            payload: {
              GHQ_12_Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      it('should throw a ZodError', function () {
        expect(() => ghq_12_calculation.calculate({ payload: {} })).toThrow(
          ZodError,
        )
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      it('should return the worst score', function () {
        const score = ghq_12_calculation.calculate({
          payload: worst_response,
        })

        expect(score.GHQ_12_SCORING).toEqual(GHQ_12_WORST_SCORE)
      })
    })

    describe('when called with a median response', function () {
      it('should return the median score', function () {
        const score = ghq_12_calculation.calculate({
          payload: median_response,
        })

        expect(score.GHQ_12_SCORING).toEqual(GHQ_12_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      it('should return the maximum score', function () {
        const score = ghq_12_calculation.calculate({
          payload: best_response,
        })

        expect(score.GHQ_12_SCORING).toEqual(GHQ_12_BEST_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const score = ghq_12_calculation.calculate({
          payload: random_response,
        })

        const EXPECTED_SCORE = 9

        expect(score.GHQ_12_SCORING).toEqual(EXPECTED_SCORE)
      })
    })
  })
})
