import { ZodError } from 'zod'
import { Score } from '../../../classes'
import { ScoreLibrary } from '../../library'
import {
  best_response,
  worst_response,
  random_response,
} from './__testdata__/eortc_qlq_br23_responses'
import { eortc_qlq_br23 } from './eortc_qlq_br23'

const calculation = new Score(eortc_qlq_br23)

describe('eortc_qlq_br23', function () {
  it('should be available in the score library', function () {
    expect(ScoreLibrary).toHaveProperty('eortc_qlq_br23')
  })

  describe('basic assumptions', function () {
    const outcome = calculation.calculate({ payload: best_response })

    it('should return 8 scores', function () {
      expect(Object.keys(outcome)).toHaveLength(8)
    })

    it('should have the correct score ids', function () {
      expect(Object.keys(outcome)).toEqual([
        'BRBI',
        'BRSEF',
        'BRSEE',
        'BRFU',
        'BRST',
        'BRBS',
        'BRAS',
        'BRHL',
      ])
    })
  })

  describe('validation', function () {
    describe('when an answer is below the allowed range', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          calculation.calculate({
            payload: { ...best_response, EORTC_QLQ_BR23_Q01: 0 },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when an answer is above the allowed range', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          calculation.calculate({
            payload: { ...best_response, EORTC_QLQ_BR23_Q01: 5 },
          }),
        ).toThrow(ZodError)
      })
    })
  })

  describe('best response — perfectly healthy patient', function () {
    const outcome = calculation.calculate({ payload: best_response })

    it('BRBI (body image) should be 100', function () {
      expect(outcome.BRBI).toEqual(100)
    })

    it('BRSEF (sexual functioning) should be 100', function () {
      expect(outcome.BRSEF).toEqual(100)
    })

    it('BRSEE (sexual enjoyment) should be 100', function () {
      expect(outcome.BRSEE).toEqual(100)
    })

    it('BRFU (future perspective) should be 100', function () {
      expect(outcome.BRFU).toEqual(100)
    })

    it('BRST (side effects) should be 0', function () {
      expect(outcome.BRST).toEqual(0)
    })

    it('BRBS (breast symptoms) should be 0', function () {
      expect(outcome.BRBS).toEqual(0)
    })

    it('BRAS (arm symptoms) should be 0', function () {
      expect(outcome.BRAS).toEqual(0)
    })

    it('BRHL (hair loss) should be null because Q04 = 1 (no hair loss)', function () {
      expect(outcome.BRHL).toBeNull()
    })
  })

  describe('worst response — very sick patient', function () {
    const outcome = calculation.calculate({ payload: worst_response })

    it('BRBI (body image) should be 0', function () {
      expect(outcome.BRBI).toEqual(0)
    })

    it('BRSEF (sexual functioning) should be 0', function () {
      expect(outcome.BRSEF).toEqual(0)
    })

    it('BRSEE (sexual enjoyment) should be null because Q15 = 1 (not sexually active)', function () {
      expect(outcome.BRSEE).toBeNull()
    })

    it('BRFU (future perspective) should be 0', function () {
      expect(outcome.BRFU).toEqual(0)
    })

    it('BRST (side effects) should be 100', function () {
      expect(outcome.BRST).toEqual(100)
    })

    it('BRBS (breast symptoms) should be 100', function () {
      expect(outcome.BRBS).toEqual(100)
    })

    it('BRAS (arm symptoms) should be 100', function () {
      expect(outcome.BRAS).toEqual(100)
    })

    it('BRHL (hair loss) should be 100', function () {
      expect(outcome.BRHL).toEqual(100)
    })
  })

  describe('random response', function () {
    const outcome = calculation.calculate({ payload: random_response })

    it('BRBI should be 50', function () {
      expect(outcome.BRBI).toBeCloseTo(50, 1)
    })

    it('BRSEF should be ~66.67', function () {
      expect(outcome.BRSEF).toBeCloseTo(66.67, 1)
    })

    it('BRSEE should be ~66.67', function () {
      expect(outcome.BRSEE).toBeCloseTo(66.67, 1)
    })

    it('BRFU should be ~66.67', function () {
      expect(outcome.BRFU).toBeCloseTo(66.67, 1)
    })

    it('BRST should be ~42.86', function () {
      expect(outcome.BRST).toBeCloseTo(42.86, 1)
    })

    it('BRBS should be ~83.33', function () {
      expect(outcome.BRBS).toBeCloseTo(83.33, 1)
    })

    it('BRAS should be ~11.11', function () {
      expect(outcome.BRAS).toBeCloseTo(11.11, 1)
    })

    it('BRHL should be 100', function () {
      expect(outcome.BRHL).toEqual(100)
    })
  })

  describe('not applicable rules', function () {
    it('BRSEE should be null when patient is not sexually active (Q15 = 1)', function () {
      const outcome = calculation.calculate({
        payload: { ...random_response, EORTC_QLQ_BR23_Q15: 1 },
      })
      expect(outcome.BRSEE).toBeNull()
    })

    it('BRHL should be null when patient had no hair loss (Q04 = 1)', function () {
      const outcome = calculation.calculate({
        payload: { ...random_response, EORTC_QLQ_BR23_Q04: 1 },
      })
      expect(outcome.BRHL).toBeNull()
    })
  })
})
