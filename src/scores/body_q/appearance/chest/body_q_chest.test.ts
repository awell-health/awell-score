import { Score } from '../../../../classes'
import { ScoreLibrary } from '../../../library'
import { ZodError } from 'zod'
import { body_q_chest } from './body_q_chest'
import {
  best_response,
  worst_response,
  random_response,
  partial_response,
  too_many_missing_response,
} from './__testdata__/chest_test_responses'

const score = new Score(body_q_chest)

describe('body_q_chest', function () {
  it('should be available in the ScoreLibrary', function () {
    expect(ScoreLibrary).toHaveProperty('body_q_chest')
  })

  describe('basic assumptions', function () {
    const outcome = score.calculate({ payload: best_response })

    it('should return the expected number of results', function () {
      expect(Object.keys(outcome).length).toEqual(2)
    })

    it('should have the expected result ids', function () {
      expect(Object.keys(outcome)).toEqual([
        'BODY_Q_CHEST_SCORE',
        'BODY_Q_CHEST_SCAR_ITEM',
      ])
    })
  })

  describe('validation', function () {
    it('should have all expected input ids', function () {
      const EXPECTED_INPUT_IDS = [
        'BODY_Q_CHEST_Q01',
        'BODY_Q_CHEST_Q02',
        'BODY_Q_CHEST_Q03',
        'BODY_Q_CHEST_Q04',
        'BODY_Q_CHEST_Q05',
        'BODY_Q_CHEST_Q06',
        'BODY_Q_CHEST_Q07',
        'BODY_Q_CHEST_Q08',
        'BODY_Q_CHEST_Q09',
        'BODY_Q_CHEST_Q10',
        'BODY_Q_CHEST_Q11_SCAR',
      ]
      expect(Object.keys(score.inputSchema)).toEqual(EXPECTED_INPUT_IDS)
    })

    it('should throw ZodError for invalid input', function () {
      expect(() =>
        score.calculate({ payload: { BODY_Q_CHEST_Q01: 99 } }),
      ).toThrow(ZodError)
    })

    it('should return null for all outputs when called with empty payload', function () {
      const outcome = score.calculate({
        payload: {},
        opts: { nullOnMissingInputs: true },
      })
      expect(outcome.BODY_Q_CHEST_SCORE).toEqual(null)
      expect(outcome.BODY_Q_CHEST_SCAR_ITEM).toEqual(null)
    })
  })

  describe('score calculation', function () {
    it('should return 0 for best (all 1s) response', function () {
      const outcome = score.calculate({ payload: best_response })
      expect(outcome.BODY_Q_CHEST_SCORE).toEqual(0)
      expect(outcome.BODY_Q_CHEST_SCAR_ITEM).toEqual(1)
    })

    it('should return 100 for worst (all 4s) response', function () {
      const outcome = score.calculate({ payload: worst_response })
      expect(outcome.BODY_Q_CHEST_SCORE).toEqual(100)
      expect(outcome.BODY_Q_CHEST_SCAR_ITEM).toEqual(4)
    })

    it('should return expected score for random response', function () {
      const outcome = score.calculate({ payload: random_response })
      expect(outcome.BODY_Q_CHEST_SCORE).toEqual(44)
      expect(outcome.BODY_Q_CHEST_SCAR_ITEM).toEqual(3)
    })
  })

  describe('missing data handling', function () {
    it('should impute missing values with mean when less than 50% missing', function () {
      const outcome = score.calculate({ payload: partial_response })
      expect(outcome.BODY_Q_CHEST_SCORE).toEqual(49)
      expect(outcome.BODY_Q_CHEST_SCAR_ITEM).toEqual(2)
    })

    it('should return null for score when 50% or more scored items are missing', function () {
      const outcome = score.calculate({ payload: too_many_missing_response })
      expect(outcome.BODY_Q_CHEST_SCORE).toEqual(null)
      expect(outcome.BODY_Q_CHEST_SCAR_ITEM).toEqual(3)
    })
  })
})
