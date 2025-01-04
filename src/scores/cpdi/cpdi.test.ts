import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/cpdi_test_responses'
import { cpdi } from './cpdi'

const CPDI_MIN_SCORE = 0
const CPDI_MEDIAN_SCORE = 50
const CPDI_MAX_SCORE = 100

const cpid_calculation = new Score(cpdi)

describe('cpdi', function () {
  it('cpdi calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('cpdi')
  })

  describe('basic assumptions', function () {
    const outcome = cpid_calculation.calculate({ payload: min_response })

    it('should return 1 calculation result', function () {
      expect(Object.keys(outcome)).toHaveLength(1)
    })

    it('should have the expected calculation id', function () {
      const EXPECTED_CALCULATION_ID = ['CPDI']
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'CPDI_Q1',
          'CPDI_Q2',
          'CPDI_Q3',
          'CPDI_Q4',
          'CPDI_Q5',
          'CPDI_Q6',
          'CPDI_Q7',
          'CPDI_Q8',
          'CPDI_Q9',
          'CPDI_Q10',
          'CPDI_Q11',
          'CPDI_Q12',
          'CPDI_Q13',
          'CPDI_Q14',
          'CPDI_Q15',
          'CPDI_Q16',
          'CPDI_Q17',
          'CPDI_Q18',
          'CPDI_Q19',
          'CPDI_Q20',
          'CPDI_Q21',
          'CPDI_Q22',
          'CPDI_Q23',
          'CPDI_Q24',
        ]

        const configured_input_ids = Object.keys(cpdi.inputSchema)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })
    describe('when an answer is below the expected [0,4] range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          cpid_calculation.calculate({
            payload: {
              CPDI_Q1: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with a response where there are answers out of the expected [0, 4] range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          cpid_calculation.calculate({
            payload: {
              CPDI_Q1: 5,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when called with a response where there are non-numerical answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          cpid_calculation.calculate({
            payload: {
              CPDI_Q1: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when called with an empty response', function () {
      it('should throw a ZodError', function () {
        expect(() => cpid_calculation.calculate({ payload: {} })).toThrow(
          ZodError,
        )
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with a minimum response', function () {
      it('should return the minimum score', function () {
        const score = cpid_calculation.calculate({
          payload: min_response,
        }).CPDI

        expect(score).toEqual(CPDI_MIN_SCORE)
      })
    })

    describe('when called with a median response', function () {
      it('should return the median score', function () {
        const score = cpid_calculation.calculate({
          payload: median_response,
        }).CPDI

        expect(score).toEqual(CPDI_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      it('should return the maximum score', function () {
        const score = cpid_calculation.calculate({
          payload: max_response,
        }).CPDI

        expect(score).toEqual(CPDI_MAX_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const score = cpid_calculation.calculate({
          payload: random_response,
        }).CPDI

        const EXPECTED_SCORE = 48

        expect(score).toEqual(EXPECTED_SCORE)
      })
    })
  })
})
