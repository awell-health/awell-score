import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/mlks_test_responses'
import { mlks } from './mlks'

const mlks_calculation = new Score(mlks)

const scores = {
  best: 100,
  worst: 0,
  median: 48,
  random: 61,
}

describe('MLKS', function () {
  it('MLKS calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('mlks')
  })

  describe('basic assumptions', function () {
    const outcome = mlks_calculation.calculate({ payload: best_response })

    it('should have the expected result ids', function () {
      const EXPECTED_RESULT_IDS = ['MLKS_TOTAL_SCORE']

      const configured_calculation_ids = Object.keys(outcome)
      expect(configured_calculation_ids).toEqual(EXPECTED_RESULT_IDS)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'Q01_LIMP',
          'Q02_CANE_OR_CRUTCHES',
          'Q03_LOCKING_KNEE',
          'Q04_GIVING_WAY_SENSATION_KNEE',
          'Q05_PAIN',
          'Q06_SWELLING',
          'Q07_CLIMBING_STAIRS',
          'Q08_SQUATTING',
        ]

        const configured_input_ids = Object.keys(mlks_calculation.inputSchema)
        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })
  })

  describe('when an answer is below the expected range', function () {
    it('should throw an ZodError', function () {
      expect(() =>
        mlks_calculation.calculate({
          payload: {
            Q01_LIMP: -1,
          },
        }),
      ).toThrow(ZodError)
    })
  })

  describe('when an answer is above the expected range', function () {
    it('should throw an ZodError', function () {
      expect(() =>
        mlks_calculation.calculate({
          payload: {
            Q01_LIMP: 30,
          },
        }),
      ).toThrow(ZodError)
    })
  })

  describe('when an answer is above the expected range for Q01_LIMP', function () {
    it('should throw an ZodError', function () {
      expect(() =>
        mlks_calculation.calculate({
          payload: {
            Q04_GIVING_WAY_SENSATION_KNEE: 7,
          },
        }),
      ).toThrow(ZodError)
    })
  })

  describe('when there are non-numerical answers', function () {
    it('should throw an ZodError', function () {
      expect(() =>
        mlks_calculation.calculate({
          payload: {
            Q01_LIMP: "I'm not a number",
          },
        }),
      ).toThrow(ZodError)
    })
  })

  describe('when called with an empty response', function () {
    it('should throw a ZodError', function () {
      expect(() => mlks_calculation.calculate({ payload: {} })).toThrow(
        ZodError,
      )
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = mlks_calculation.calculate({ payload: worst_response })

      it('should return the worst score', function () {
        expect(outcome.MLKS_TOTAL_SCORE).toEqual(scores.worst)
      })
    })

    describe('when called with the best response', function () {
      const outcome = mlks_calculation.calculate({ payload: best_response })
      it('should return the best score', function () {
        expect(outcome.MLKS_TOTAL_SCORE).toEqual(scores.best)
      })
    })

    describe('when called with a median response', function () {
      const outcome = mlks_calculation.calculate({ payload: median_response })

      it('should return the median score', function () {
        expect(outcome.MLKS_TOTAL_SCORE).toEqual(scores.median)
      })
    })

    describe('when called with the random response', function () {
      const outcome = mlks_calculation.calculate({ payload: random_response })

      it('should return the exepected score', function () {
        expect(outcome.MLKS_TOTAL_SCORE).toEqual(scores.random)
      })
    })
  })
})
