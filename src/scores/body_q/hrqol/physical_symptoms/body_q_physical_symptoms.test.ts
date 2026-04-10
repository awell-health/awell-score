import { Score } from '../../../../classes'
import { ScoreLibrary } from '../../../library'
import { ZodError } from 'zod'
import { body_q_physical_symptoms } from './body_q_physical_symptoms'
import {
  best_response,
  worst_response,
  random_response,
  partial_response,
  too_many_missing_response,
} from './__testdata__/physical_symptoms_test_responses'

const score = new Score(body_q_physical_symptoms)

describe('body_q_physical_symptoms', function () {
  it('should be available in the ScoreLibrary', function () {
    expect(ScoreLibrary).toHaveProperty('body_q_physical_symptoms')
  })

  describe('basic assumptions', function () {
    const outcome = score.calculate({ payload: best_response })

    it('should return the expected number of results', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the expected result ids', function () {
      expect(Object.keys(outcome)).toEqual([
        'BODY_Q_PHYSICAL_SYMPTOMS_SCORE',
      ])
    })
  })

  describe('validation', function () {
    it('should have all expected input ids', function () {
      const EXPECTED = [
        'BODY_Q_PHYSICAL_SYMPTOMS_Q01',
        'BODY_Q_PHYSICAL_SYMPTOMS_Q02',
        'BODY_Q_PHYSICAL_SYMPTOMS_Q03',
        'BODY_Q_PHYSICAL_SYMPTOMS_Q04',
        'BODY_Q_PHYSICAL_SYMPTOMS_Q05',
        'BODY_Q_PHYSICAL_SYMPTOMS_Q06',
        'BODY_Q_PHYSICAL_SYMPTOMS_Q07',
        'BODY_Q_PHYSICAL_SYMPTOMS_Q08',
        'BODY_Q_PHYSICAL_SYMPTOMS_Q09',
        'BODY_Q_PHYSICAL_SYMPTOMS_Q10',
      ]
      expect(Object.keys(score.inputSchema)).toEqual(EXPECTED)
    })

    it('should throw ZodError for invalid input', function () {
      expect(() =>
        score.calculate({
          payload: { BODY_Q_PHYSICAL_SYMPTOMS_Q01: 99 },
        }),
      ).toThrow(ZodError)
    })

    it('should return null when called with empty payload', function () {
      const outcome = score.calculate({
        payload: {},
        opts: { nullOnMissingInputs: true },
      })
      expect(outcome.BODY_Q_PHYSICAL_SYMPTOMS_SCORE).toEqual(null)
    })
  })

  describe('score calculation', function () {
    it('should return 10 for all-1s response', function () {
      const outcome = score.calculate({ payload: best_response })
      expect(outcome.BODY_Q_PHYSICAL_SYMPTOMS_SCORE).toEqual(10)
    })

    it('should return 40 for all-4s response', function () {
      const outcome = score.calculate({ payload: worst_response })
      expect(outcome.BODY_Q_PHYSICAL_SYMPTOMS_SCORE).toEqual(40)
    })

    it('should return expected score for random response', function () {
      const outcome = score.calculate({ payload: random_response })
      expect(outcome.BODY_Q_PHYSICAL_SYMPTOMS_SCORE).toEqual(23)
    })
  })

  describe('mean imputation for missing items', function () {
    it('should impute missing values with the mean and return a valid score when <50% items are missing', function () {
      const outcome = score.calculate({ payload: partial_response })
      expect(outcome.BODY_Q_PHYSICAL_SYMPTOMS_SCORE).toEqual(25)
    })

    it('should return null when >=50% of items are missing', function () {
      const outcome = score.calculate({
        payload: too_many_missing_response,
      })
      expect(outcome.BODY_Q_PHYSICAL_SYMPTOMS_SCORE).toEqual(null)
    })
  })
})
