import { ZodError } from 'zod'
import { Score } from '../../../classes'
import { ScoreLibrary } from '../../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/cade_q_sv_test_responses'
import { cade_q_sv } from './cade_q_sv'

const BEST_SCORE = 20
const MEDIAN_SCORE = 10
const WORST_SCORE = 0

const cade_q_calculation = new Score(cade_q_sv)

describe('cade_q_sv', function () {
  it('cade_q_sv calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('cade_q_sv')
  })

  describe('basic assumptions', function () {
    const outcome = cade_q_calculation.calculate({ payload: best_response })

    it('should return 1 calculation result', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the expected calculation result id', function () {
      const EXPECTED_CALCULATION_ID = ['CADE_Q_SV_SCORE']

      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
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
          'Q08',
          'Q09',
          'Q10',
          'Q11',
          'Q12',
          'Q13',
          'Q14',
          'Q15',
          'Q16',
          'Q17',
          'Q18',
          'Q19',
          'Q20',
        ]

        const configured_input_ids = Object.keys(cade_q_calculation.inputSchema)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is below the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          cade_q_calculation.calculate({
            payload: {
              Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with a response where there are above the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          cade_q_calculation.calculate({
            payload: {
              Q01: 3,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with a response where there are non-numerical answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          cade_q_calculation.calculate({
            payload: {
              Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          cade_q_calculation.calculate({
            payload: {},
          }),
        ).toThrow(ZodError)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      it('should return the best score', function () {
        const outcome = cade_q_calculation.calculate({
          payload: best_response,
        })
        expect(outcome.CADE_Q_SV_SCORE).toEqual(BEST_SCORE)
      })
    })

    describe('when called with the median response', function () {
      it('should return the median score', function () {
        const outcome = cade_q_calculation.calculate({
          payload: median_response,
        })

        expect(outcome.CADE_Q_SV_SCORE).toEqual(MEDIAN_SCORE)
      })
    })

    describe('when called with the worst response', function () {
      it('should return the worst score', function () {
        const outcome = cade_q_calculation.calculate({
          payload: worst_response,
        })

        expect(outcome.CADE_Q_SV_SCORE).toEqual(WORST_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const outcome = cade_q_calculation.calculate({
          payload: random_response,
        })

        const EXPECTED_SCORE = 11

        expect(outcome.CADE_Q_SV_SCORE).toEqual(EXPECTED_SCORE)
      })
    })
  })
})
