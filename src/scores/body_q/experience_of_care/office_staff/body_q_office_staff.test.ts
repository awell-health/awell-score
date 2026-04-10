import { Score } from '../../../../classes'
import { ScoreLibrary } from '../../../library'
import { ZodError } from 'zod'
import { body_q_office_staff } from './body_q_office_staff'
import {
  best_response,
  worst_response,
  random_response,
  partial_response,
  half_missing_response,
} from './__testdata__/office_staff_test_responses'

const score = new Score(body_q_office_staff)

describe('body_q_office_staff', function () {
  it('should be available in the ScoreLibrary', function () {
    expect(ScoreLibrary).toHaveProperty('body_q_office_staff')
  })

  describe('basic assumptions', function () {
    const outcome = score.calculate({ payload: best_response })

    it('should return the expected number of results', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the expected result ids', function () {
      expect(Object.keys(outcome)).toEqual(['BODY_Q_OFFICE_STAFF_SCORE'])
    })
  })

  describe('validation', function () {
    it('should have all expected input ids', function () {
      const EXPECTED_INPUT_IDS = [
        'BODY_Q_OFFICE_STAFF_Q01',
        'BODY_Q_OFFICE_STAFF_Q02',
        'BODY_Q_OFFICE_STAFF_Q03',
        'BODY_Q_OFFICE_STAFF_Q04',
        'BODY_Q_OFFICE_STAFF_Q05',
        'BODY_Q_OFFICE_STAFF_Q06',
        'BODY_Q_OFFICE_STAFF_Q07',
        'BODY_Q_OFFICE_STAFF_Q08',
        'BODY_Q_OFFICE_STAFF_Q09',
        'BODY_Q_OFFICE_STAFF_Q10',
      ]
      expect(Object.keys(score.inputSchema)).toEqual(EXPECTED_INPUT_IDS)
    })

    it('should throw ZodError for invalid input', function () {
      expect(() =>
        score.calculate({ payload: { BODY_Q_OFFICE_STAFF_Q01: 99 } }),
      ).toThrow(ZodError)
    })

    it('should return null for all outputs when called with empty payload', function () {
      const outcome = score.calculate({
        payload: {},
        opts: { nullOnMissingInputs: true },
      })
      expect(outcome.BODY_Q_OFFICE_STAFF_SCORE).toEqual(null)
    })
  })

  describe('score calculation', function () {
    it('should return 0 for best (all 1s) response', function () {
      const outcome = score.calculate({ payload: best_response })
      expect(outcome.BODY_Q_OFFICE_STAFF_SCORE).toEqual(0)
    })

    it('should return 100 for worst (all 4s) response', function () {
      const outcome = score.calculate({ payload: worst_response })
      expect(outcome.BODY_Q_OFFICE_STAFF_SCORE).toEqual(100)
    })

    it('should return expected score for random response', function () {
      const outcome = score.calculate({ payload: random_response })
      expect(outcome.BODY_Q_OFFICE_STAFF_SCORE).toEqual(43)
    })
  })

  describe('mean imputation for missing items', function () {
    it('should calculate score using mean imputation when < 50% of items are missing', function () {
      const outcome = score.calculate({ payload: partial_response })
      expect(outcome.BODY_Q_OFFICE_STAFF_SCORE).toEqual(45)
    })

    it('should return null when >= 50% of items are missing', function () {
      const outcome = score.calculate({ payload: half_missing_response })
      expect(outcome.BODY_Q_OFFICE_STAFF_SCORE).toEqual(null)
    })
  })
})
