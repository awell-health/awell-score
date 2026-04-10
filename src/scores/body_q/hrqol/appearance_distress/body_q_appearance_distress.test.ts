import { Score } from '../../../../classes'
import { ScoreLibrary } from '../../../library'
import { ZodError } from 'zod'
import { body_q_appearance_distress } from './body_q_appearance_distress'
import {
  best_response,
  worst_response,
  random_response,
  partial_response,
  too_many_missing_response,
} from './__testdata__/appearance_distress_test_responses'

const score = new Score(body_q_appearance_distress)

describe('body_q_appearance_distress', function () {
  it('should be available in the ScoreLibrary', function () {
    expect(ScoreLibrary).toHaveProperty('body_q_appearance_distress')
  })

  describe('basic assumptions', function () {
    const outcome = score.calculate({ payload: best_response })

    it('should return the expected number of results', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the expected result ids', function () {
      expect(Object.keys(outcome)).toEqual([
        'BODY_Q_APPEARANCE_DISTRESS_SCORE',
      ])
    })
  })

  describe('validation', function () {
    it('should have all expected input ids', function () {
      const EXPECTED = [
        'BODY_Q_APPEARANCE_DISTRESS_Q01',
        'BODY_Q_APPEARANCE_DISTRESS_Q02',
        'BODY_Q_APPEARANCE_DISTRESS_Q03',
        'BODY_Q_APPEARANCE_DISTRESS_Q04',
        'BODY_Q_APPEARANCE_DISTRESS_Q05',
        'BODY_Q_APPEARANCE_DISTRESS_Q06',
        'BODY_Q_APPEARANCE_DISTRESS_Q07',
        'BODY_Q_APPEARANCE_DISTRESS_Q08',
      ]
      expect(Object.keys(score.inputSchema)).toEqual(EXPECTED)
    })

    it('should throw ZodError for invalid input', function () {
      expect(() =>
        score.calculate({
          payload: { BODY_Q_APPEARANCE_DISTRESS_Q01: 99 },
        }),
      ).toThrow(ZodError)
    })

    it('should return null when called with empty payload', function () {
      const outcome = score.calculate({
        payload: {},
        opts: { nullOnMissingInputs: true },
      })
      expect(outcome.BODY_Q_APPEARANCE_DISTRESS_SCORE).toEqual(null)
    })
  })

  describe('score calculation', function () {
    it('should return 0 for best (all 1s) response', function () {
      const outcome = score.calculate({ payload: best_response })
      expect(outcome.BODY_Q_APPEARANCE_DISTRESS_SCORE).toEqual(0)
    })

    it('should return 100 for worst (all 4s) response', function () {
      const outcome = score.calculate({ payload: worst_response })
      expect(outcome.BODY_Q_APPEARANCE_DISTRESS_SCORE).toEqual(100)
    })

    it('should return expected score for random response', function () {
      const outcome = score.calculate({ payload: random_response })
      expect(outcome.BODY_Q_APPEARANCE_DISTRESS_SCORE).toEqual(47)
    })
  })

  describe('mean imputation for missing items', function () {
    it('should impute missing values with the mean and return a valid score when <50% items are missing', function () {
      const outcome = score.calculate({ payload: partial_response })
      expect(outcome.BODY_Q_APPEARANCE_DISTRESS_SCORE).toEqual(50)
    })

    it('should return null when >=50% of items are missing', function () {
      const outcome = score.calculate({ payload: too_many_missing_response })
      expect(outcome.BODY_Q_APPEARANCE_DISTRESS_SCORE).toEqual(null)
    })
  })
})
